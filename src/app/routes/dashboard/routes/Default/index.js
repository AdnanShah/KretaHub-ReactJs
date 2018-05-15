import React from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import IntlMessages from "util/IntlMessages";
import MenuItem from "material-ui/Menu/MenuItem";
import stations from "./jsonDataSource/stations.json";
import DateFormatInput from "material-ui-next-datepicker";
import { Link } from "react-router-dom";
import Tour from "../../../../../components/Tour/index";
import { DatePicker } from "material-ui-pickers";

import Radio from "material-ui/Radio";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});
class Default extends React.Component {
  constructor() {
    super();
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    this.state = {
      anchorEl: undefined,
      menuState: false,
      country1: stations[1].field,
      country2: stations[2].field,
      currentDate: yyyy + "-" + mm + "-" + dd,
      radioButton: "radioButton1",
      selectedDate: new Date("March 20, 2018 11:13:00"),
      selectedUntilDate: new Date("April 20, 2018 11:13:00")
    };
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value }, this.handleStation);
  };
  onOptionMenuSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date }, this.untilDate);
  };
  untilDate = () => {
    let tt = this.state.selectedDate;
    let date = new Date(tt);
    let newdate = new Date(date);
    newdate.setDate(newdate.getDate() + 30);
    let dd = newdate.getDate();
    let mm = newdate.getMonth() + 1;
    let y = newdate.getFullYear();
    let someFormattedDate = mm + "/" + dd + "/" + y;
    this.setState({ selectedUntilDate: someFormattedDate });
  };
  handleUntilDateChange = date => {
    this.setState({ selectedUntilDate: date });
  };

  onChange = date => {
    console.log(date);
    this.setState({ date });
  };
  nextRoute = () => {
    this.props.history.push({
      pathname: "freightSearch",
      state: {
        key: this.state
      }
    });
  };
  setRadioButton = event => {
    this.setState({ radioButton: event.target.value });
  };
  handleStation = () => {
    if (this.state.country1 === this.state.country2) {
      this.setState(
        { country1: "", country2: "" },
        alert("Must be different stations")
      );
    }
  };

  componentWillMount() {
    document.title = "Shipper Dashboard - KretaHub";
  }
  render() {
    const { anchorEl, menuState, currentDate } = this.state;
    const { classes } = this.props;
    console.log(this.state);
    return (
      <Paper>
        <Tour />
        <div className="container-fluid">
          <div className="jr-card-header pt-3">
            <h1 className="freight-heading">Dashboard </h1>
          </div>
          <div className="jr-card-header pt-3">
            <h2 className="freight-heading">
              <IntlMessages id="Freight Quote Search" />
            </h2>
          </div>
          <div className="row">
            <div className="col-md-3 mt-3" style={{marginRight:'-5%'}}>Departure:</div>
            <div className="col-md-4">
              <TextField
                id="departure"
                select
                value={this.state.country1}
                onChange={this.handleChange("country1")}
                SelectProps={{}}
                margin="normal"
              >
                {stations.map((countrie, index) => (
                  <MenuItem key={countrie.id} value={countrie.field}>
                    {countrie.field}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="col-md-1 mt-4">Arrival:</div>
            <div className="col-md-4">
              <TextField
                className=""
                id="arrival"
                select
                value={this.state.country2}
                onChange={this.handleChange("country2")}
                SelectProps={{}}
                margin="normal"
              >
                {stations.map(countrie => (
                  <MenuItem key={countrie.id} value={countrie.field}>
                    {countrie.field}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mt-3" style={{marginRight:'-7%'}}>
              <label for="Student">Freight type:</label>
            </div>
            <div className="col-md">
              <label className="m-0" for="fcl">
                <Radio
                  checked={this.state.radioButton === "radioButton1"}
                  onChange={this.setRadioButton}
                  aria-label="A"
                  value="radioButton1"
                  name="radioButton"
                />
                FCL
              </label>
              <label className="" for="lcl">
                <Radio
                  checked={this.state.radioButton === "radioButton2"}
                  onChange={this.setRadioButton}
                  aria-label="A"
                  value="radioButton2"
                  name="radioButton"
                />
                LCL
              </label>
              <label className="" for="cargo">
                <Radio
                  checked={this.state.radioButton === "radioButton3"}
                  onChange={this.setRadioButton}
                  aria-label="A"
                  value="radioButton3"
                  name="radioButton"
                />
                General Cargo
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" style={{marginRight:'-5%'}}>
              <label className="mt-3" for="Student">
                Departure date / Arrival date:
              </label>
            </div>
            <div className="col-md-4">
              <DatePicker
                keyboard
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                animateYearScrolling={false}
              />
            </div>
            <div className="col-md-1 mt-3">
              <label className="" for="Student">
                Until:
              </label>
            </div>
            <div className="col-md-3">
              <DatePicker
                disabled
                keyboard
                value={this.state.selectedUntilDate}
                animateYearScrolling={false}
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button
                letiant="raised"
                onClick={this.nextRoute}
                style={{
                  background: "#29487D",
                  color: "#fff"
                }}
              >
                Search
              </Button>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default Default;
