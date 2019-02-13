import React, { Component } from "react";
import { Button } from "reactstrap";
import './Register.css';


class Register extends Component {

    constructor() {
        super();
        this.state = {
            username: null,
            email: null,
            password: null

        }
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }


    render() {
        const { username, email, password } = this.state;

        const { onRegister } = this.props;



        return (
            <div className="Register">
                <div className="Register_content">
                    <h2>Registration</h2>
                    <form>
                        <div className="form-group">
                            <label>username  </label>
                            <input
                                onChange={this.onInputChange}
                                value={username}
                                className="form-control" type="username" />
                        </div>
                        {/* {this.state.username}
                        {this.state.email}
                        {this.state.password} */}
                        <div className="form-group">
                            <label>email  </label>
                            <input
                                onChange={this.onInputChange}
                                value={email}
                                className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label> password </label>
                            <input
                                onChange={this.onInputChange}
                                value={password}
                                className="form-control" type="password" />
                        </div>

                        <Button
                            onClick={() => onRegister(email, password, username)}
                            color="dark"> Registration </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;