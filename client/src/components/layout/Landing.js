import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';


class Landing extends Component {

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  
  render() {

    //  to determine to show logged in content or non secure content

    const { isAuthenticated, user } = this.props.auth;

    const authenticatedContent = (
      <div>
        Hello Authenticated user
      </div>
    );

    const guestContent = (
      <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Genie Shopper
              </h1>
              <p className="lead"> Shop electricity programs and providers with your customized usage profile.</p>
              <hr />
              <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
              <Link to="/login" className="btn btn-lg btn-light">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
    return (
      <div>
      {isAuthenticated ? authenticatedContent : guestContent}
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Landing);