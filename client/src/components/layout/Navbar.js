import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();

  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#" onClick={this.onLogoutClick.bind(this)} className="nav-link">Logout</a>
          </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
            Sign Up
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/login">
          Login
          </Link>
          </li>
      </ul>
    )

    return (
      <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/">Genie Shopper</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
          <Link className="navbar-brand" to="/services">Get Started</Link>
          </li>
        </ul>
        <Link className="navbar-brand" to="/usage">Enter Usage</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/output">Show Output</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/monthly">Show Chart</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

        {isAuthenticated ? authLinks : guestLinks}
        
      </div>
    </div>
  </nav>
        
      </div>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state => ({
  auth: state.auth
}));

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);