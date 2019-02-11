import React, { Component } from 'react';
import './PostCard.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
//import placeHolderImage from "../../assets/image-placeholder.svg";


class PostCard extends Component {
    render() {
        const {title, description, image} = this.props;


        return (
            <Card className = "PostCard mb-5">
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
               <CardTitle className= "PostCard_card-title">{title} </CardTitle>
               
               <CardText> {description} </CardText>
            </CardBody>
     </Card>
        )
    }
}

export default PostCard;