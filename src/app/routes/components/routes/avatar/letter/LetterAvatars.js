import React from 'react';
import Avatar from 'material-ui/Avatar';


function LetterAvatars() {
    return (
        <div className="manage-margin d-flex align-items-center flex-wrap">
            <Avatar className="bg-primary size-100"><h1 className="m-0 text-white">DK</h1></Avatar>

            <Avatar className="bg-secondary size-80">M</Avatar>

            <Avatar className="bg-success size-60 text-white">G</Avatar>

            <Avatar className="bg-warning"><h3 className="m-0 text-white">R</h3></Avatar>

            <Avatar className="bg-info size-30"><h3 className="m-0 text-white">s</h3></Avatar>
        </div>
    );
}

export default (LetterAvatars);