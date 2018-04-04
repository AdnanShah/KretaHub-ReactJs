import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Classic = ({testimonial}) => {
    const {content, avatar, name, title} = testimonial;
    return (
        <div className="classic-testimonial">
            <div className="pic">
                <img className="img-circle rounded center-block" src={avatar}
                     alt="..." />
            </div>
            <h3 className="title">{name}</h3>
            <small className="post-designation">{title}</small>

            <div className="star-rating">
                <StarRatingComponent name={name} starCount={5} value={4.5} />
            </div>
            <p className="description">{content}</p>
        </div>
    )
};

export default Classic;

