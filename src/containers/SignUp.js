import React from 'react';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import IntlMessages from 'util/IntlMessages';
import citys from './jsonDataSource/province-ID.json';
import locality from './jsonDataSource/locality-ID.json';
import countries from './jsonDataSource/countries.json';
import Button from 'material-ui/Button';

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
        city: '',
        imageUrl: '',
        Representatives: [
            {
                name: ''
            }
        ],
        Officers: [
            {
                name: ''
            }
        ]
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };
    onFileLoad = (e, file) => console.log(e.target.result, file.name);

    handleNameChange = (evt) => {
        this.setState({name: evt.target.value});
    }

    handleRepresentativeNameChange = (idx) => (evt) => {
        const newRepresentatives = this
            .state
            .Representatives
            .map((Representative, sidx) => {
                if (idx !== sidx) 
                    return Representative;
                return {
                    ...Representative,
                    name: evt.target.value
                };
            });

        this.setState({Representatives: newRepresentatives});
    }

    handleSubmit = (evt) => {
        const {name, Representatives} = this.state;
        alert(`Incorporated: ${name} with ${Representatives.length} Representatives`);
    }

    handleAddRepresentative = () => {
        this.setState({
            Representatives: this
                .state
                .Representatives
                .concat([
                    {
                        name: ''
                    }
                ])
        });
    }

    handleRemoveRepresentative = (idx) => () => {
        this.setState({
            Representatives: this
                .state
                .Representatives
                .filter((s, sidx) => idx !== sidx)
        });
    }

    handleNameChange = (evt) => {
        this.setState({name: evt.target.value});
    }

    handleOfficerNameChange = (idx) => (evt) => {
        const newOfficers = this
            .state
            .Officers
            .map((Officer, sidx) => {
                if (idx !== sidx) 
                    return Officer;
                return {
                    ...Officer,
                    name: evt.target.value
                };
            });

        this.setState({Officers: newOfficers});
    }

    handleSubmit = (evt) => {
        const {name, Officers} = this.state;
        alert(`Incorporated: ${name} with ${Officers.length} Officers`);
    }

    handleAddOfficer = () => {
        this.setState({
            Officers: this
                .state
                .Officers
                .concat([
                    {
                        name: ''
                    }
                ])
        });
    }

    handleRemoveOfficer = (idx) => () => {
        this.setState({
            Officers: this
                .state
                .Officers
                .filter((s, sidx) => idx !== sidx)
        });
    }
    _onChange = (e) => {

        const file    = this.refs.uploadImg.files[0]
        const reader  = new FileReader();
    
        reader.onloadend = () => {
            this.setState({
                imageUrl: reader.result
            })
        }
        if (file) {
            reader.readAsDataURL(file);
            this.setState({
                imageUrl :reader.result
            })
        } 
        else {
            this.setState({
                imageUrl: ""
            })
        }
    }
    
    render() {

        return (
      
      <div style={divStyle} className="container">
                <br/>
                <h1
                   className="text-center"                   
                   style={{
                    background: '#212121',
                    color: '#fff'
                }}>
                    Shipper Signup</h1>
                    
                <h2
                    style={{
                    background: '#212121',
                    color: '#fff'
                }}>
                    Shipper Information</h2>
                    <div class="form-row text-center">
                    <div class="col-12"> 
                    <Button
                       variant="raised"
                        color="primary"
                        size="small"
                    >Fill Form</Button>
                    </div>
                    </div>
                    <form noValidate autoComplete="off">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <TextField
                                id="name"
                                label="Name"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                fullWidth/>
                        </div>
                        <div className="col-md-4 col-12">
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
                        <div className="col-md-4 col-12">
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
                        <div className="col-md-4 col-12">
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
                        <div className="col-md-4 col-12">
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
                        <div className="col-md-4 col-12">
                            <TextField
                                id="State"
                                label="State"
                                defaultValue="State"
                                margin="normal"
                                fullWidth/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <TextField
                                id="Zip-Code"
                                label="Zip-Code"
                                defaultValue="Zip-Code"
                                margin="normal"
                                fullWidth/>
                        </div>
                        <div className="col-md-4 col-12">
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
                        <div className="col-md-4 col-12">
                            <TextField
                                id="Phone"
                                label="Phone"
                                defaultValue="+62317482303"
                                margin="normal"
                                fullWidth/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <TextField id="fax" label="fax" margin="normal" fullWidth/>
                        </div>
                        <div className="col-md-4 col-12">
                            <TextField id="email" label="email" margin="normal" fullWidth/>
                        </div>
                        <div className="col-md-4 col-12">
                            <TextField id="NPWPNumber" label="NPWP Number" margin="normal" fullWidth/>
                        </div>

                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <h3>NPWP Document</h3>
                        </div>
                        <div className="col-md-8 col-12">
                            <input accept="image/*" id="raised-button-file" multiple type="file"/>
                            <label htmlFor="raised-button-file">
                                <Button variant="raised" component="span">
                                    Upload
                                </Button>
                            </label>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <TextField id="SIUPNumber" label="SIUP Number" margin="normal" fullWidth/>
                        </div>
                        <div className="col-md-6 col-12">
                            <TextField
                                id="SIUPExpirationDate"
                                label="SIUP Expiration Date"
                                margin="normal"
                                fullWidth/>
                        </div>
                    </div>      
<br/>                         <div class="form-row text-center">
                    <div class="col-12"> 
                             <h1>  Upload Logo Here</h1>
                        <input
                            ref="uploadImg"
                            type="file"
                            name="selectedFile"
                            onChange={this._onChange}
                            />
<br/>
<br/>                        <img src={this.state.imageUrl}  className="rounded" width="304" height="36" alt="LOGO"/>
                        <br/>           
                    </div>
                    </div>
                    <div>
                        {this
                            .state
                            .Representatives
                            .map((Representative, idx) => (
                                <div>
                                    <h1
                                                            style={{
                                        background: '#212121',
                                        color: '#fff'
                                    }}>
                                        Representatives</h1>
                                    <div className="row">
                                        <div className="col-md-4 col-12">
                                            <TextField
                                                id="name"
                                                label="Name"
                                                value={this.state.name}
                                                onChange={this.handleChange('name')}
                                                margin="normal"
                                                fullWidth/>
                                        </div>
                                        <div className="col-md-4 col-12">
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

                                        <div className="col-md-4 col-12">
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
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12">
                                            <TextField
                                                id="State"
                                                label="State"
                                                defaultValue="State"
                                                margin="normal"
                                                fullWidth/>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <TextField
                                                id="Zip-Code"
                                                label="Zip-Code"
                                                defaultValue="Zip-Code"
                                                margin="normal"
                                                fullWidth/>
                                        </div>
                                        <div className="col-md-4 col-12">
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
                                        <div className="col-md-4 col-12">
                                            <TextField
                                                id="Phone"
                                                label="Phone"
                                                defaultValue="+62317482303"
                                                margin="normal"
                                                fullWidth/>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <TextField id="fax" label="fax" margin="normal" fullWidth/>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <TextField id="mobile" label="Mobile" margin="normal" fullWidth/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div class="form-row text-center">
    <div class="col-12">
 
                                    <Button
                                        variant="raised"
                                        color="primary"
                                        size="small"
                                        onClick={this.handleRemoveRepresentative(idx)}>-</Button>
                                </div>
                                </div>
                                </div>
                            ))}
                            <br/>                                    
                            <div class="form-row text-center">
    <div class="col-12">
 
                        <Button
                            variant="raised"
                            color="primary"
                            size="small"
                            onClick={this.handleAddRepresentative}>
                            Add another Representative
                        </Button>
                    </div>
                    </div>
                    </div>
                    <br/>
                    <br/> {this
                        .state
                        .Officers
                        .map((Officer, idx) => (
                            <div>
                                <h1
                                                    style={{
                                    background: '#212121',
                                    color: '#fff'
                                }}>
                                    Officers</h1>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <TextField id="officersName" label="Officers" margin="normal" fullWidth/>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <TextField
                                            id="Identity Number"
                                            label="Identity Number"
                                            margin="normal"
                                            fullWidth/>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-4 col-12">
                                        <h3>Identity Type</h3>
                                    </div>
                                    <div className="col-md-8 col-12">
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="inlineRadio1"
                                                    value="option1"/>
                                                Citizen ID Card
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="inlineRadio2"
                                                    value="option2"/>
                                                Driver's License
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline disabled">
                                            <label className="form-check-label">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="inlineRadio3"
                                                    value="option3"/>
                                                Residency Permit
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline disabled">
                                            <label className="form-check-label">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="inlineRadio3"
                                                    value="option3"/>
                                                Passport
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-4 col-12">
                                        <h3>Identity Document</h3>
                                    </div>
                                    <div class="form-row text-center">
    <div class="col-12">
                                        <input accept="image/*" id="raised-button-file" multiple type="file"/>
                                        <label htmlFor="raised-button-file">
                                            <Button variant="raised" component="span">
                                                Upload
                                            </Button>
                                        </label>
                                    </div>                                   
                                    </div>                                   
                                </div>
                                <div class="form-row text-center">
    <div class="col-12">
 
                                <Button type="button" onClick={this.handleRemoveOfficer(idx)} variant="raised"
                                color="primary"
                                size="small">-</Button>      
                            </div>
                            </div>
                            </div>
                        ))} 
                <br/>
                <div class="form-row text-center">
    <div class="col-12">
 
                <Button
                    onClick={this.handleAddOfficer}
                    variant="raised"
                    color="primary"
                    size="small">
                    Add another Officers
                </Button>
                <br/>
                <br/>
                <Button variant="raised" color="primary" size="small">
                    Submit
                </Button>
                <br/>
                <br/>
 </div>
 </div>
            </form>
        </div>

    )
}
}

export default TextFields;