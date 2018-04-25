import React from 'react';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import IntlMessages from 'util/IntlMessages';
import citys from './jsonDataSource/province-ID.json';
import locality from './jsonDataSource/locality-ID.json';
import countries from './jsonDataSource/countries.json';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { TextValidator, ValidatorForm, SelectValidator, CheckboxValidatorElement } from 'react-material-ui-form-validator';

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
    overflowY: 'auto'
};

class TextFields extends React.Component {

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleChangeCountry = name => event => {
        this.setState({ [name]: event.target.value });
    };
    handleChangeCity = name => event => {
        this.setState({ [name]: event.target.value });
    };
    onFileLoad = (e, file) => console.log(e.target.result, file.name);

    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value });
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

        this.setState({ Representatives: newRepresentatives });
    }

    handleSubmit = (evt) => {
        const { name, Representatives } = this.state;
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
        this.setState({ name: evt.target.value });
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

        this.setState({ Officers: newOfficers });
    }

    handleSubmit = (evt) => {
        const { name, Officers } = this.state;
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

        const file = this.refs.uploadImg.files[0]
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState({ imageUrl: reader.result })
        }
        if (file) {
            reader.readAsDataURL(file);
            this.setState({ imageUrl: reader.result })
        } else {
            this.setState({ imageUrl: "" })
        }
    }
    state = {
        name: '',
        age: '',
        multiline: '',
        currency: '',
        industry: '',
        shipment: '',
        State: '',
        address: '',
        city: '',
        zipCode: '',
        imageUrl: '',
        phone: '',
        countries: countries[75].name,
        awayMessageText: '',
        awayMessage: 'xyz',
        fax: '',
        email: '',
        npwpNumber: '',
        suipNumber: '',
        suipExpirationDate: '',
        repName: '',
        repAddress: '',
        repCity: '',
        repState: '',
        repZipCode: '',
        repPhone: '',
        repFax: '',
        repMobile: '',
        shipment: '',
        country: countries[75].name,
        refCountry: countries[75].name,
        officerNumber: '',
        officerName: '',
        selected: '',
        Representatives: [
            { officerNumber: '' }
        ],
        Officers: [
            {
                name: ''
            }
        ],
        submitted: true
    };

    autoFill = () => {
        this.setState({
            awayMessageText: 'ghjj',
            name: 'PT. IndoTech',
            address: 'Rajawali 109',
            zipCode: '10000',
            phone: '+62317482303',
            fax: '+62317290361',
            email: 'indotech@gmail.com',
            npwpNumber: '01.000.333.2-333.000',
            suipNumber: '503/8836.A/324.1.18/2018',
            suipExpirationDate: '2/27/2018',
            State: locality[0].name,
            repName: 'Benny Sukamto',
            repAddress: 'Kalianak Barat 57',
            repCity: citys[0].capitalName_id,
            repState: locality[0].name,
            repZipCode: '10000',
            repCountry: countries[75].name,
            repPhone: '+62317482303',
            repFax: '+62317290363',
            repMobile: '+628155521198',
            officerName: 'Haris',
            officerNumber: '12345678910234500000',
            industry: currencies[0].label,
            shipment: shipments[0].label,
            city: citys[0].capitalName_id,
            country: countries[75].name,
            selected: 'option1',
            // industry:this.currencies.value,
        })
        console.log("this.currencies[0]", currencies);
    }


    handleOnSubmit = () => {
        this.setState({ submitted: false })
    }

    render() {
        return (

            <div style={divStyle} className="container-fluid">
                <br />
                <h1
                    style={{
                        fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'center'
                    }}>
                    Shipper Signup</h1>
                <Paper>
                    <h2
                        style={{
                            background: '#4267B2',
                            color: '#fff',
                            textAlign: 'center',
                        }}>Shipper Information</h2>
                </Paper>

                <div class="form-row text-center">
                    <div class="col-12">
                        <Button
                            onClick={this
                                .autoFill
                            }
                            variant="raised"
                            style={{
                                background: '#29487D',
                                color: '#fff'
                            }}
                            size="small">Auto-Fill Form</Button>
                    </div>
                </div>

                <ValidatorForm
                    onSubmit={this.handleOnSubmit}
                    ref="form">
                    <form noValidate autoComplete="off">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <TextValidator
                                    name="name"
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    id="name"
                                    label="Name"
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    margin="normal"
                                    fullWidth />
                            </div>
                            <div className="col-md-6 col-12">
                                <SelectValidator
                                    name="industry"
                                    validators={['required']}
                                    errorMessages={['this field is required']}

                                    id="industry"
                                    select
                                    label="Industry"
                                    value={this.state.industry}
                                    onChange={this.handleChange('industry')}
                                    SelectProps={{}}
                                    margin="normal"
                                    fullWidth>
                                    {currencies.map((industry) => (
                                        <MenuItem key={industry.value} value={industry.label}>
                                            {industry.label}
                                        </MenuItem>
                                    ))}
                                </SelectValidator>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-6 col-12">
                                <SelectValidator
                                    name="Shipment"
                                    validators={['required']}
                                    errorMessages={['this field is required']}

                                    id="select-shipment"
                                    select
                                    label="Shipment"
                                    value={this.state.shipment}
                                    onChange={this.handleChange('shipment')}
                                    SelectProps={{}}
                                    margin="normal"
                                    fullWidth>
                                    {shipments.map(shipment => (
                                        <MenuItem key={shipment.value} value={shipment.label}>
                                            {shipment.label}
                                        </MenuItem>
                                    ))}
                                </SelectValidator>
                            </div>
                            <div className="col-md-6 col-12">
                                <TextValidator
                                    name="address"
                                    validators={['required']}
                                    errorMessages={['this field is required']}

                                    id="address"
                                    label="Address"
                                    multiline
                                    rowsMax="6"
                                    value={this.state.address}
                                    onChange={this.handleChange('address')}
                                    margin="normal"
                                    fullWidth />
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-6 col-12">
                                <SelectValidator
                                    name="city"
                                    validators={['required']}
                                    errorMessages={['this field is required']}

                                    id="city"
                                    select
                                    label="City"
                                    value={this.state.city}
                                    onChange={this.handleChange('city')}
                                    SelectProps={{}}
                                    margin="normal"
                                    fullWidth>
                                    {citys.map(city => (
                                        <MenuItem key={city.id} value={city.capitalName_id}>
                                            {city.capitalName_id}
                                        </MenuItem>
                                    ))}
                                </SelectValidator>
                            </div>
                            <div className="col-md-6 col-12">

                                <SelectValidator
                                    name="state"
                                    validators={['required']}
                                    errorMessages={['this field is required']}

                                    id="state"
                                    select
                                    label="State"
                                    value={this.state.State}
                                    onChange={this.handleChangeCountry('State')}
                                    SelectProps={{}}
                                    margin="normal"
                                    fullWidth>
                                    {locality.map(stateName => (
                                        <MenuItem key={stateName.id} value={stateName.name}>
                                            {stateName.name}
                                        </MenuItem>
                                    ))}
                                </SelectValidator>
                            </div>
                            <div className="col-md-6 col-12">
                                <TextValidator
                                    name="Zip-Code"
                                    validators={['required']}
                                    errorMessages={['this field is required']}

                                    value={this.state.zipCode}
                                    onChange={this.handleChange('zipCode')}
                                    id="Zip-Code"
                                    label="Zip-Code"
                                    defaultValue="Zip-Code"
                                    margin="normal"
                                    fullWidth />
                            </div>
                            <div className="col-md-6 col-12">
                                <SelectValidator
                                    name="Country"
                                    validators={['required']}
                                    errorMessages={['this field is required']}

                                    id="countries"
                                    select
                                    label="Country"
                                    value={this.state.country}
                                    onChange={this.handleChange('country')}
                                    SelectProps={{}}
                                    margin="normal"
                                    fullWidth>
                                    {countries.map(countrie => (
                                        <MenuItem key={countrie.id} value={countrie.name}>
                                            {countrie.name}
                                        </MenuItem>
                                    ))}
                                </SelectValidator>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <TextValidator
                                    name="Phone"
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    value={this.state.phone}
                                    onChange={this.handleChange('phone')}
                                    id="Phone"
                                    label="Phone"
                                    defaultValue="+62317482303"
                                    margin="normal"
                                    fullWidth />
                            </div>
                            <div className="col-md-6 col-12">
                                <TextValidator
                                    name="Fax"
                                    validators={['required']}
                                    errorMessages={['this field is required']}

                                    id="fax"
                                    value={this.state.fax}
                                    onChange={this.handleChange('fax')}
                                    label="Fax"
                                    margin="normal"
                                    fullWidth />
                            </div>
                            <div className="col-md-6 col-12">
                                <TextValidator
                                    name="email"
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}

                                    id="email"
                                    value={this.state.email}
                                    onChange={this.handleChange('email')}
                                    label="Email"
                                    margin="normal"
                                    fullWidth />
                            </div>
                            <div className="col-md-6 col-12">
                                <TextValidator
                                    name="NPWPNumber"
                                    validators={['required']}
                                    errorMessages={['this field is required']}

                                    id="NPWPNumber"
                                    value={this.state.npwpNumber}
                                    onChange={this.handleChange('npwpNumber')}
                                    label="NPWP Number"
                                    margin="normal"
                                    fullWidth />
                            </div>

                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-6 col-12">
                                <h3>NPWP Document</h3>
                            </div>
                            <div className="col-md-6 col-12">
                                <input accept="image/*" id="raised-button-file" multiple type="file" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <TextValidator
                                    name="SIUPNumber"
                                    validators={['required']}
                                    errorMessages={['this field is required']}

                                    id="SIUPNumber"
                                    value={this.state.suipNumber}
                                    onChange={this.handleChange('suipNumber')}
                                    label="SIUP Number"
                                    margin="normal"
                                    fullWidth />
                            </div>
                            <div className="col-md-6 col-12">
                                <TextValidator
                                    name="SIUPExpirationDate"
                                    validators={['required']}
                                    errorMessages={['this field is required']}

                                    value={this.state.suipExpirationDate}
                                    onChange={this.handleChange('suipExpirationDate')}
                                    id="SIUPExpirationDate"
                                    label="SIUP Expiration Date"
                                    margin="normal"
                                    fullWidth />
                            </div>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center text-center">
                            <div style={{ padding: '5px', border: '1px solid #29487D' }}>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <h3>Upload Logo Here</h3>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <input
                                            ref="uploadImg"
                                            type="file"
                                            name="selectedFile"
                                            onChange={this._onChange} />
                                        <br />
                                        <br />
                                    </div>
                                </div>

                                <div class="form-row text-center">
                                    <div class="col-12">
                                        <img
                                            src={this.state.imageUrl}
                                            className="rounded"
                                            width="304"
                                            height="126"
                                            alt="LOGO" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div>
                            <Paper>
                                <h1
                                    style={{
                                        background: '#4267B2',
                                        color: '#fff',
                                        textAlign: 'center',
                                    }}>Representatives</h1>
                            </Paper>
                            {this
                                .state
                                .Representatives
                                .map((Representative, idx) => (
                                    <div>
                                        <h2>#{idx + 1}</h2>

                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                <TextValidator
                                                    name="Name"
                                                    validators={['required']}
                                                    errorMessages={['this field is required']}
                                                    id="name"
                                                    label="Name"
                                                    value={this.state.repName}
                                                    onChange={this.handleChange('repName')}
                                                    margin="normal"
                                                    fullWidth />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <TextValidator
                                                    name="Address"
                                                    validators={['required']}
                                                    errorMessages={['this field is required']}
                                                    id="address"
                                                    label="Address"
                                                    multiline
                                                    rowsMax="6"
                                                    value={this.state.repAddress}
                                                    onChange={this.handleChange('repAddress')}
                                                    margin="normal"
                                                    fullWidth />
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                <SelectValidator
                                                    name="refCountry"
                                                    validators={['required']}
                                                    errorMessages={['this field is required']}
                                                    id="country"
                                                    select
                                                    label="Country"
                                                    value={this.state.refCountry}
                                                    onChange={this.handleChangeCountry('refCountry')}
                                                    SelectProps={{}}
                                                    margin="normal"
                                                    fullWidth>
                                                    {countries.map(countrie => (
                                                        <MenuItem key={countrie.id} value={countrie.name}>
                                                            {countrie.name}
                                                        </MenuItem>
                                                    ))}
                                                </SelectValidator>
                                            </div>

                                            <div className="col-md-6 col-12">
                                                <SelectValidator
                                                    name="repState"
                                                    validators={['required']}
                                                    errorMessages={['this field is required']}
                                                    id="state"
                                                    select
                                                    label="State"
                                                    value={this.state.repState}
                                                    onChange={this.handleChangeCountry('repState')}
                                                    SelectProps={{}}
                                                    margin="normal"
                                                    fullWidth>
                                                    {locality.map(stateName => (
                                                        <MenuItem key={stateName.id} value={stateName.name}>
                                                            {stateName.name}
                                                        </MenuItem>
                                                    ))}
                                                </SelectValidator >
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <TextValidator
                                                    name="repZipCode"
                                                    validators={['required']}
                                                    errorMessages={['this field is required']}
                                                    value={this.state.repZipCode}
                                                    onChange={this.handleChange('repZipCode')}
                                                    id="Zip-Code"
                                                    label="Zip-Code"
                                                    defaultValue="Zip-Code"
                                                    margin="normal"
                                                    fullWidth />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <SelectValidator
                                                    name="repCity"
                                                    validators={['required']}
                                                    errorMessages={['this field is required']}

                                                    id="city"
                                                    select
                                                    label="City"
                                                    value={this.state.repCity}
                                                    onChange={this.handleChange('repCity')}
                                                    SelectProps={{}}

                                                    margin="normal"
                                                    fullWidth>
                                                    {citys.map(city => (
                                                        <MenuItem key={city.id} value={city.capitalName_id}>
                                                            {city.capitalName_id}
                                                        </MenuItem>
                                                    ))}
                                                </SelectValidator>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <TextValidator
                                                    name="repPhone"
                                                    validators={['required']}
                                                    errorMessages={['this field is required']}
                                                    value={this.state.repPhone}
                                                    onChange={this.handleChange('repPhone')}
                                                    id="Phone"
                                                    label="Phone"
                                                    defaultValue="+62317482303"
                                                    margin="normal"
                                                    fullWidth />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <TextValidator
                                                    name="repFax"
                                                    validators={['required']}
                                                    errorMessages={['this field is required']}
                                                    id="fax"
                                                    value={this.state.repFax}
                                                    onChange={this.handleChange('repFax')}
                                                    label="Fax"
                                                    margin="normal"
                                                    fullWidth />
                                            </div>
                                            <div className="col-md-12 col-12">
                                                <TextValidator
                                                    name="Mobile"
                                                    validators={['required']}
                                                    errorMessages={['this field is required']}
                                                    id="mobile"
                                                    value={this.state.repMobile}
                                                    onChange={this.handleChange('repMobile')}
                                                    label="Mobile"
                                                    margin="normal"
                                                    fullWidth />
                                            </div>
                                        </div>
                                        <br />
                                        <div class="form-row text-center">
                                            <div class="col-12">

                                                <Button
                                                    variant="raised"
                                                    style={{
                                                        background: '#29487D',
                                                        color: '#fff'
                                                    }}
                                                    size="small"
                                                    onClick={this.handleRemoveRepresentative(idx)}>Remove</Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            <br />
                            <div class="form-row text-center">
                                <div class="col-12">

                                    <Button
                                        variant="raised"
                                        style={{
                                            background: '#29487D',
                                            color: '#fff'
                                        }}
                                        size="small"
                                        onClick={this.handleAddRepresentative}>
                                        Add another Representative
                                </Button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <h1
                            style={{
                                background: '#4267B2',
                                color: '#fff',
                                textAlign: 'center',
                            }}>
                            Officers</h1>

                        {this
                            .state
                            .Officers
                            .map((Officer, idx) => (
                                <div>
                                    <h2>#{idx + 1}</h2>
                                    <div className="row">
                                        <div className="col">
                                            <TextValidator
                                                name="Identity Name"
                                                validators={['required']}
                                                errorMessages={['this field is required']}
                                                id="officersName"
                                                label="Officers Name"
                                                value={this.state.officerName}
                                                onChange={this.handleChange('officerName')}
                                                margin="normal"
                                                fullWidth
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <h3>Identity Type*</h3>
                                        </div>
                                        <div className="col">
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="inlineRadio1"
                                                        value="option1"
                                                        checked={this.state.selected === 'option1'} onChange={(e) => this.setState({ selected: e.target.value })}
                                                    />
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
                                                        value="option2"
                                                        checked={this.state.selected === 'option2'} onChange={(e) => this.setState({ selected: e.target.value })}
                                                    />
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
                                                        value="option3"
                                                        checked={this.state.selected === 'option3'} onChange={(e) => this.setState({ selected: e.target.value })}
                                                    />
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
                                                        value="option4"
                                                        checked={this.state.selected === 'option4'} onChange={(e) => this.setState({ selected: e.target.value })}
                                                    />
                                                    Passport
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-12">
                                            <TextValidator
                                                name="IdentityNumber"
                                                floatingLabelText="Password"

                                                value={this.state.officerNumber}
                                                onChange={this.handleChange('officerNumber')}
                                                id="Identity Number"
                                                margin="normal"
                                                fullWidth
                                                validators={['required']}
                                                errorMessages={['this field is required']}

                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center text-center">
                                        <div style={{ padding: '5px', border: '1px solid #29487D' }}>
                                            <div className="col">
                                                <h3>Identity Document*</h3>
                                            </div>
                                            <div className="col" >
                                                <input accept="image/*" id="raised-button-file" multiple type="file" />
                                                <label htmlFor="raised-button-file">
                                                    <Button
                                                        variant="raised"
                                                        style={{
                                                            background: '#29487D',
                                                            color: '#fff'
                                                        }}
                                                        component="span">
                                                        Upload
                                            </Button>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="form-row text-center">
                                        <div class="col-12">

                                            <Button
                                                type="button"
                                                onClick={this.handleRemoveOfficer(idx)}
                                                variant="raised"
                                                style={{
                                                    background: '#29487D',
                                                    color: '#fff'
                                                }}
                                                size="small">Remove</Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        } < br />

                        <div class="form-row  text-center">
                            <div class="col-12">
                                <Button
                                    onClick={this.handleAddOfficer}
                                    variant="raised"
                                    style={{
                                        background: '#29487D',
                                        color: '#fff'
                                    }}
                                    size="small">
                                    Add another Officer
                            </Button>
                                <br />
                                <br />
                                <Button
                                    type="submit"
                                    variant="raised"
                                    style={{
                                        background: '#29487D',
                                        color: '#fff'
                                    }}
                                    size="normal"
                                >Submit
                                </Button>

                            </div>
                            <br />
                            <br />
                            <div >
                                <Link to="/thankyou" >
                                    <Button variant="raised" color="default">
                                        Next
                                    </Button>
                                </Link>
                            </div>
                            <br />
                            <br />

                        </div>
                    </form>
                </ValidatorForm>

            </div>


        )
    }
}

export default TextFields;