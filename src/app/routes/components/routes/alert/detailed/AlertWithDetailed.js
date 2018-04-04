import React from 'react';
import {Alert} from 'reactstrap';

const AlertWithDetailed = () => {
    return (
        <div className="row">
            <div className="col-lg-6 col-12">
                <Alert className="shadow-lg bg-primary text-white">
                    <h3 className="alert-heading">Welcome!</h3>
                    <p>
                        You are successfully login into your account. We recommend you to go the
                        settings and use our 2 step verification system.
                    </p>
                </Alert>
            </div>
            <div className="col-lg-6 col-12">
                <Alert className="shadow-lg" color="danger">
                    <h3 className="alert-heading">Security Alert!</h3>
                    <p>
                        It seems like that your login information is compromised. Last time you
                        login from was London. Secure Your Account
                    </p>
                </Alert>
            </div>
        </div>
    );
};

export default AlertWithDetailed;