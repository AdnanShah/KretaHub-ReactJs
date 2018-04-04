import React from 'react';
import Stepper, {Step, StepButton} from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Step 1: Select campaign settings...';
        case 1:
            return 'Step 2: What is an ad group anyways?';
        case 2:
            return 'Step 3: This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}

class HorizontalNonLinearStepper extends React.Component {
    state = {
        activeStep: 0,
        completed: {},
    };
    totalSteps = () => {
        return getSteps().length;
    };
    handleNext = () => {
        let activeStep;

        if (this.isLastStep() && !this.allStepsCompleted()) {
            // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            const steps = getSteps();
            activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
        } else {
            activeStep = this.state.activeStep + 1;
        }
        this.setState({
            activeStep,
        });
    };
    handleBack = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };
    handleStep = step => () => {
        this.setState({
            activeStep: step,
        });
    };
    handleComplete = () => {
        const {completed} = this.state;
        completed[this.state.activeStep] = true;
        this.setState({
            completed,
        });
        this.handleNext();
    };
    handleReset = () => {
        this.setState({
            activeStep: 0,
            completed: {},
        });
    };

    completedSteps() {
        return Object.keys(this.state.completed).length;
    }

    isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1;
    }

    allStepsCompleted() {
        return this.completedSteps() === this.totalSteps();
    }

    render() {
        const steps = getSteps();
        const {activeStep} = this.state;

        return (
            <div className="w-100">
                <Stepper nonLinear activeStep={activeStep} className="horizontal-stepper-linear">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label} className={`horizontal-stepper ${index===activeStep?'active':''}`}>
                                <StepButton className="stepperbutton"
                                    onClick={this.handleStep(index)}
                                    completed={this.state.completed[index]}
                                >
                                    {label}
                                </StepButton>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.allStepsCompleted() ? (
                        <div>
                            <Typography className="my-2">
                                All steps completed - you&quot;re finished
                            </Typography>
                            <Button className="jr-btn" onClick={this.handleReset}>Reset</Button>
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
                                <Button variant="raised" color="primary" onClick={this.handleNext} className="jr-btn">
                                    Next
                                </Button>
                                {activeStep !== steps.length &&
                                (this.state.completed[this.state.activeStep] ? (
                                    <Typography type="caption" className="my-2">
                                        Step {activeStep + 1} already completed
                                    </Typography>
                                ) : (
                                    <Button className="jr-btn" variant="raised" color="primary"
                                            onClick={this.handleComplete}>
                                        {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default HorizontalNonLinearStepper;