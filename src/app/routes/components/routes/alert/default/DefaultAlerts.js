import React from 'react';
import {Alert} from 'reactstrap';

const DefaultAlerts = () => {
    return (
        <div className="row">
            <div className="col-lg-6 col-12">
                <h5>Default Alerts</h5>
                <Alert className="shadow-lg" color="default">
                    This is a default alert — check it out!
                </Alert>

                <h5>primary Alerts</h5>
                <Alert className="shadow-lg" color="primary">
                    This is a primary alert — check it out!
                </Alert>

                <h5>Secondary Alerts</h5>
                <Alert className="shadow-lg" color="secondary">
                    This is a secondary alert — check it out!
                </Alert>


                <h5>Success Alerts</h5>
                <Alert className="shadow-lg" color="success">
                    This is a success alert — check it out!
                </Alert>

                <h5>Danger Alerts</h5>
                <Alert className="shadow-lg" color="danger">
                    This is a danger alert — check it out!
                </Alert>
            </div>
            <div className="col-lg-6 col-12">
                <h5>Warning Alerts</h5>
                <Alert className="shadow-lg" color="warning">
                    This is a warning alert — check it out!
                </Alert>

                <h5>Info Alerts</h5>
                <Alert className="shadow-lg" color="info">
                    This is a info alert — check it out!
                </Alert>

                <h5>Light Alerts</h5>
                <Alert className="shadow-lg" color="light">
                    This is a light alert — check it out!
                </Alert>

                <h5>Dark Alerts</h5>
                <Alert className="shadow-lg" color="dark">
                    This is a dark alert — check it out!
                </Alert>
            </div>
        </div>

    );
};

export default DefaultAlerts;