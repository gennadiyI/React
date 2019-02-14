import React, { Component } from "react";
import "./UserCard.css";

class UserCard extends Component {
    render() {
        const { email, username, image } = this.props;

        return (
            <div className="UserCard">
                <div className="UserCard__image">
                    <img className="UserCard__image__img" src={image} alt="something" />
                </div>
                <div className="UserCard__content">
                    <div className="UserCard__content__title">{email}</div>
                    <div className="UserCard__content__description">{username}</div>
                </div>
            </div>
        );
    }
}

export default UserCard;