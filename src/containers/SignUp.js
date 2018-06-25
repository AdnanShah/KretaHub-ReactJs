import React from "react";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import citys from "./jsonDataSource/province-ID.json";
import locality from "./jsonDataSource/locality-ID.json";
import industry from "./jsonDataSource/industry.json";
import countries from "./jsonDataSource/countries.json";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import { Link } from "react-router-dom";
import {
  TextValidator,
  ValidatorForm,
  SelectValidator,
  CheckboxValidatorElement
} from "react-material-ui-form-validator";
import { withRouter } from "react-router-dom";
import { DatePicker } from "material-ui-pickers";
import Footer from "../components/Footer";
import Header from "../components/SignUpHeader";
import IntegrationReactSelect from "./ReactSelect";
const shipments = [
  {
    value: "1",
    label: "1-10/month"
  },
  {
    value: "2",
    label: "10 or more/month"
  }
];
const divStyle = {
  overflowY: "auto"
};
class TextFields extends React.Component {
  state = {
    open: false,
    name: "",
    industry: "",
    shipment: "",
    State: "",
    address: "",
    city: "",
    zipCode: "",
    imageUrl: "",
    phone: "",
    countries: countries[75].name,
    fax: "",
    email: "",
    npwpNumber: "",
    suipNumber: "",
    suipExpirationDate: "",
    shipment: "",
    country: countries[75].name,
    Representatives: [
      {
        repName0: "",
        repAddress0: "",
        repCity0: "",
        repState: "",
        repZipCode: "",
        repPhone0: "",
        repFax: "",
        repMobile: "",
        repCountry0: countries[75].name
      }
    ],
    Officers: [
      {
        officerName0: "",
        officerNumber0: "",
        selected0: ""
      }
    ],
    submitted: true,
    selectedDate: new Date()
  };

