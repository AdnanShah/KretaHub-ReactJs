import React from 'react';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import IntlMessages from 'util/IntlMessages';

const currencies = [
    {
        value: 'USD',
        label: '$'
    }, {
        value: 'EUR',
        label: '€'
    }, {
        value: 'BTC',
        label: '฿'
    }, {
        value: 'JPY',
        label: '¥'
    }
];

const shipments = [
    {
        value: '1-10/month',
        label: '1-10/month'
    }, {
        value: '10 or more/month',
        label: '10 or more/month'
    }
];
const divStyle = {
    overflowY: 'scroll'
};

class TextFields extends React.Component {
    state = {
        name: 'Jhon',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
        industry: 'Axact'
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {

        return (
            <div style={divStyle} className="container">
                <br/>
                <h1 className="text-center">Shipper Signup</h1>
                <form noValidate autoComplete="off">
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <TextField
                                id="name"
                                label="Name"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                fullWidth/>
                        </div>
                        <div className="col-md-3 col-12">
                            <TextField
                                id="select-industry"
                                select
                                label="Select Industry"
                                value={this.state.industry}
                                onChange={this.handleChange('industry')}
                                SelectProps={{}}
                                helperText="Please select your industry"
                                margin="normal"
                                fullWidth>
                                {currencies.map(industry => (
                                    <MenuItem key={industry.value} value={industry.value}>
                                        {industry.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>

                    </div>

                    <div className="col-md-3 col-12">
                        <TextField
                            id="uncontrolled"
                            label="Uncontrolled"
                            defaultValue="foo"
                            margin="normal"
                            fullWidth/>
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            required
                            id="required"
                            label="Required"
                            defaultValue="Hello World"
                            margin="normal"
                            fullWidth/>
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            error
                            id="error"
                            label="Error"
                            defaultValue="Hello World"
                            margin="normal"
                            fullWidth/>
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            id="password"
                            label={< IntlMessages id = "appModule.password" />}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            fullWidth/>
                    </div>

                    <div className="col-md-3 col-12">
                        <TextField
                            id="number"
                            label="Number"
                            value={this.state.age}
                            onChange={this.handleChange('age')}
                            type="number"
                            InputLabelProps={{
                            shrink: true
                        }}
                            margin="normal"
                            fullWidth/>
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            id="multiline-flexible"
                            label="Multiline"
                            multiline
                            rowsMax="4"
                            value={this.state.multiline}
                            onChange={this.handleChange('multiline')}
                            margin="normal"
                            fullWidth/>
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            id="helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            margin="normal"
                            fullWidth/>
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            label="With placeholder"
                            placeholder="Placeholder"
                            margin="normal"
                            fullWidth/>
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            label="With placeholder multiline"
                            placeholder="Placeholder"
                            multiline
                            margin="normal"
                            fullWidth/>
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            id="search"
                            label="Search field"
                            type="search"
                            margin="normal"
                            fullWidth/>
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            id="select-currency"
                            select
                            label="Select"
                            value={this.state.currency}
                            onChange={this.handleChange('currency')}
                            SelectProps={{}}
                            helperText="Please select your currency"
                            margin="normal"
                            fullWidth>
                            {currencies.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            id="select-currency-native"
                            select
                            label="Native select"
                            value={this.state.currency}
                            onChange={this.handleChange('currency')}
                            SelectProps={{
                            native: true
                        }}
                            helperText="Please select your currency"
                            margin="normal"
                            fullWidth>
                            {currencies.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            id="multiline-static"
                            label="Multiline"
                            multiline
                            rows="4"
                            defaultValue="Default Value"
                            margin="normal"
                            fullWidth/>
                    </div>
                    <div className="col-12">
                        <TextField
                            id="full-width"
                            label="Label"
                            InputLabelProps={{
                            shrink: true
                        }}
                            placeholder="Placeholder"
                            helperText="Full width!"
                            fullWidth
                            margin="normal"/>
                    </div>
                    <div className="col-12">
                        <TextField
                            id="full-width"
                            label="Label"
                            InputLabelProps={{
                            shrink: true
                        }}
                            placeholder="Placeholder"
                            helperText="Full width!"
                            fullWidth
                            margin="normal"/>
                    </div>
                    <div className="col-12">
                        <TextField
                            id="full-width"
                            label="Label"
                            InputLabelProps={{
                            shrink: true
                        }}
                            placeholder="Placeholder"
                            helperText="Full width!"
                            fullWidth
                            margin="normal"/>
                    </div>
                </form>
            </div>

        );
    }
}

export default TextFields;