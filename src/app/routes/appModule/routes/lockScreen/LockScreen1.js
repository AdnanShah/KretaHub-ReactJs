import React from 'react';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';


const LockScreen1 = () => {
    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content text-center">
                <div className="login-header">
                    <Link className="app-logo" to="/app/app-module/login-1" title="Jambo">
                        <img src="http://via.placeholder.com/215x75" alt="jambo" title="jambo"/>
                    </Link>
                </div>

                <div className="login-avatar mb-4">
                    <img className="rounded-circle size-120" src="http://via.placeholder.com/150x150" alt="" title=""/>
                </div>
                <div className="mb-4">
                    <h3>John Smith</h3>
                    <p><IntlMessages id="appModule.enterPasswordUnlock"/></p>
                </div>
                <form method="get" action="/app/app-module/login-1">
                    <div className="form-group mb-4">
                        <input type="password" placeholder="Password"
                               className="form-control form-control-lg"/>
                    </div>
                    <div className="form-group">
                        <Link to="/app/app-module/login-1" className="btn btn-primary jr-btn-rounded">
                            <IntlMessages id="appModule.unlock"/>
                        </Link>
                    </div>
                </form>
                <div>
                    <Link className="right-arrow" to="/app/app-module/login-1">
                        <IntlMessages id="appModule.signInDiffAccount"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default LockScreen1;
