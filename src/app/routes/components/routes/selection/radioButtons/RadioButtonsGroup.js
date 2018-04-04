import React, {Component} from 'react';
import Radio, {RadioGroup} from 'material-ui/Radio';
import {FormControl, FormControlLabel, FormLabel} from 'material-ui/Form';

class RadioButtonsGroup extends Component {
    state = {
        value: '',
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {

        return (
            <div className="row">
                <div className="col-sm-4">
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="gender"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male"/>
                            <FormControlLabel value="female" control={<Radio color="primary"/>} label="Female"/>
                            <FormControlLabel value="other" control={<Radio color="primary"/>} label="Other"/>
                            {/*<FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />*/}
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className="col-sm-8">
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            className="d-flex flex-row"
                            aria-label="gender"
                            name="gender"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="male1" control={<Radio color="primary"/>} label="Male"/>
                            <FormControlLabel value="female1" control={<Radio color="primary"/>} label="Female"/>
                            <FormControlLabel value="other1" control={<Radio color="primary"/>} label="Other"/>
                            {/*<FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />*/}
                        </RadioGroup>
                    </FormControl>
                </div>

            </div>


        );
    }
}

export default RadioButtonsGroup;