import React, { Component } from "react";
import placeHolderImage from "../../assets/image-placeholder.svg";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

const userList = [
    { title: "User1", description: "unknown1", image: placeHolderImage },
    { title: "User2", description: "unknown2", image: placeHolderImage },
    { title: "User3", description: "unknown3", image: placeHolderImage },
    { title: "User4", description: "unknown4", image: placeHolderImage }
];

class UserList extends Component {
    render() {
        return (
            <div className="UserList">
                {userList.map((user, index) => (
                    <UserCard
                        key={`usercard ${index}`}
                        image={user.image}
                        title={user.title}
                        description={user.description}
                    />
                ))}
            </div>
        );
    }
}

export default UserList;