import { GET_USER_SUCCESS, GET_USER_FAILURE, MARK_USER_POSITIVE_SUCCESS, MARK_USER_RECOVERED_SUCCESS, ADD_TO_QUARANTINE_SUCCESS } from './actionTypes';

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

        case MARK_USER_POSITIVE_SUCCESS: {
            return {
                ...state,
                employees: action.payload.employees,
            };
        }

        case MARK_USER_RECOVERED_SUCCESS: {
            console.log(action.payload.employees)
            return {
                ...state,
                employees: action.payload.employees,
            };
        }

        case ADD_TO_QUARANTINE_SUCCESS: {
            return {
                ...state,
                employees: action.payload.employees,
            };
        }

        default:
            return state;
    }
};

export default reducer;
