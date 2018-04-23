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
        countries: '',
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
        country: '',
        officerNumber: '',
        officerName: '',
        Representatives: [
            { officerNumber: '' }
        ],
        Officers: [
            {
                name: ''
            }
        ]
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
            repCountry: 'Indonesia',
            repPhone: '+62317482303',
            repFax: '+62317290363',
            repMobile: '+628155521198',
            officerName: 'Haris',
            officerNumber: '12345678910234500000',
            industry: currencies[0].label,
            shipment: shipments[0].label,
            city: citys[0].capitalName_id,
            country: countries[0].name,
            // industry:this.currencies.value,
        })
        console.log("this.currencies[0]", currencies);
    }

    render() {
        return (
            <div style={divStyle} className="container-fluid">
                <br />
                <h1 // className="text-center"
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
                <form noValidate autoComplete="off">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <TextField
                                id="name"
                                label="Name"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                fullWidth />
                        </div>
                        <div className="col-md-6 col-12">
                            <TextField
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
                            </TextField>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-6 col-12">
                            <TextField
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
                            </TextField>
                        </div>
                        <div className="col-md-6 col-12">
                            <TextField
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
                            <TextField
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
                            </TextField>
                        </div>
                        <div className="col-md-6 col-12">

                            <TextField
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
                            </TextField>
                        </div>
                        <div className="col-md-6 col-12">
                            <TextField
                                value={this.state.zipCode}
                                id="Zip-Code"
                                label="Zip-Code"
                                defaultValue="Zip-Code"
                                margin="normal"
                                fullWidth />
                        </div>
                        <div className="col-md-6 col-12">
                            <TextField
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
                            </TextField>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <TextField
                                value={this.state.phone}
                                id="Phone"
                                label="Phone"
                                defaultValue="+62317482303"
                                margin="normal"
                                fullWidth />
                        </div>
                        <div className="col-md-6 col-12">
                            <TextField
                                id="fax"
                                value={this.state.fax}
                                label="Fax"
                                margin="normal"
                                fullWidth />
                        </div>
                        <div className="col-md-6 col-12">
                            <TextField
                                id="email"
                                value={this.state.email}
                                label="Email"
                                margin="normal"
                                fullWidth />
                        </div>
                        <div className="col-md-6 col-12">
                            <TextField
                                id="NPWPNumber"
                                value={this.state.npwpNumber}
                                label="NPWP Number"
                                margin="normal"
                                fullWidth />
                        </div>

                    </div>
                    <br />
                    <br />

                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h1
                                style={{
                                }}>NPWP Document</h1>

                        </div>
                        <div className="col-md-6 col-12">

                            <input accept="image/*" id="raised-button-file" multiple type="file" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <TextField
                                id="SIUPNumber"
                                value={this.state.suipNumber}
                                label="SIUP Number"
                                margin="normal"
                                fullWidth />
                        </div>
                        <div className="col-md-6 col-12">
                            <TextField
                                value={this.state.suipExpirationDate}
                                id="SIUPExpirationDate"
                                label="SIUP Expiration Date"
                                margin="normal"
                                fullWidth />
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h1
                                style={{
                                }}>
                                Upload Logo Here</h1>
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
                                            <TextField
                                                id="name"
                                                label="Name"
                                                value={this.state.repName}
                                                onChange={this.handleChange('name')}
                                                margin="normal"
                                                fullWidth />
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <TextField
                                                id="address"
                                                label="Address"
                                                multiline
                                                rowsMax="6"
                                                value={this.state.repAddress}
                                                onChange={this.handleChange('address')}
                                                margin="normal"
                                                fullWidth />
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <TextField
                                                id="country"
                                                select
                                                label="Country"
                                                value={this.state.country}
                                                onChange={this.handleChangeCountry('country')}
                                                SelectProps={{}}

                                                margin="normal"
                                                fullWidth>
                                                {countries.map(countrie => (
                                                    <MenuItem key={countrie.id} value={countrie.name}>
                                                        {countrie.name}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </div>

                                        <div className="col-md-6 col-12">
                                            <TextField
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
                                            </TextField>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <TextField
                                                value={this.state.repZipCode}
                                                id="Zip-Code"
                                                label="Zip-Code"
                                                defaultValue="Zip-Code"
                                                margin="normal"
                                                fullWidth />
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <TextField
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
                                            </TextField>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <TextField
                                                value={this.state.repPhone}
                                                id="Phone"
                                                label="Phone"
                                                defaultValue="+62317482303"
                                                margin="normal"
                                                fullWidth />
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <TextField
                                                id="fax"
                                                value={this.state.repFax}
                                                label="Fax"
                                                margin="normal"
                                                fullWidth />
                                        </div>
                                        <div className="col-md-12 col-12">
                                            <TextField
                                                id="mobile"
                                                value={this.state.repMobile}
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
                                    <div className="col-md-12 col-12">
                                        <TextField
                                            id="officersName"
                                            label="Officers Name"
                                            value={this.state.officerName}
                                            margin="normal"
                                            fullWidth />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-12">
                                        <h1
                                            style={{
                                            }}>Identity Type</h1>
                                    </div>
                                    <div className="col-md-12 col-12">
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="inlineRadio1"
                                                    value="option1" />
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
                                                    value="option2" />
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
                                                    value="option3" />
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
                                                    value="option3" />
                                                Passport
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-12 col-12">
                                        <TextField
                                            value={this.state.officerNumber}
                                            id="Identity Number"
                                            label="Identity Number"
                                            margin="normal"
                                            fullWidth />
                                    </div>
                                </div>
                                <br />
                                <div className="row" style={{ border: '1px solid #29487D' }}>
                                    <div className="col-md-12 col-12">
                                        <h1
                                            style={{
                                            }}>Identity Document</h1>
                                    </div>

                                    <div className="col-md-12 col-12" >
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
                                Add another Officers
                            </Button>
                            <br />
                            <br />
                            <Button
                                variant="raised"
                                style={{
                                    background: '#29487D',
                                    color: '#fff',
                                }}
                                size="normal">
                                Submit
                            </Button>
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
                    </div>
                </form>
            </div>
        )
    }
}

export default TextFields;