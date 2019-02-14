import { combineReducers } from "redux";
import { registerReducer, loginReducer, getUsersReducer } from "./userReducers";



const rootReducer = combineReducers({
    registerReducer,
    loginReducer,
    getUsersReducer
});

export default rootReducer;