import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';


// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
    .post('/api/users/register', userData)
    .then(res=> history.push('/login'))
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// login - get user token
export const loginUser = (userData) => dispatch => {
    axios.post('/api/users/login',userData)
    .then(res => {
        // save to localstorage
        const { token } = res.data;
        // set token to localstorage
        localStorage.setItem('jwtToken', token);
        // set token to Auth header
        setAuthToken (token);
        // decode user data from token
        try {
            
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        } catch (err){

            console.log(err)
        } 
        // set current user
    })
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// set logged in user 
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// log user out
export const logoutUser = () => dispatch => {
    // remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};