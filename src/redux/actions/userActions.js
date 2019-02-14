import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import {
    API, REGISTER_SUCCESS, REGISTER_ERROR,
    LOGIN_SUCCESS, LOGIN_ERRORR
} from "../../constants";

/* ----- actions  ------- */

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
        isRegistered: true,
    };
};
const registerError = () => {
    return {
        type: REGISTER_ERROR,
        isRegistered: false,
    };
};



const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
        isLoggedIn: true,
    };
};
const loginError = () => {
    return {
        type: LOGIN_ERRORR,
        isLoggedIn: false,
    };
};




/* ----- action creators  ------- */

export const register = (username, email, password) => {
    return dispatch => {
        return BootcampAPI.post(API.REGISTER, {
            username,
            email,
            hashedPassword: CryptoJS.SHA256(password).toString()
        })

            .then(() => dispatch(registerSuccess()))
            .catch(() => dispatch(registerError()));
    };
};

export const login = (email, password) => {
    return dispatch => {
        return BootcampAPI.post(API.LOGIN, {
            email,
            hashedPassword: CryptoJS.SHA256(password).toString()
        })

            .then(res => {
                const token = res.data.payload.token;
                localStorage.setItem("jwtToken", token);
                dispatch(loginSuccess());
            })
            .catch(() => dispatch(loginError()));
    };
};
