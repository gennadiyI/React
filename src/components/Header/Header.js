import React, { Component } from "react";
import { Button } from "reactstrap";
import logo from "../../assets/instagram-logo.png";
import "./Header.css";
import PostModal from "../PostModal/PostModal";





class Header extends Component {

    constructor() {
        super();
        this.state = {
            isOpened: false,

        }
        this.onOpenModal = this.onOpenModal.bind(this);
    }
    onOpenModal = () => {
        this.setState({ isOpen: true });
        console.log("opened");

    }

    onCloseModal = () => {
        this.setState({ isOpen: false });
        console.log("opened");

    }


    render() {
        const { isOpen } = this.state;
        return (
            <div className="Header">
                <div className="Header__title">
                    <img
                        className="Header__title__logo"
                        src={logo}
                        alt="logo"
                    />
                    title
          </div>
                <Button onClick={this.onOpenModal} color="primary">Create post</Button>
                {isOpen && <PostModal onClose={this.onCloseModal} />}



            </div>
        );
    }
}

export default Header;