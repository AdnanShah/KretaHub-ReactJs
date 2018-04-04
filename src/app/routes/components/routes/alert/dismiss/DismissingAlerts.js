import React from 'react';
import {UncontrolledAlert} from 'reactstrap';

const DismissingAlerts = () => {
    return (
        <div className="row">
            <div className="col-lg-6 col-12">
                <h5>Default Alerts</h5>
                <UncontrolledAlert className="bg-white text-black shadow-lg">
                    This is Default alert — check it out!
                </UncontrolledAlert>

                <h5>Primary Alerts</h5>
                <UncontrolledAlert className="bg-primary text-white shadow-lg">
                    This is a primary alert — check it out!
                </UncontrolledAlert>

                <h5>Secondary Alerts</h5>
                <UncontrolledAlert className="bg-secondary text-white shadow-lg">
                    This is a secondary alert — check it out!
                </UncontrolledAlert>

                <h5>Success Alerts</h5>
                <UncontrolledAlert className="bg-success text-white shadow-lg">
                    This is a success alert — check it out!
                </UncontrolledAlert>

                <h5>Danger Alerts</h5>
                <UncontrolledAlert className="bg-danger text-white shadow-lg">
                    This is a danger alert — check it out!
                </UncontrolledAlert>
            </div>

            <div className="col-lg-6 col-12">
                <h5>Warning Alerts</h5>
                <UncontrolledAlert className="bg-warning text-white shadow-lg">
                    This is a warning alert — check it out!
                </UncontrolledAlert>

                <h5>Info Alerts</h5>
                <UncontrolledAlert className="bg-info text-white shadow-lg">
                    This is a info alert — check it out!
                </UncontrolledAlert>

                <h5>Light Alerts</h5>
                <UncontrolledAlert className="bg-light text-black shadow-lg">
                    This is a light alert — check it out!
                </UncontrolledAlert>

                <h5>Dark Alerts</h5>
                <UncontrolledAlert className="bg-dark text-white shadow-lg">
                    This is a dark alert — check it out!
                </UncontrolledAlert>
            </div>
        </div>
    );
};

export default DismissingAlerts;