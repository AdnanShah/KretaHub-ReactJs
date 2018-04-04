import React from 'react';
import Stepper, {Step, StepLabel} from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}

class HorizontalLinearStepper extends React.Component {

    state = {
        activeStep: 0,
        skipped: new Set(),
    };

    isStepOptional = step => {
        return step === 1;
    };
    handleNext = () => {
        const {activeStep} = this.state;
        let {skipped} = this.state;
        if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }
        this.setState({
            activeStep: activeStep + 1,
            skipped,
        });
    };
    handleBack = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };
    handleSkip = () => {
        const {activeStep} = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
        const skipped = new Set(this.state.skipped.values());
        skipped.add(activeStep);
        this.setState({
            activeStep: this.state.activeStep + 1,
            skipped,
        });
    };
    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }

    render() {
        const steps = getSteps();
        const {activeStep} = this.state;

        return (
            <div className="w-100">
                <Stepper activeStep={activeStep} className="horizontal-stepper-linear">
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        if (this.isStepOptional(index)) {
                            labelProps.optional = <Typography type="caption">Optional</Typography>;
                        }
                        if (this.isStepSkipped(index)) {
                            props.completed = false;
                        }
                        return (
                            <Step key={label} className={`horizontal-stepper ${index===activeStep?'active':''}`} {...props}>
                                <StepLabel className="stepperlabel" {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className="my-2">
                                All steps completed - you&quot;re finished
                            </Typography>
                            <Button onClick={this.handleReset} className="jr-btn">
                                Reset
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className="my-2">{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className="jr-btn"
                                >
                                    Back
                                </Button>
                                {this.isStepOptional(activeStep) && (
                                    <Button
                                        variant="raised"
                                        color="primary"
                                        onClick={this.handleSkip}
                                        className="jr-btn"
                                    >
                                        Skip
                                    </Button>
                                )}
                                <Button variant="raised" color="primary" onClick={this.handleNext} className="jr-btn">
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

export default HorizontalLinearStepper;