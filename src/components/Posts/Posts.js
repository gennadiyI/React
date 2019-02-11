import React, { Component } from 'react';
import PostCard from "../PostCard/PostCard"
import './Posts.css';
import placeHolderImage from "../../assets/image-placeholder.svg";

const posts = [
    {title:"1 title", description:"111", image: placeHolderImage},
    {title:"2 title", description:"222", image: placeHolderImage},
    {title:"3 title", description:"333", image: placeHolderImage},
];




class Posts extends Component {
    render() {
        return(
    <div>
        
       <div className = "Posts"> 
       {posts.map(post => (
            <PostCard
              title = {post.title}
              description = {post.description}
              image = {post.image}  
            />
       ))}

            {/* <PostCard title = "Firts title" description = "1 desc"  image = {placeHolderImage}  
            />
            <PostCard title = "Second title" description = "2 desc" image = {placeHolderImage}
            />
            <PostCard title = "Third title" description = "3 desc" image = {placeHolderImage}
            />
            <PostCard title = "Fourth title" description = "4 desc" image = {placeHolderImage}
            /> */}
     
      </div>
                
    </div>   



        )
    }
}
export default Posts;