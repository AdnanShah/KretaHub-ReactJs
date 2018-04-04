import React from 'react';
import Stepper, {Step, StepContent, StepLabel} from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
        case 1:
            return 'An ad group contains one or more ads which target a shared set of keywords.';
        case 2:
            return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
        default:
            return 'Unknown step';
    }
}

class VerticalLinearStepper extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
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
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent className="pb-3">
                                    <Typography>{getStepContent(index)}</Typography>
                                    <div className="mt-2">
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={this.handleBack}
                                                className="jr-btn"
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="raised"
                                                color="primary"
                                                onClick={this.handleNext}
                                                className="jr-btn"
                                            >
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className="p-2">
                        <Typography>All steps completed - you&quot;re finished</Typography>
                        <Button onClick={this.handleReset} className="jr-btn">
                            Reset
                        </Button>
                    </Paper>
                )}
            </div>
        );
    }
}

export default VerticalLinearStepper;