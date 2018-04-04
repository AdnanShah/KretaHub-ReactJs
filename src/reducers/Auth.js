import {
    HIDE_MESSAGE,
    INIT_URL,
    ON_HIDE_LOADER,
    ON_SHOW_LOADER,
    SHOW_MESSAGE,
    SIGNIN_FACEBOOK_USER_SUCCESS,
    SIGNIN_GITHUB_USER_SUCCESS,
    SIGNIN_GOOGLE_USER_SUCCESS,
    SIGNIN_TWITTER_USER_SUCCESS,
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER_SUCCESS,
    SIGNUP_USER_SUCCESS
} from 'constants/ActionTypes';

const INIT_STATE = {
    loader: false,
    alertMessage: '',
    showMessage: false,
    initURL: '',
    authUser: localStorage.getItem('user_id'),
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SIGNUP_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload
            }
        }
        case SIGNIN_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload
            }
        }
        case INIT_URL: {
            return {
                ...state,
                initURL: action.payload
            }
        }
        case SIGNOUT_USER_SUCCESS: {
            return {
                ...state,
                authUser: null,
                initURL: '/app/dashboard/default',
                loader: false
            }
        }

        case SHOW_MESSAGE: {
            return {
                ...state,
                alertMessage: action.payload,
                showMessage: true,
                loader: false
            }
        }
        case HIDE_MESSAGE: {
            return {
                ...state,
                alertMessage: '',
                showMessage: false,
                loader: false
            }
        }

        case SIGNIN_GOOGLE_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload
            }
        }
        case SIGNIN_FACEBOOK_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload
            }
        }
        case SIGNIN_TWITTER_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload
            }
        }
        case SIGNIN_GITHUB_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload
            }
        }
        case ON_SHOW_LOADER: {
            return {
                ...state,
                loader: true
            }
        }
        case ON_HIDE_LOADER: {
            return {
                ...state,
                loader: false
            }
        }
        default:
            return state;
    }
}
