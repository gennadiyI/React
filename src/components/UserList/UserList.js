import React, { Component } from 'react';
import UserCard from "../UserCard/UserCard"
import './UserList.css';
import placeHolderImage from "../../assets/image-placeholder.svg";

const userList = [
    {username:"user1", description:"Userdesc1", image: placeHolderImage},
    {username:"user2", description:"UserDesc2", image: placeHolderImage},
    {username:"user3", description:"UserDesc3", image: placeHolderImage},
];


    class UserList extends Component {
        render() {
            return(
        <div>
            
           <div className = "UserList"> 
           {userList.map(user => (
                <UserCard
                  username = {user.username}
                  description = {user.description}
                  image = {user.image}  
                />
           ))}

          </div>
                    
        </div>  
            )
        }
    }

    export default UserList;