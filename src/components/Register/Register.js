import React, { Component } from "react";
import { Button } from "reactstrap";
import './Register.css';


class Register extends Component {
    render() {


        return (
            <div className="Register">
                <div className="Register_content">
                    <h2>Registration</h2>
                    <form>
                        <div className="form-group">
                            <label>username  </label>
                            <input className="form-control" type="username" />
                        </div>
                        <div className="form-group">
                            <label>email  </label>
                            <input className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label> password </label>
                            <input className="form-control" type="password" />
                        </div>

                        <Button color="dark"> Registration </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;