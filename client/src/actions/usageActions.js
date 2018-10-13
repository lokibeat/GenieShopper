import axios from 'axios';

import {GET_USAGE, USAGE_LOADING, CLEAR_CURRENT_USAGE} from './types';

// get current usage

export const getCurrentUsage = () => dispatch => {
    dispatch (setUsageLoading());
    axios.get('api/usage')
    .then(res => 
        dispatch({
            type: GET_USAGE,
            payload: res.data
        })
        )
    .catch(err => 
        dispatch({
            type: GET_USAGE,
            payload: {}
        })
        );
};

// usage loading
export const setUsageLoading = () => {
    return {
        type: USAGE_LOADING
    }
}

// usage loading
export const clearCurrentUsage  = () => {
    return {
        type: CLEAR_CURRENT_USAGE
    }
}