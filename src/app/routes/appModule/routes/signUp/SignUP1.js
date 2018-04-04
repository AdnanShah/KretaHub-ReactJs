import React from 'react';
import {Link} from 'react-router-dom'
import IntlMessages from 'util/IntlMessages';

const SignUP1 = () => {
    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content text-center">
                <div className="login-header">
                    <Link className="app-logo" to="/" title="Jambo">
                        <img src="http://via.placeholder.com/215x75" alt="jambo" title="jambo"/>
                    </Link>
                </div>

                <div className="mb-4">
                    <h2><IntlMessages id="appModule.createAccount"/></h2>
                </div>

                <div className="login-form">
                    <form method="post" action="/">
                        <div className="form-group">
                            <input type="text" placeholder="Name"
                                   className="form-control form-control-lg"/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Email"
                                   className="form-control form-control-lg"/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password"
                                   className="form-control form-control-lg"/>
                        </div>
                        <div className="mt-4 mb-2">
                            <Link to="/" className="btn btn-primary jr-btn-rounded">
                                <IntlMessages id="appModule.regsiter"/>
                            </Link>
                        </div>
                        <p>
                            <IntlMessages id="appModule.hvAccount"/>
                            <Link to="/app/app-module/login-1" className="ml-1">
                                <IntlMessages id="appModule.signIn"/>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUP1;
