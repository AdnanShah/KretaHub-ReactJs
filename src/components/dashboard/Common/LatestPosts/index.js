import React from 'react';

const LatestPosts = ({recentData}) => {
    const {image, title, description, date, color} = recentData;
    return (

        <li className="media media-list post-list">
            <div className="size-80 post-image mr-3">
                <div className="grid-thumb-equal rounded">
                    <div className="grid-thumb-cover">
                        <img className="img-fluid rounded" src={image} alt="user-image" />
                    </div>
                </div>
            </div>
            <div className="media-body">
                <h4 className="mt-0 mb-1">{title}</h4>
                <p className="meta-date mb-1">{date}</p>
                <p className="text-muted">{description}</p>
            </div>
        </li>

    );
};

export default LatestPosts;