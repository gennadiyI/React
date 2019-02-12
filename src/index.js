import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registration" component={Register} />
                </Switch>
            </BrowserRouter>
        )
    }
}




ReactDOM.render(<Root />, document.getElementById('root'));

