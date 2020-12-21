import { GET_USER_SUCCESS, GET_USER_FAILURE } from './actionTypes';

const initialState = {
    getUserError: '',
    employees: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER_SUCCESS: {
            return {
                ...state,
                employees: action.payload.employees,
                getUserError: ''
            };
        }
        case GET_USER_FAILURE:
            return {
                ...state,
                loginError: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
