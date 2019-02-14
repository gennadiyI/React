import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dotenv from "dotenv";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegisterContainer from './containers/RegisterContainer';
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
// import Login from './components/Login/Login';
import LoginContainer from './containers/LoginContainer';


dotenv.config();



const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));


class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/login" component={LoginContainer} />
                        <Route exact path="/registration" component={RegisterContainer} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}




ReactDOM.render(<Root />, document.getElementById('root'));

