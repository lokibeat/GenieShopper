import React, { Component } from 'react'
import Input from '../common/Input';
import Button from '../common/Button';
import classes from './UsageInput.css';

class UsageInput extends Component {
    state = {
        usageValues: {
            month1: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Month1'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            month2: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Month2'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            month3: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Month3'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    usageHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.usageValues) {
            formData[formElementIdentifier] = this.state.usageValues[formElementIdentifier].value;
        }
        
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedUsageHandler = {
            ...this.state.usageHandler
        };
        const updatedFormElement = { 
            ...updatedUsageHandler[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedUsageHandler[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedUsageHandler) {
            formIsValid = updatedUsageHandler[inputIdentifier].valid && formIsValid;
        }
        this.setState({usageHandler: updatedUsageHandler, formIsValid: formIsValid});
    }


  render() {
    const formElementsArray = [];
        for (let key in this.state.usageValues) {
            formElementsArray.push({
                id: key,
                config: this.state.usageValues[key]
        });
    }
    let form = (
        <form onSubmit={this.usageHandler}>
            {formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
            ))}
            <Button btnType="Success" disabled={!this.state.formIsValid}>Submit</Button>
        </form>
    );
    return (
        <div className={classes.UsageInput}>
            <h4>Enter your Usage Information</h4>
            {form}
        </div>
    );
  }
}

export default UsageInput;