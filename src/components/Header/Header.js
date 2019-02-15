import React, { Component } from "react";
import { Button } from "reactstrap";
import PostModal from "../PostModal/PostModal";
import accentureLogo from "../../assets/instagram-logo.png";
import "./Header.css";

class Header extends Component {
    render() {
        const { isOpen, toggleModal, onInputChange, onPostSubmit } = this.props;

        return (
            <div className="Header">
                <div className="Header__title">
                    <img
                        className="Header__title__logo"
                        src={accentureLogo}
                        alt="accenture"
                    />
                    Bootcamp title
        </div>
                <Button onClick={toggleModal} color="dark">
                    Upload
        </Button>
                {isOpen && <PostModal
                    onImageUpload={this.onImageUpload}
                    onInputChange={onInputChange}
                    onClose={toggleModal}
                    onPostSubmit={onPostSubmit}
                />}
            </div>
        );
    }
}

export default Header;