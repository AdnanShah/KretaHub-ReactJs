import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import { CircularProgress } from 'material-ui/Progress';

import {
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGithubSignIn,
    userGoogleSignIn,
    userSignIn,
    userTwitterSignIn
} from 'actions/Auth';
import Background from './images/bg.jpg';
const divStyle = {
    width: '80%',
    height: '100%',
    position: 'relative',

};

const divCenter = {

    position: 'absolute',
    margin: 'auto',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100px',
    height: '100px',

};
class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: 'demo@example.com',
            password: 'demo#123'
        }
    }

    componentDidUpdate() {
        if (this.props.showMessage) {
            setTimeout(() => {
                this
                    .props
                    .hideMessage();
            }, 100);
        }
        if (this.props.authUser !== null) {
            this
                .props
                .history
                .push('/');
        }
    }
    render() {
        const { email, password } = this.state;
        const { showMessage, loader, alertMessage } = this.props;
        return (


            <div className="container text-center justify-content-center align-self-center">
                <div 
                    className="col my-auto d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                    <div className="app-login-main-content">

                        <div
                            className="app-logo-content d-flex align-items-center justify-content-center">
                            <Link className="logo-lg" to="/" title="Jambo">
                                <img src="./kretahub-mock-icon.png" alt="jambo" title="jambo" />

                                {/* <img src="http://via.placeholder.com/177x65" alt="jambo" title="jambo"/> */}
                            </Link>
                        </div>

                        <div className="app-login-content">
                            <div className="app-login-header mb-4">
                                <h1>Shipper Login</h1>
                            </div>

                            <div className="app-login-form">
                                <form>
                                    <fieldset>
                                        <TextField
                                            label={< IntlMessages id="appModule.email" />}
                                            fullWidth
                                            onChange={(event) => this.setState({ email: event.target.value })}
                                            defaultValue={email}
                                            margin="normal"
                                            className="mt-1 my-sm-3" />
                                        <TextField
                                            type="password"
                                            label={< IntlMessages id="appModule.password" />}
                                            fullWidth
                                            onChange={(event) => this.setState({ password: event.target.value })}
                                            defaultValue={password}
                                            margin="normal"
                                            className="mt-1 my-sm-3" />
                                        <div className="row">
                                            <div className="col">
                                                <Link to="/signup">
                                                    Forgot password
                                            </Link>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="mb-3 d-flex align-items-center justify-content-between">
                                            <Button
                                                onClick={() => {
                                                    this
                                                        .props
                                                        .showAuthLoader();
                                                    this
                                                        .props
                                                        .userSignIn({ email, password });
                                                }}
                                                variant="raised"
                                                color="primary">
                                                Log In
                                        </Button>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <p>No account yet?</p>
                                            </div>
                                            <div className="col-6">
                                                <div className=" float-right">
                                                    <Link to="/signup">
                                                        Sign Up
                                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    {loader && <div className="loader-view">
                        <CircularProgress />
                    </div>
                    }
                    {showMessage && NotificationManager.error(alertMessage)}
                    <NotificationContainer />

                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { loader, alertMessage, showMessage, authUser } = auth;
    return { loader, alertMessage, showMessage, authUser }
};

export default connect(mapStateToProps, {
    userSignIn,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn
})(SignIn);
