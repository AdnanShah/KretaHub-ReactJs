import React, {Component} from 'react';
import {FormControlLabel, FormGroup} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

class DisabledCheckboxes extends Component {
    state = {
        checkedA: true,
        checkedB: false,
        checkedC: false,
    };

    handleChange = name => (event, checked) => {
        this.setState({[name]: checked});
    };

    render() {
        return (
            <FormGroup>
                <FormControlLabel
                    disabled
                    control={
                        <Checkbox color="primary"
                                  checked={this.state.checkedA}
                                  onChange={this.handleChange('checkedA')}
                                  value="checkedA"
                        />
                    }
                    label="Selected Disabled"
                />
                <FormControlLabel
                    disabled
                    control={
                        <Checkbox color="primary"
                                  checked={this.state.checkedB}
                                  onChange={this.handleChange('checkedB')}
                                  value="Unselected Disabled"
                        />
                    }
                    label="Unselected Disabled"
                />
                <FormControlLabel
                    disabled
                    control={
                        <Checkbox color="primary"
                                  checked={this.state.checkedB}
                                  onChange={this.handleChange('checkedC')}
                                  value="Disabled"
                        />
                    }
                    label="Disabled"
                />
            </FormGroup>
        );
    }
}

export default DisabledCheckboxes;
