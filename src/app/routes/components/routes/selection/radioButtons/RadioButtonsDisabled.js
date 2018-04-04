import React from 'react';
import Radio, {RadioGroup} from 'material-ui/Radio';
import {FormControl, FormControlLabel, FormHelperText} from 'material-ui/Form';

class RadioButtonsDisabled extends React.Component {
    state = {
        selectedValue: undefined,
    };

    handleChange = event => {
        this.setState({selectedValue: event.target.value});
    };

    render() {
        return (

            <FormControl component="fieldset" required>
                <FormHelperText className="text-grey">Storage In Basic Plan</FormHelperText>
                <RadioGroup

                    value={this.state.value}
                    onChange={this.handleChange}>

                    <FormControlLabel disabled value="gb1" control={<Radio color="primary"/>} label="1Gb"/>
                    <FormControlLabel disabled value="gb2" control={<Radio color="primary"/>} label="2Gb"/>
                    <FormControlLabel disabled value="gb3" control={<Radio color="primary"/>} label="3Gb"/>
                </RadioGroup>
            </FormControl>

        );
    }
}

export default RadioButtonsDisabled;