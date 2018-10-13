import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions'; 

import { Provider } from 'react-redux';
import store from "./store";



import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register  from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Usage from "./components/pages/Usage";
import Output from "./components/pages/Output";
import Monthly from "./components/pages/Monthly";


import './App.css';

// check for token
if(localStorage.jwtToken !== "undefined") {
  // set auth token auth
  setAuthToken(localStorage.jwtToken);
  // decode tokena dn get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() /1000;
  if(decoded.exp < currentTime) {
    // logout user
    store.dispatch(logoutUser());
    // clear current profile
    store.dispatch(clearCurrentProfile());
    // redirect to login
    window.location.hreg = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store= {store}>
          <Router>
          <div className="App">
            <Navbar />
            <Route exact path='/' component={Landing} />
            <div className="container">
              <Route exact path="/register" component={ Register }/>
              <Route exact path="/login" component={ Login }/>
              <Route exact path="/dashboard" component={ Dashboard }/>
              <Route exact path="/" component={Home} />
              <Route exact path="/services" component={Services} />
              <Route path="/usage" component={Usage} />
              <Route path="/output" component={Output} />
              <Route path="/monthly" component={Monthly} />   
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    ); 
  }
}

export default App;
