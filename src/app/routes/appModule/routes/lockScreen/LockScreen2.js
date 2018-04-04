import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';

const LockScreen2 = () => {
    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content text-center">
                <div className="login-header">
                    <Link className="app-logo" to="/app/app-module/login-2" title="Jambo">
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
                <form method="get" action="/app/app-module/login-2">
                    <TextField
                        type="password"
                        id="required"
                        label={<IntlMessages id="appModule.password"/>}
                        fullWidth
                        defaultValue=""
                        margin="normal"
                        className="mt-0 mb-4"
                    />

                    <div className="mb-2">
                        <Button color="primary" variant="raised" component={Link} className="text-white"
                                to="/app/app-module/login-2">
                            <IntlMessages id="appModule.unlock"/>
                        </Button>
                    </div>
                </form>
                <div>
                    <Link className="right-arrow" to="/app/app-module/login-2"><IntlMessages
                        id="appModule.signInDiffAccount"/></Link>
                </div>
            </div>
        </div>
    );
};
export default LockScreen2;
