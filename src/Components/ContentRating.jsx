
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state={
        likes:0,
        dislikes:0,
        totalRatings:0,
        handleLike:()=>{
            this.setState((prevstate)=>(
                {likes: prevstate.likes+1,
                totalRatings: prevstate.totalRatings+1}
            ));
        },

        handleDislike:()=>{
            this.setState((prevstate)=>(
                {dislikes: prevstate.dislikes+1,
                totalRatings: prevstate.totalRatings+1}
            ));
        }
    };
  }

  render() {
    return (
     <>
     <div className="content-rating">
        <p>Users can like or dislike</p>
        <div className="rating-buttons">
            <button className="like" onClick={this.state.handleLike}>Likes ({this.state.likes})</button><br/><br/>
            <button className="dislike" onClick={this.state.handleDislike}>Dislikes ({this.state.dislikes})</button>
            <p>The Total Number of Ratings is: {this.state.totalRatings}</p>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
