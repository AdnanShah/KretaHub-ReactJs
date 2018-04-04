import React from 'react';
import Stepper, {Step, StepLabel} from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import IntlMessages from 'util/IntlMessages';

function getSteps() {
    return ['Account Information', 'Personal Information', 'Payment Information', 'Confirm and Finish'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return getAccountInformation();
        case 1:
            return getPersonalInformation();
        case 2:
            return getPaymentInformation();
        case 3:
            return getConfirmation();

        default:
            return 'Uknown stepIndex';
    }
}

function getAccountInformation() {

    return <div>
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="userName"
                        label="UserName"
                        margin="normal"
                        fullWidth
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="password"
                        label={<IntlMessages id="appModule.password"/>}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        fullWidth
                    />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        fullWidth
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="email"
                        label={<IntlMessages id="appModule.email"/>}
                        margin="normal"
                        fullWidth
                    />
                </div>
            </div>
        </div>
    </div>
}

function getPersonalInformation() {
    return <div>
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="fullName"
                        label="Full Name"
                        margin="normal"
                        fullWidth
                    /></div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="userEmail"
                        label="User Name"
                        margin="normal"
                        fullWidth
                    />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <TextField
                        id="aboutUser"
                        label="Write Something About You"
                        margin="normal"
                        multiline
                        rowsMax="4"
                        fullWidth
                    /></div>
            </div>
        </div>
    </div>

}

function getPaymentInformation() {
    return <div className="tab-pane" id="tab2-3">
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="cardHolder"
                        label="Card Holder Name"
                        margin="normal"
                        fullWidth
                    /></div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="cardNo"
                        label="Card Number"
                        margin="normal"
                        fullWidth
                    />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="userName"
                        type="password"
                        label="UserName"
                        margin="normal"
                        fullWidth
                    /></div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="cardType"
                        label="CardType"
                        margin="normal"
                        fullWidth
                    /></div>
            </div>
        </div>
    </div>
}

function getConfirmation() {
    return <div className="tab-pane" id="tab2-4">
        <h3 className="title text-primary">Terms and Conditions</h3>
        <p><strong>Lorem</strong> Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.</p>
        <div className="d-flex align-items-center">
            <Checkbox color="primary"/> <span>I agree with the Terms and Conditions.</span>
        </div>
    </div>
}

class HorizontalLabelPositionBelowStepper extends React.Component {
    state = {
        activeStep: 0,
    };

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

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const steps = getSteps();
        const {activeStep} = this.state;

        return (
            <div className="w-100">
                <Stepper activeStep={activeStep} alternativeLabel className="horizontal-stepper-linear">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label} className={`horizontal-stepper ${index === activeStep ? 'active' : ''}`}>
                                <StepLabel className="stepperlabel">{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <Typography className="my-2">
                                All steps completed - you&quot;re finished
                            </Typography>
                            <Button onClick={this.handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            {getStepContent(activeStep)}
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className="mr-2"
                                >
                                    Back
                                </Button>
                                <Button variant="raised" color="primary" onClick={this.handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default HorizontalLabelPositionBelowStepper;