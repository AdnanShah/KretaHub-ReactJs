import React from 'react';
import Button from 'material-ui/Button';

const RaisedButtons = () => {
    return (
        <div className="jr-btn-group">
            <Button variant="raised" className="jr-btn bg-white">Default</Button>
            <Button variant="raised" color="primary" className="jr-btn text-white">Primary</Button>
            <Button variant="raised" className="jr-btn bg-secondary text-white">Secondary</Button>
            <Button variant="raised" className="jr-btn" disabled>Disabled</Button>
        </div>
    );
};

export default RaisedButtons;