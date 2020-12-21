import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from './actionTypes';

import axios from 'axios';

export const loginLoading = () => ({
    type: LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});

export const loginFailure = (payload) => ({
    type: LOGIN_FAILURE,
    payload
});

export const loginUser = (data) => (dispatch) => {
    dispatch(loginLoading());
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/login',
        data,
        headers: { 'content-type': 'application/json' }
    })
        .then((res) => dispatch(loginSuccess(res.data)))
        .catch((err) => dispatch(loginFailure(err.response.data)));
};

export const logout = () => ({
    type: LOGOUT,
    logout: 'logout'
});
