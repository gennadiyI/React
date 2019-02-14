import { combineReducers } from "redux";
import { registerReducer, loginReducer } from "./userReducers";



const rootReducer = combineReducers({
    registerReducer,
    loginReducer
});

export default rootReducer;