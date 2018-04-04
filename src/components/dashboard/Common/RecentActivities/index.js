import React from 'react';
import Avatar from 'material-ui/Avatar';


const RecentActivities = ({recentData}) => {
    const {image, title, description, date, color} = recentData;
    return (
        <div className="media social-list-line">
            <Avatar className={`${color} z-index-20 size-40 align-item-self mr-3`}>
                <i className={`zmdi zmdi-${image} text-white`} />
            </Avatar>
            <div className="media-body">
                <h4 className="mb-1">{title}</h4>
                <h5 className="text-muted mb-1">{description}</h5>
                <p className="meta-date">{date}</p>
            </div>
        </div>
    );
};

export default RecentActivities;