  autoFill = () => {
    const newItems = this.state.Representatives.map((item, id) => {
      if (id == 0)
        return {
          repName0: "Benny Sukamto",
          repAddress0: "Kalianak Barat 57",
          repCity0: citys[0].capitalName_id,
          repState: locality[0].name,
          repZipCode: "10000",
          repCountry0: countries[75].name,
          repPhone0: "+62317482303",
          repFax: "+62317290363",
          repMobile: "+628155521198"
        };
      return item;
    });
    const officerItems = this.state.Officers.map((item, id) => {
      if (id == 0)
        return {
          officerName0: "Haris",
          officerNumber0: "12345678910234500000",
          selected0: "option1"
        };
      return item;
    });

    this.setState({
      submitted: false,
      name: "PT. IndoTech",
      address: "Rajawali 109",
      zipCode: "10000",
      phone: "+62317482303",
      fax: "+62317290361",
      email: "indotech@gmail.com",
      npwpNumber: "01.000.333.2-333.000",
      suipNumber: "503/8836.A/324.1.18/2018",
      suipExpirationDate: "2/27/2018",
      State: locality[0].name,
      industry: industry[1].industry_name,
      shipment: shipments[0].label,
      city: citys[0].capitalName_id,
      country: countries[75].name,
      Representatives: newItems,
      Officers: officerItems
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeCity = name => event => {
    this.setState({ [name]: event.target.value }, () => {
      this.handleState();
    });
  };
  handleState = () => {
    const result = locality.find(person => {
      return person.name === this.state.city;
    });
    this.setState({ State: result.stateName });
  };

  handleChangeRepCity = name => event => {
    this.setState({ [name]: event.target.value }, () => {
      this.handleRepState(event);
    });
  };

  handleRepState = (idx, evt) => {
    // console.log("event.target.value", evt.target.value);
    const result = locality.find(person => {
      return person.name === evt.target.value;
    });
    this.state.Representatives[idx].repState = result.stateName;
    this.setState({ repStateIdx: result.stateName });
  };

  onFileLoad = (e, file) => console.log(e.target.result, file.name);

  handleRepresentativeCityChange = idx => evt => {
    const newRepresentatives = this.state.Representatives.map(
      (Representative, sidx) => {
        if (idx !== sidx) return Representative;
        return {
          ...Representative,
          [evt.target.name]: evt.target.value
        };
      }
    );
    this.setState({ Representatives: newRepresentatives }, () => {
      this.handleRepState(idx, evt);
    });
    // console.log("newRepresentatives", newRepresentatives);
  };
  handleRepresentativeNameChange = idx => evt => {
    const newRepresentatives = this.state.Representatives.map(
      (Representative, sidx) => {
        if (idx !== sidx) return Representative;
        return {
          ...Representative,
          [evt.target.name]: evt.target.value
        };
      }
    );
    this.setState({ Representatives: newRepresentatives });
    // console.log("newRepresentatives", newRepresentatives);
  };

  handleAddRepresentative = () => {
    this.setState({
      Representatives: this.state.Representatives.concat([
        {
          repName: "",
          repAddress: "",
          repCity: "",
          repState: "",
          repZipCode: "",
          repPhone: "",
          repFax: "",
          repMobile: "",
          repCountry: countries[75].name
        }
      ])
    });
  };

  handleRemoveRepresentative = idx => () => {
    this.setState({
      Representatives: this.state.Representatives.filter(
        (s, sidx) => idx !== sidx
      )
    });
  };

  handleSubmit = evt => {
    const { name, Officers } = this.state;
    alert(`Incorporated: ${name} with ${Officers.length} Officers`);
  };

  handleAddOfficer = () => {
    this.setState({
      Officers: this.state.Officers.concat([
        {
          name: ""
        }
      ])
    });
  };

  handleRemoveOfficer = idx => () => {
    this.setState({
      Officers: this.state.Officers.filter((s, sidx) => idx !== sidx)
    });
  };
  _onChange = e => {
    const file = this.refs.uploadImg.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
      this.setState({ imageUrl: reader.result });
    } else {
      this.setState({ imageUrl: "" });
    }
  };

  handleOnSubmit = e => {
    this.setState({ submitted: false });
    this.props.history.push(`/thankyou`);
  };
  handleScroll = errors => {
    // console.log(errors);
    document
      .getElementsByName(errors[0].props.name)[0]
      .scrollIntoView({ behavior: "smooth" });
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  handleOfficerChange = idx => evt => {
    const newShareholders = this.state.Officers.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return {
        ...shareholder,
        [evt.target.name]: evt.target.value
      };
    });
    this.setState({ Officers: newShareholders });
  };
  componentWillMount() {
    document.title = "Shipper SignUp - KretaHub";
  }

  render() {
    console.log("state", this.state);
    return (
      <div style={divStyle} className="container-fluid">
        <Header />
        <br />
        <div className="mt-5">
          <div className="form-row text-center">
            <div className="col-12">
              <Button
                onClick={this.autoFill}
                variant="raised"
                style={{
                  background: "#29487D",
                  color: "#fff"
                }}
                size="small"
              >
                Auto-Fill Form
              </Button>
            </div>
          </div>
          <ValidatorForm
            onSubmit={this.handleOnSubmit}
            ref="form"
            onError={this.handleScroll}
          >
            <form noValidate autoComplete="on">
              <div className="row">
                <div className="col-md-6 col-12">
                  <TextValidator
                    required
                    name="name"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    id="name"
                    label="Name"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                    margin="normal"
                    fullWidth
                  />
                </div>
                <div className="col-md-6 col-12">
                  <SelectValidator
                    required
                    name="industry"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    id="industry"
                    label="Industry"
                    value={this.state.industry}
                    onChange={this.handleChange("industry")}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                  >
                    {industry.map(industry => (
                      <optgroup
                        value={industry.industry_name}
                        label={industry.sector_name}
                        key={industry.value}
                      >
                        <option>{industry.industry_name}</option>
                      </optgroup>
                    ))}
                  </SelectValidator>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <SelectValidator
                    name="Shipment"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    id="select-shipment"
                    select
                    label="Expected shipments"
                    required
                    value={this.state.shipment}
                    onChange={this.handleChange("shipment")}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                  >
                    {shipments.map(shipment => (
                      <MenuItem key={shipment.value} value={shipment.label}>
                        {shipment.label}
                      </MenuItem>
                    ))}
                  </SelectValidator>
                </div>
                <div className="col-md-6 col-12">
                  <TextValidator
                    required
                    name="address"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    id="address"
                    label="Address"
                    multiline
                    rowsMax="6"
                    value={this.state.address}
                    onChange={this.handleChange("address")}
                    margin="normal"
                    fullWidth
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-12">
                  <IntegrationReactSelect value={this.state.city} />
                </div>
              </div>
              <div className="row">
                {/* <div className="col-md-6 col-12">
                  <SelectValidator
                    required
                    name="city"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    id="city"
                    select
                    label="City"
                    value={this.state.city}
                    onChange={this.handleChangeCity("city")}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                  >
                    {locality.map(city => (
                      <MenuItem key={city.id} value={city.name}>
                        {city.name}
                      </MenuItem>
                    ))}
                  </SelectValidator>
                </div>
                <div className="col-md-6 col-12">
                  <SelectValidator
                    disabled
                    name="state"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    id="state"
                    select
                    label="State"
                    required
                    value={this.state.State}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                  >
                    <MenuItem value={this.state.State}>
                      {this.state.State}
                    </MenuItem>
                  </SelectValidator>
                </div> */}
                <div className="col-md-6 col-12">
                  <TextField
                    value={this.state.zipCode}
                    onChange={this.handleChange("zipCode")}
                    id="Zip-Code"
                    label="Zip-Code"
                    defaultValue="Zip-Code"
                    margin="normal"
                    fullWidth
                  />
                </div>
                <div className="col-md-6 col-12">
                  <SelectValidator
                    name="Country"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    id="countries"
                    select
                    label="Country"
                    required
                    value={this.state.country}
                    onChange={this.handleChange("country")}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                  >
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
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    value={this.state.phone}
                    onChange={this.handleChange("phone")}
                    id="Phone"
                    label="Phone"
                    required
                    defaultValue="+62317482303"
                    margin="normal"
                    fullWidth
                  />
                </div>
                <div className="col-md-6 col-12">
                  <TextField
                    id="fax"
                    value={this.state.fax}
                    onChange={this.handleChange("fax")}
                    label="Fax"
                    margin="normal"
                    fullWidth
                  />
                </div>
                <div className="col-md-6 col-12">
                  <TextValidator
                    name="email"
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required",
                      "email is not valid"
                    ]}
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                    label="Email"
                    required
                    margin="normal"
                    fullWidth
                  />
                </div>
                <div className="col-md-6 col-12">
                  <TextValidator
                    name="NPWPNumber"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    id="NPWPNumber"
                    value={this.state.npwpNumber}
                    onChange={this.handleChange("npwpNumber")}
                    label="NPWP Number"
                    required
                    margin="normal"
                    fullWidth
                  />
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-6 col-12">
                  <h3>NPWP Document*</h3>
                </div>
                <div className="col-md-6 col-12">
                  <input
                    name="npwpDocument"
                    value={this.state.npwpDocument}
                    onChange={this.handleChange("npwpDocument")}
                    accept="image/*"
                    id="raised-button-file"
                    multiple
                    type="file"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12 col-12">
                  <TextField
                    id="SIUPNumber"
                    value={this.state.suipNumber}
                    onChange={this.handleChange("suipNumber")}
                    label="SIUP Number"
                    margin="normal"
                    fullWidth
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center text-center">
                <div className="col-md-6 col-12 ">
                  <DatePicker
                    disablePast
                    label="SIUP Expiration Date"
                    keyboard
                    format="DD/MM/YYYY"
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    animateYearScrolling={false}
                  />
                </div>
              </div>
              <br />
              <div className="d-flex justify-content-center text-center">
                <div style={{ padding: "5px", border: "1px solid #29487D" }}>
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <h3>Upload Logo Here</h3>
                    </div>
                    <div className="col-md-6 col-12">
                      <input
                        ref="uploadImg"
                        type="file"
                        name="selectedFile"
                        onChange={this._onChange}
                      />
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
                        alt="LOGO"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div>
                <h1
                  style={{
                    background: "#4267B2",
                    color: "#fff",
                    textAlign: "center"
                  }}
                >
                  Representatives
                </h1>
                {this.state.Representatives.map((Representative, idx) => (
                  <div>
                    <h2>#{idx + 1}</h2>

                    <div className="row">
                      <div className="col-md-6 col-12">
                        <TextValidator
                          name={`repName${idx}`}
                          value={Representative["repName" + idx]}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                          id="name"
                          label="Name"
                          required
                          onChange={this.handleRepresentativeNameChange(idx)}
                          margin="normal"
                          fullWidth
                        />
                      </div>
                      <div className="col-md-6 col-12">
                        <TextValidator
                          name={`repAddress${idx}`}
                          value={Representative["repAddress" + idx]}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                          id="address"
                          label="Address"
                          required
                          multiline
                          rowsMax="6"
                          onChange={this.handleRepresentativeNameChange(idx)}
                          margin="normal"
                          fullWidth
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <IntegrationReactSelect value={this.state.city} />
                      </div>
                    </div>

                    <div className="row">
                      {/* <div className="col-md-6 col-12">
                        <SelectValidator
                          name={`repCity${idx}`}
                          value={Representative["repCity" + idx] || ""}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                          id="city"
                          select
                          label="City"
                          required
                          onChange={this.handleRepresentativeCityChange(idx)}
                          SelectProps={{}}
                          margin="normal"
                          fullWidth
                        >
                          {locality.map(city => (
                            <MenuItem key={city.id} value={city.name}>
                              {city.name}
                            </MenuItem>
                          ))}
                        </SelectValidator>
                      </div>

                      <div className="col-md-6 col-12">
                        <SelectValidator
                          disabled
                          name="repState"
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                          id="state"
                          select
                          label="State"
                          required
                          value={this.state.Representatives[idx].repState}
                          SelectProps={{}}
                          margin="normal"
                          fullWidth
                        >
                          <MenuItem
                            value={this.state.Representatives[idx].repState}
                          >
                            {this.state.Representatives[idx].repState}
                          </MenuItem>
                        </SelectValidator>
                      </div> */}

                      <div className="col-md-6 col-12">
                        <TextField
                          name="repZipCode"
                          value={Representative.repZipCode}
                          onChange={this.handleRepresentativeNameChange(idx)}
                          id="Zip-Code"
                          label="Zip-Code"
                          margin="normal"
                          fullWidth
                        />
                      </div>

                      <div className="col-md-6 col-12">
                        <SelectValidator
                          name={`repCountry${idx}`}
                          value={Representative["repCountry" + idx] || ""}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                          id="country"
                          select
                          label="Country"
                          required
                          onChange={this.handleRepresentativeNameChange(idx)}
                          SelectProps={{}}
                          margin="normal"
                          fullWidth
                        >
                          {countries.map(countrie => (
                            <MenuItem key={countrie.id} value={countrie.name}>
                              {countrie.name}
                            </MenuItem>
                          ))}
                        </SelectValidator>
                      </div>

                      <div className="col-md-6 col-12">
                        <TextValidator
                          name={`repPhone${idx}`}
                          value={Representative["repPhone" + idx]}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                          onChange={this.handleRepresentativeNameChange(idx)}
                          id="Phone"
                          label="Phone"
                          required
                          margin="normal"
                          fullWidth
                        />
                      </div>
                      <div className="col-md-6 col-12">
                        <TextField
                          name="repFax"
                          id="fax"
                          value={Representative.repFax}
                          onChange={this.handleRepresentativeNameChange(idx)}
                          label="Fax"
                          margin="normal"
                          fullWidth
                        />
                      </div>
                      <div className="col-md-6 col-12">
                        <TextField
                          name="repMobile"
                          id="mobile"
                          value={Representative.repMobile}
                          onChange={this.handleRepresentativeNameChange(idx)}
                          label="Mobile"
                          margin="normal"
                          fullWidth
                        />
                      </div>
                    </div>
                    <br />
                    <div class="form-row text-center">
                      <div class="col-12">
                        <Button
                          variant="raised"
                          style={{
                            background: "#29487D",
                            color: "#fff"
                          }}
                          size="small"
                          onClick={this.handleRemoveRepresentative(idx)}
                        >
                          Remove
                        </Button>
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
                        background: "#29487D",
                        color: "#fff"
                      }}
                      size="small"
                      onClick={this.handleAddRepresentative}
                    >
                      Add another Representative
                    </Button>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div>
                <h1
                  style={{
                    background: "#4267B2",
                    color: "#fff",
                    textAlign: "center"
                  }}
                >
                  Officers
                </h1>
                {this.state.Officers.map((Officer, idx) => (
                  <div>
                    <h2>#{idx + 1}</h2>
                    <div className="row">
                      <div className="col">
                        <TextValidator
                          required
                          name={`officerName${idx}`}
                          value={Officer["officerName" + idx]}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                          id="officersName"
                          label="Officers Name"
                          onChange={this.handleOfficerChange(idx)}
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
                              id="inlineRadio1"
                              value="option1"
                              name={`selected${idx}`}
                              defaultChecked={
                                Officer["selected" + idx] === "option1"
                              }
                              onChange={this.handleOfficerChange(idx)}
                            />
                            Citizen ID Card
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <label className="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              id="inlineRadio2"
                              value="option2"
                              name={`selected${idx}`}
                              defaultChecked={
                                Officer["selected" + idx] === "option2"
                              }
                              onChange={this.handleOfficerChange(idx)}
                            />
                            Driver's License
                          </label>
                        </div>
                        <div className="form-check form-check-inline disabled">
                          <label className="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              id="inlineRadio3"
                              value="option3"
                              name={`selected${idx}`}
                              defaultChecked={
                                Officer["selected" + idx] === "option3"
                              }
                              onChange={this.handleOfficerChange(idx)}
                            />
                            Residency Permit
                          </label>
                        </div>
                        <div className="form-check form-check-inline disabled">
                          <label className="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              id="inlineRadio3"
                              value="option4"
                              name={`selected${idx}`}
                              defaultChecked={
                                Officer["selected" + idx] === "option4"
                              }
                              onChange={this.handleOfficerChange(idx)}
                            />
                            Passport
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <TextValidator
                          required
                          label="Identity Number"
                          name={`officerNumber${idx}`}
                          value={Officer["officerNumber" + idx]}
                          onChange={this.handleOfficerChange(idx)}
                          margin="normal"
                          fullWidth
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center text-center">
                      <div
                        style={{ padding: "5px", border: "1px solid #29487D" }}
                      >
                        <div className="col">
                          <h3>Identity Document*</h3>
                        </div>
                        <div className="col">
                          <input
                            accept="image/*"
                            required
                            id="raised-button-file"
                            multiple
                            type="file"
                          />
                          <label htmlFor="raised-button-file">
                            <Button
                              variant="raised"
                              style={{
                                background: "#29487D",
                                color: "#fff"
                              }}
                              component="span"
                            >
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
                            background: "#29487D",
                            color: "#fff"
                          }}
                          size="small"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <br />
              </div>
              <div class="form-row  text-center">
                <div class="col-12">
                  <Button
                    onClick={this.handleAddOfficer}
                    variant="raised"
                    style={{
                      background: "#29487D",
                      color: "#fff"
                    }}
                    size="small"
                  >
                    Add another Officer
                  </Button>
                  <br />
                  <br />
                  <Button type="submit" variant="raised" size="normal">
                    Submit
                  </Button>
                </div>
                <br />
                <br />
                <div>
                  <a href="https://assignmenttablefabodiamond.firebaseapp.com/Pending.html">
                    Next
                  </a>
                </div>
                <br />
                <br />
              </div>
            </form>
          </ValidatorForm>
        </div>
        <Footer />
      </div>
    );
  }
}

export default TextFields;
