import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';

const SimpleAppBar = () => {
    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <IconButton className="jr-menu-icon" aria-label="Menu">
                    <span className="menu-icon bg-grey" />
                </IconButton>
                <h4 className="mb-0">Company Name</h4>
            </Toolbar>
        </AppBar>
    );
};


export default SimpleAppBar;