import React, {Component} from 'react';
import {FormControlLabel, FormGroup} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

class Checkboxes extends Component {
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
                    control={
                        <Checkbox color="primary"
                                  checked={this.state.checkedA}
                                  onChange={this.handleChange('checkedA')}
                                  value="checkedA"
                        />
                    }
                    label="Pizza"
                />
                <FormControlLabel
                    control={
                        <Checkbox color="primary"
                                  checked={this.state.checkedB}
                                  onChange={this.handleChange('checkedB')}
                                  value="checkedB"
                        />
                    }
                    label="Burger"
                />

                <FormControlLabel
                    control={
                        <Checkbox color="primary"
                                  checked={this.state.checkedC}
                                  onChange={this.handleChange('checkedC')}
                                  value="checkedC"
                        />
                    }
                    label="Doughnut"
                />

            </FormGroup>
        );
    }
}

export default Checkboxes;
