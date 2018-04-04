import React from 'react';
import Button from 'material-ui/Button';

const FloatingActionButtons = () => {
    return (
        <div className="manage-margin d-flex flex-wrap">
            <Button variant="fab" color="primary" className="jr-fab-btn" aria-label="add">
                <i className="zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"/>
            </Button>

            <Button variant="fab" className="jr-fab-btn text-white bg-secondary" aria-label="edit">
                <i className="zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"/>
            </Button>
            <Button variant="fab" className="jr-fab-btn" aria-label="edit" disabled>
                <i className="zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"/>
            </Button>
        </div>
    );
};

export default FloatingActionButtons;