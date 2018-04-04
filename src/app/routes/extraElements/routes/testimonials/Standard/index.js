import React from 'react';

const Standard = ({testimonial}) => {
    const {content, avatar, name, title} = testimonial;
    return (
        <div className="testimonial-in-bg">
            <div className="pic">
                <img src={avatar} />
            </div>
            <p className="description">{content}</p>
            <h5 className="title">{name}</h5>
            <small className="post-designation text-white">{title}</small>
        </div>
    )
};
export default Standard;

