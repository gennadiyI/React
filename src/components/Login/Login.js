import React, { Component } from "react";
import { Button } from "reactstrap";
import './Login.css';
import { Link } from "react-router-dom";


class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",

        }
    }
    // onEmailChange = (e) => {
    //     this.setState({ email: e.target.value })

    // }

    // onPasswordChange = (e) => {
    //     this.setState({ password: e.target.value })

    // }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    render() {


        const { email } = this.state;
        const { password } = this.state;
        const { onLogin } = this.props;
        return (

            <div className="Login">
                <div className="Login_content">
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label>email  </label>
                            <input
                                onChange={this.onInputChange}
                                value={email}
                                name="email"
                                className="form-control" type="email" />
                        </div>
                        {this.state.email}
                        {this.state.password}

                        <div className="form-group">
                            <label> password </label>
                            <input
                                onChange={this.onInputChange}
                                value={password}
                                name="password"
                                className="form-control" type="password" />
                        </div>



                        <Button
                            onClick={() => onLogin(email, password)}
                            color="dark"> Login</Button>
                    </form>
                    <div className="Login_content_link">
                        <Link to="/">already  login </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;