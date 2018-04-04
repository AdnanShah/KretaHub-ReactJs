import React from 'react';
import {CircularProgress} from 'material-ui/Progress';


function CircularDeterminate() {
    return (
        <div className="manage-margin">
            <CircularProgress variant="determinate" value={75}/>
            <CircularProgress
                size={50}
                variant="determinate"
                value={25}
                min={0}
                max={50}
            />
            <CircularProgress color="secondary" variant="determinate" value={75}/>
            <CircularProgress
                color="secondary"
                size={50}
                variant="determinate"
                value={25}
                min={0}
                max={50}
            />
        </div>
    );
}


export default CircularDeterminate;