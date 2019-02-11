import React, { Component } from 'react';
import './UserCard.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


    class UserCard extends Component {
        render() {
            const {username, description, image} = this.props;
    
    
            return (
                <Card className = "UserCard mb-5">
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                   <CardTitle className = "">{username} </CardTitle>
                   
                   <CardText> {description} </CardText>
                </CardBody>
         </Card>
            )
        }
    }

    export default UserCard;