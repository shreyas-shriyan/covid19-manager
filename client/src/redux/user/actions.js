import { GET_USER_SUCCESS, GET_USER_FAILURE } from './actionTypes';

import axios from 'axios';

export const getUserSuccess = (payload) => ({
    type: GET_USER_SUCCESS,
    payload
});

export const getUserFailure = (payload) => ({
    type: GET_USER_FAILURE,
    payload
});

export const getUser = (data) => (dispatch) => {
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/user',
        data,
        headers: { 'content-type': 'application/json' }
    })
        .then((res) => dispatch(getUserSuccess(res.data)))
        .catch((err) => dispatch(getUserFailure(err.response.data)));
};