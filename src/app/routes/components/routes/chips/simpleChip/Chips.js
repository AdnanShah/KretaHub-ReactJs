import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FaceIcon from 'material-ui-icons/Face';
import Done from 'material-ui-icons/Done';


function handleRequestDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function Chips() {
    return (
        <div className="manage-margin d-flex flex-wrap">
            <Chip label="Basic Chip" className="mx-2" />
            <Chip
                avatar={<Avatar>MB</Avatar>}
                label="Clickable Chip"
                onClick={handleClick}
            />
            <Chip
                avatar={<Avatar src="http://via.placeholder.com/150x150"/>}
                label="Deletable Chip"
                onDelete={handleRequestDelete}
            />
            <Chip
                avatar={
                    <Avatar>
                        <FaceIcon className="bg-gray lighten-3" />
                    </Avatar>
                }
                label="Clickable Deletable Chip"
                onClick={handleClick}
                onDelete={handleRequestDelete}
            />
            <Chip
                label="Custom delete icon Chip"
                onClick={handleClick}
                onDelete={handleRequestDelete}
                deleteIcon={<Done />}
            />
        </div>
    );
}

export default Chips;