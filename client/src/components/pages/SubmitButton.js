import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function ButtonSizes(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Button size="large" className={classes.button}>
          Submit
        </Button>
      </div>
    </div>
  );
}

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonSizes);
