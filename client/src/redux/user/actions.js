import { GET_USER_SUCCESS, GET_USER_FAILURE, MARK_USER_POSITIVE_SUCCESS, MARK_USER_POSITIVE_FAILURE, MARK_USER_RECOVERED_SUCCESS, MARK_USER_RECOVERED_FAILURE } from './actionTypes';

import axios from 'axios';

export const getUserSuccess = (payload) => ({
    type: GET_USER_SUCCESS,
    payload
});

export const getUserFailure = (payload) => ({
    type: GET_USER_FAILURE,
    payload
});

export const markUserPositiveSuccess = (payload) => ({
    type: MARK_USER_POSITIVE_SUCCESS,
    payload
});

export const markUserPositiveFailure = (payload) => ({
    type: MARK_USER_POSITIVE_FAILURE,
    payload
});

export const markUserRecoveredSuccess = (payload) => ({
    type: MARK_USER_RECOVERED_SUCCESS,
    payload
});

export const markUserRecoveredFailure = (payload) => ({
    type: MARK_USER_RECOVERED_FAILURE,
    payload
});

export const getUser = (data) => (dispatch) => {
    return axios({
        method: 'get',
        url: 'http://localhost:5000/api/user',
        data,
        headers: { 'content-type': 'application/json' }
    })
        .then((res) => dispatch(getUserSuccess(res.data)))
        .catch((err) => dispatch(getUserFailure(err.response.data)));
};

export const markUserPositive = (data) => (dispatch) => {
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/user/mark-positive',
        data,
        headers: { 'content-type': 'application/json' }
    })
        .then((res) => dispatch(markUserPositiveSuccess(res.data)))
        .catch((err) => dispatch(markUserPositiveFailure(err.response.data)));
};

export const markUserRecovered = (data) => (dispatch) => {
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/user/mark-recovered',
        data,
        headers: { 'content-type': 'application/json' }
    })
        .then((res) => dispatch(markUserRecoveredSuccess(res.data)))
        .catch((err) => dispatch(markUserRecoveredFailure(err.response.data)));
};

