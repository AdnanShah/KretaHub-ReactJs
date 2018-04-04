import React from 'react';
import Button from 'material-ui/Button';

const FlatButtons = () => {
    return (
        <div>
            <div className="jr-btn-group">
                <Button className="jr-btn">Default</Button>
                <Button className="jr-btn" color="primary">Primary</Button>
                <Button className="jr-btn" color="secondary">Secondary</Button>
                <Button className="jr-btn" color="primary" disabled>Disabled</Button>
            </div>

            <div className="jr-btn-group">
                <Button className="jr-btn">
                    <i className="zmdi zmdi-github zmdi-hc-lg"/>
                    <span>ICON BUTTON</span>
                </Button>
                <Button className="jr-btn" color="primary">
                    <i className="zmdi zmdi-github zmdi-hc-lg"/>
                    <span>ICON BUTTON</span>
                </Button>
                <Button className="jr-btn" color="secondary">
                    <span>ICON RIGHT BUTTON</span>
                    <i className="zmdi zmdi-github"/>
                </Button>
                <Button className="jr-btn jr-btn-lg" color="primary">
                    <i className="zmdi zmdi-github"/>
                </Button>
            </div>

            <div>
                <Button variant="raised" color="primary" className="jr-btn text-uppercase text-white btn-block">Full
                    Width
                    Primary</Button>
                <Button variant="raised" className="jr-btn bg-secondary text-uppercase text-white btn-block">Full Width
                    large button</Button>
                <Button variant="raised" className="jr-btn bg-white text-uppercase text-black btn-block">Full Width
                    default button</Button>
                <Button className="jr-btn text-uppercase btn-block" color="default">Full Width default button</Button>
            </div>
        </div>
    );
};

export default FlatButtons;