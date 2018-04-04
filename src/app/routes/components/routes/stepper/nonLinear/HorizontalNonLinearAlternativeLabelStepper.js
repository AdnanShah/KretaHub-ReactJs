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

class HorizontalNonLinearAlternativeLabelStepper extends React.Component {
    state = {
        activeStep: 0,
        completed: new Set(),
        skipped: new Set(),
    };

    totalSteps = () => {
        return getSteps().length;
    };
    isStepOptional = step => {
        return step === 1;
    };
    handleSkip = () => {
        const {activeStep} = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
        const skipped = new Set(this.state.skipped);
        skipped.add(activeStep);
        this.setState({
            activeStep: this.state.activeStep + 1,
            skipped,
        });
    };
    handleNext = () => {
        let activeStep;

        if (this.isLastStep() && !this.allStepsCompleted()) {
            // It's the last step, but not all steps have been completed
            // find the first step that has been completed
            const steps = getSteps();
            activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
        } else {
            activeStep = this.state.activeStep + 1;
        }
        this.setState({
            activeStep,
        });
    };
    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };
    handleStep = step => () => {
        this.setState({
            activeStep: step,
        });
    };
    handleComplete = () => {
        const completed = new Set(this.state.completed);
        completed.add(this.state.activeStep);
        this.setState({
            completed,
        });
        /**
         * Sigh... it would be much nicer to replace the following if conditional with
         * `if (!this.allStepsComplete())` however state is not set when we do this,
         * thus we have to resort to not being very DRY.
         */
        if (completed.size !== this.totalSteps() - this.skippedSteps()) {
            this.handleNext();
        }
    };
    handleReset = () => {
        this.setState({
            activeStep: 0,
            completed: new Set(),
            skipped: new Set(),
        });
    };

    isStepComplete(step) {
        return this.state.completed.has(step);
    }

    completedSteps() {
        return this.state.completed.size;
    }

    allStepsCompleted() {
        return this.completedSteps() === this.totalSteps() - this.skippedSteps();
    }

    isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1;
    }

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }

    skippedSteps() {
        return this.state.skipped.size;
    }

    render() {
        const steps = getSteps();
        const {activeStep} = this.state;

        return (
            <div className="w-100">
                <Stepper alternativeLabel nonLinear activeStep={activeStep} className="horizontal-stepper-linear">
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
                                <StepButton className="stepperbutton" onClick={this.handleStep(index)}
                                            completed={this.isStepComplete(index)}{...labelProps}>
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
                            <Button onClick={this.handleReset}>Reset</Button>
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
                                {this.isStepOptional(activeStep) &&
                                !this.state.completed.has(this.state.activeStep) && (
                                    <Button
                                        variant="raised"
                                        color="primary"
                                        onClick={this.handleSkip}
                                        className="jr-btn"
                                    >
                                        Skip
                                    </Button>
                                )}
                                {activeStep !== steps.length &&
                                (this.state.completed.has(this.state.activeStep) ? (
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

export default HorizontalNonLinearAlternativeLabelStepper;