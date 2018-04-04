import React from 'react';
import NotificationItem from "./NotificationItem";
import {notifications} from "./data";

const AppNotification = () => {
    $('.messages-list').slimscroll({
        height: '280px'
    });
    return (
        <div className="messages-list">
            <ul className="list-unstyled">
                {notifications.map((notification, index) => <NotificationItem key={index} notification={notification}/>)
                }
            </ul>
        </div>
    )
};

export default AppNotification;

