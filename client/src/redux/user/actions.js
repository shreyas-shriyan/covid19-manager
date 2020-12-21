import { GET_USER_SUCCESS, GET_USER_FAILURE, MARK_USER_POSITIVE_SUCCESS, MARK_USER_POSITIVE_FAILURE, MARK_USER_RECOVERED_SUCCESS, MARK_USER_RECOVERED_FAILURE, ADD_TO_QUARANTINE_SUCCESS } from './actionTypes';

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

export const addToQuarantineSuccess = (payload) => ({
    type: ADD_TO_QUARANTINE_SUCCESS,
    payload
});

export const getUser = () => (dispatch) => {
    return axios({
        method: 'get',
        url: 'http://localhost:5000/api/user',
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

export const addUsersToQuarantine = (data) => (dispatch) => {

    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/user/mark-quarantine',
        data,
        headers: { 'content-type': 'application/json' }
    })
        .then((res) => dispatch(addToQuarantineSuccess(res.data)))
        .catch((err) => console.log(err));
};

