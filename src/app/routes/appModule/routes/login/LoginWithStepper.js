import React from 'react';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import {FormControlLabel} from 'material-ui/Form';
import IntlMessages from 'util/IntlMessages';


class LoginWithStepper extends React.Component {
    state = {
        activeStep: 0,
        email: '',
        password: ''
    };
    handleReset = () => {
        this.setState({
            activeStep: 0,
            email: '',
            password: ''
        });
    };

    getPassword() {
        return <TextField
            type="password"
            id="password"
            label={<IntlMessages id="appModule.password"/>}
            fullWidth
            defaultValue={this.state.password}
            onChange={(event) => this.setState({password: event.target.value})}
            margin="normal"
            className="mt-1"
        />
    }

    getEmail() {
        return <div>
            <TextField
                id="email"
                label={<IntlMessages id="appModule.email"/>}
                fullWidth
                onChange={(event) => this.setState({email: event.target.value})}
                defaultValue={this.state.email}
                margin="normal"
                className="mt-1"
            />
        </div>
    }

    handleNext = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };

    handleBack = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return this.getEmail();
            case 1:
                return this.getPassword();
            default:
                return <IntlMessages id="appModule.loginSuccessfully"/>;
        }
    }

    render() {
        const steps = 2;
        const {activeStep} = this.state;
        return (
            <div
                className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                <div className="login-content">
                    <div className="login-header mb-4">
                        <Link className="app-logo" to="/" title="Jambo">
                            <img src="http://via.placeholder.com/215x75" alt="jambo" title="jambo"/>
                        </Link>
                    </div>

                    <div className="login-form">
                        {this.state.activeStep === steps ?
                            <div>
                                <div className="my-2">
                                    <IntlMessages id="appModule.allStepsCompleted"/>
                                </div>
                                <Button onClick={this.handleReset}><IntlMessages id="appModule.reset"/> </Button>
                            </div>
                            :
                            <form>
                                <fieldset>
                                    {this.getStepContent(activeStep)}
                                    <div className="mt-1 mb-2 d-flex justify-content-between align-items-center">
                                        <FormControlLabel
                                            control={
                                                <Checkbox color="primary"
                                                          value="gilad"
                                                />
                                            }
                                            label={<IntlMessages id="appModule.rememberMe"/>}
                                        />

                                        <div>
                                            <Link to="/app/app-module/forgot-password-2" title="Reset Password">
                                                <IntlMessages id="appModule.forgotPassword"/>
                                            </Link>
                                        </div>
                                    </div>

                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className="mr-2"
                                    >
                                        <IntlMessages id="appModule.back"/>
                                    </Button>
                                    <Button variant="raised" className="jr-btn text-white btn-primary"
                                            onClick={this.handleNext}>
                                        {activeStep === steps - 1 ? <IntlMessages id="appModule.signIn"/> :
                                            <IntlMessages id="appModule.next"/>}
                                    </Button>

                                </fieldset>
                            </form>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginWithStepper;
