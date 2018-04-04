import React from 'react';
import {LinearProgress} from 'material-ui/Progress';

function LinearIndeterminate() {
    return (
        <div>
            <LinearProgress />
            <br />
            <LinearProgress color="secondary"/>
        </div>
    );
}


export default LinearIndeterminate;