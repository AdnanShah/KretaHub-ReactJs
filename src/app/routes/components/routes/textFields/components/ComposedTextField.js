import React, {Component} from 'react';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';

class ComposedTextField extends Component {
    state = {
        name: 'Composed TextField',
    };

    handleChange = event => {
        this.setState({name: event.target.value});
    };

    render() {
        const classes = this.props.classes;

        return (
            <div className="row">
                <div className="col-md-3">
                    <FormControl className="mb-3" fullWidth>
                        <InputLabel htmlFor="name-simple">Name</InputLabel>
                        <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
                    </FormControl>
                </div>
                <div className="col-md-3">
                    <FormControl className="mb-3" fullWidth>
                        <InputLabel htmlFor="name-helper">Name</InputLabel>
                        <Input id="name-helper" value={this.state.name} onChange={this.handleChange} />
                        <FormHelperText>Some important helper text</FormHelperText>
                    </FormControl>
                </div>
                <div className="col-md-3">
                    <FormControl className="mb-3" fullWidth>
                        <InputLabel htmlFor="name-disabled">Name</InputLabel>
                        <Input id="name-disabled" value={this.state.name} onChange={this.handleChange} />
                        <FormHelperText>Some important helper text</FormHelperText>
                    </FormControl>
                </div>
                <div className="col-md-3">
                    <FormControl className="mb-3" fullWidth>
                        <InputLabel htmlFor="name-error">Name</InputLabel>
                        <Input id="name-error" value={this.state.name} onChange={this.handleChange} />
                        <FormHelperText>Some important helper text</FormHelperText>
                    </FormControl>
                </div>
            </div>
        );
    }
}

export default ComposedTextField;