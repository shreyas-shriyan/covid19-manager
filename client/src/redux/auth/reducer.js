import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from './actionTypes';

const user = JSON.parse(localStorage.getItem('user')) || {};

const initialState = {
    authToken: user.authToken || '',
    loginloading: false,
    loginError: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_LOADING:
            return {
                ...state,
                loginLoading: true
            };
        case LOGIN_SUCCESS: {
            localStorage.setItem(
                'user',
                JSON.stringify({
                    ...action.payload,
                    ...state,
                    authToken: action.payload.authToken,
                })
            );
            return {
                ...action.payload,
                ...state,
                authToken: action.payload.authToken,
                loginLoading: false,
                loginError: ''
            };
        }
        case LOGIN_FAILURE:
            return {
                ...state,
                loginLoading: false,
                loginError: action.payload
            };

        case LOGOUT: {
            //resets localStorage and state
            localStorage.clear();
            return {
                authToken: '',
                loginloading: false,
                loginError: '',
            };
        }
        default:
            return state;
    }
};

export default reducer;
