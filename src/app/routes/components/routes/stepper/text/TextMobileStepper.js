import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

class TextMobileStepper extends React.Component {
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

    render() {
        const {theme} = this.props;

        return (
            <div className="w-100">
                <Paper square elevation={0} className="d-flex align-items-center pl-3 mb-3 ">
                    <Typography>Step {this.state.activeStep + 1} of 6</Typography>
                </Paper>
                <MobileStepper
                    type="text"
                    steps={6}
                    position="static"
                    activeStep={this.state.activeStep}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === 5}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </div>
        );
    }
}

TextMobileStepper.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withStyles(null, {withTheme: true})(TextMobileStepper);