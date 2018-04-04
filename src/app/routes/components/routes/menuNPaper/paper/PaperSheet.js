import React from 'react';
import Paper from 'material-ui/Paper';

function PaperSheet() {
    return (
        <div className="manage-margin d-flex">
            <Paper className="size-120" elevation={0}/>
            <Paper className="size-120" elevation={2}/>
            <Paper className="size-120" elevation={4}/>
            <Paper className="size-120" elevation={8}/>
            <Paper className="size-120" elevation={16}/>
        </div>
    );
}

export default PaperSheet;