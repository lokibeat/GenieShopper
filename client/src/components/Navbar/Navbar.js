import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    console.log("handle close triggered");
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              aria-owns={anchorEl ? "simple-menu" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon />

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose} component={Link} to="/">
                  Home
                </MenuItem>

                <MenuItem
                  onClick={this.handleClose}
                  component={Link}
                  to="/login"
                >
                  Login
                </MenuItem>

                <MenuItem
                  onClick={this.handleClose}
                  component={Link}
                  to="/services"
                >
                  Services
                </MenuItem>

                <MenuItem
                  onClick={this.handleClose}
                  component={Link}
                  to="/usage"
                >
                  Usage
                </MenuItem>

                <MenuItem
                  onClick={this.handleClose}
                  component={Link}
                  to="/output"
                >
                  Output
                </MenuItem>

                <MenuItem
                  onClick={this.handleClose}
                  component={Link}
                  to="/monthly"
                >
                  Monthly
                </MenuItem>
              </Menu>
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow} />
            <Button color="inherit">
              <MenuItem onClick={this.handleClose} component={Link} to="/login">
                Login
              </MenuItem>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
