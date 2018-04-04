import React from 'react';
import Avatar from 'material-ui/Avatar';

const FeedCell = ({feed}) => {
    const {id, desc, time, updateTime, image, isSocial} = feed;
    return (

        <div key={id} className="media user-profile">
            <Avatar
                alt="..."
                src={image}
                className="user-avatar"
            />
            <div className="media-body align-self-center">
                <h5 className="mb-1">{desc}</h5>
                <span className="meta-date">{time} </span>
                {isSocial &&
                <div className="my-2 btn-group-mins">
                    <a className="btn jr-btn-xs btn-primary" href="javascript:void(0)"><i
                        className="zmdi zmdi-thumb-up mr-1"/>&nbsp;Like</a>
                    <a className="btn jr-btn-xs btn-info" href="javascript:void(0)"><i
                        className="zmdi zmdi-share mr-1"/>&nbsp;Share</a>
                </div>
                }
            </div>
            <span className="ml-1 meta-date">{updateTime}</span>
        </div>

    );
};

export default FeedCell;
