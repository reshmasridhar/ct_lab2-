// Review.js
import React from 'react';
import './Review.css';

const Review = ({ name, rating, comment }) => {
    // Assuming 'rating' is a number from 1 to 5
    const stars = Array.from({ length: rating }, (_, index) => (
        <span key={index} className="star">&#9733;</span>
    ));

    return (
        <div className="review">
            <div className="review-header">
                <span className="review-name">{name}</span>
                <div className="review-stars">{stars}</div>
            </div>
            <p className="review-comment">{comment}</p>
        </div>
    );
};

export default Review;
