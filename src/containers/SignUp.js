import React from 'react';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import IntlMessages from 'util/IntlMessages';
import citys from './jsonDataSource/province-ID.json';
import locality from './jsonDataSource/locality-ID.json';
import countries from './jsonDataSource/countries.json';

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
        value: '1',
        label: '1-10/month'
    }, {
        value: '2',
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
        industry: 'Axact',
        shipment: '1-10/month',
        address: '',
        city: ''
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
                        <div className="col-md-3 col-12">
                            <TextField
                                id="select-shipment"
                                select
                                label="Select Shipment"
                                value={this.state.shipment}
                                onChange={this.handleChange('shipment')}
                                SelectProps={{}}
                                helperText="Please select your shipment"
                                margin="normal"
                                fullWidth>
                                {shipments.map(shipment => (
                                    <MenuItem key={shipment.value} value={shipment.value}>
                                        {shipment.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <TextField
                                id="address"
                                label="Address"
                                multiline
                                rowsMax="4"
                                value={this.state.address}
                                onChange={this.handleChange('address')}
                                margin="normal"
                                fullWidth/>
                        </div>
                        <div className="col-md-3 col-12">
                            <TextField
                                id="city"
                                select
                                label="Select City"
                                value={this.state.city}
                                onChange={this.handleChange('city')}
                                SelectProps={{}}
                                helperText="Please select your city"
                                margin="normal"
                                fullWidth>
                                {citys.map(city => (
                                    <MenuItem key={city.id} value={city.name_id}>
                                        {city.name_id}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className="col-md-3 col-12">
                            <TextField
                                id="State"
                                label="State"
                                defaultValue="State"
                                margin="normal"
                                fullWidth/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <TextField
                                id="Zip-Code"
                                label="Zip-Code"
                                defaultValue="Zip-Code"
                                margin="normal"
                                fullWidth/>
                        </div>
                        <div className="col-md-3 col-12">
                            <TextField
                                id="city"
                                select
                                label="Select City"
                                value={this.state.city}
                                onChange={this.handleChange('city')}
                                SelectProps={{}}
                                helperText="Please select your city"
                                margin="normal"
                                fullWidth>
                                {countries.map(countrie => (
                                    <MenuItem key={countrie.id} value={countrie.name}>
                                        {countrie.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className="col-md-3 col-12">
                            <TextField
                                id="Phone"
                                label="Phone"
                                defaultValue="+62317482303"
                                margin="normal"
                                fullWidth/>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default TextFields;