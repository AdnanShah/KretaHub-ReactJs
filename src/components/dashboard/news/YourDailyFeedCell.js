import React from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

const YourDailyFeedCell = ({feed}) => {
    const {id, title, time, image, isSocial} = feed;
    return (
        <div key={id} className="media user-profile">
            <Avatar
                alt={image}
                src={image}
                className="user-avatar"
            />
            <div className="media-body align-self-center">
                <h5 className="mb-1">{title} </h5>
                <span className="meta-date">{time} </span>
                {isSocial &&
                <div className="my-2 btn-group-mins">
                    <a className="btn jr-btn-xs btn-primary" href="javascript:void(0)"><i
                        className="zmdi zmdi-thumb-up mr-1"/> Share</a>
                    <a className="btn jr-btn-xs btn-info" href="javascript:void(0)"><i
                        className="zmdi zmdi-share mr-1"/> Like</a>
                </div>
                }
            </div>
            <IconButton className="size-30"><i className="zmdi zmdi-chevron-right"/></IconButton>
        </div>
    );
};

export default YourDailyFeedCell;
