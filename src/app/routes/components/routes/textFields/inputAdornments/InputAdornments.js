import React from 'react';
import IconButton from 'material-ui/IconButton';
import Input, {InputAdornment, InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

class InputAdornments extends React.Component {
    state = {
        amount: '',
        password: '',
        weight: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPasssword = () => {
        this.setState({showPassword: !this.state.showPassword});
    };

    render() {

        return (
            <div className="row">
                <div className="col-md-4 col-12">
                    <FormControl className="mb-3" fullWidth>
                        <InputLabel htmlFor="amount">Amount</InputLabel>
                        <Input
                            id="amount"
                            value={this.state.amount}
                            onChange={this.handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </div>
                <div className="col-md-4 col-12">
                    <FormControl className="my-3" fullWidth>
                        <Input
                            id="weight"
                            value={this.state.weight}
                            onChange={this.handleChange('weight')}
                            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                        />
                        <FormHelperText>Weight</FormHelperText>
                    </FormControl>
                </div>
                <div className="col-md-4 col-12">
                    <FormControl className="mb-3" fullWidth>
                        <InputLabel htmlFor="password-1">Password</InputLabel>
                        <Input
                            id="password-1"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={this.handleClickShowPasssword}
                                        onMouseDown={this.handleMouseDownPassword}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
            </div>
        );
    }
}

export default InputAdornments;