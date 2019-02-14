import React, { Component } from "react";
import { Button } from "reactstrap";
import './Register.css';
import { Link } from "react-router-dom";


class Register extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: ""

        }
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

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
                                value={this.state.username}
                                className="form-control"
                                name="username"
                                type="username" />
                        </div>
                        {/* {this.state.username}
                        {this.state.email}
                        {this.state.password} */}
                        <div className="form-group">
                            <label>email  </label>
                            <input
                                onChange={this.onInputChange}
                                value={this.state.email}
                                className="form-control"
                                name="email"
                                type="email" />
                        </div>
                        <div className="form-group">
                            <label> password </label>
                            <input
                                onChange={this.onInputChange}
                                value={this.state.password}
                                className="form-control"
                                name="password"
                                type="password" />
                        </div>

                        <Button
                            onClick={() => onRegister(username, email, password)}
                            color="dark"> Registration </Button>

                    </form>
                    <div className="Register_content_link">
                        <Link to="/login">already registererd? login </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;