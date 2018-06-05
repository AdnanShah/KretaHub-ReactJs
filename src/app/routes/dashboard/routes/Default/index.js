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
import FreightSearch from "./frieghtQuoteSearch";
import Radio from "material-ui/Radio";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});
var depDate = [{ field: "Departure date " }, { field: "Arrival date" }];
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

class Default extends React.Component {
  constructor() {
    super();
    this.state = {
      country1: stations[1].field,
      country2: stations[2].field,
      error: false,
      radioButton: "radioButton1",
      selectedDate: new Date(),
      selectedUntilDate: new Date(),
      depDate: depDate[0].field
    };
  }
  handleChange = name => event => {
    this.setState(
      { [name]: event.target.value, error: false },
      this.handleStation
    );
  };

  onOptionMenuSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };

  handleDateChange = date => {
    // let date = new Date(date);
    let newdate = new Date(date);
    newdate.setDate(newdate.getDate());
    let dd = newdate.getDate();
    let mm = month[newdate.getMonth()];
    let y = newdate.getFullYear();
    let someFormattedDate = mm + " " + dd + "  " + y;

    this.setState({ selectedDate: someFormattedDate }, () => {
      this.untilDate();
    });
  };

  untilDate = () => {
    let tt = this.state.selectedDate;
    let date = new Date(tt);
    let newdate = new Date(date);
    newdate.setDate(newdate.getDate() + 30);
    let dd = newdate.getDate();
    let mm = month[newdate.getMonth() + 1];
    let y = newdate.getFullYear();
    let someFormattedDate = mm + " " + dd + " " + y;
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
    if (
      (this.state.country1 === stations[1].field &&
        this.state.country2 === stations[1].field) ||
      (this.state.country1 === stations[2].field &&
        this.state.country2 === stations[2].field)
    ) {
      this.setState({
        country1: stations[0].field,
        country2: stations[0].field,
        error: !this.state.error
      });
    }
  };
  componentWillMount() {
    this.untilDate();
    document.title = "Shipper Dashboard - KretaHub";
    // console.log(this.props);
  }
  render() {
    const { anchorEl, menuState, currentDate } = this.state;
    const { classes } = this.props;
    // console.log(this.state);
    // console.log(this.props);
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
            <div
              className="col-md-3 mt-3 origin"
              style={{ marginRight: "-5%" }}
            >
              Departure:
            </div>
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
            <div className="col-md-1 mt-4 destination">Arrival:</div>
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
              <h4 className="text-danger">
                {this.state.error ? "Must be different stations" : ""}
              </h4>
            </div>
          </div>
          <div className="row freight-type">
            <div className="col-md-3 mt-3" style={{ marginRight: "-7%" }}>
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
            <div
              className="col-md-3"
              style={{ marginRight: "-5%", marginTop: "-1.5%" }}
            >
              <TextField
                name="depDate"
                select
                value={this.state.depDate}
                onChange={this.handleChange("depDate")}
                SelectProps={{}}
                margin="normal"
              >
                {depDate.map(depDate => (
                  <MenuItem value={depDate.field}>{depDate.field}</MenuItem>
                ))}
              </TextField>
            </div>
            <div className="col-md-4">
              <DatePicker
                format="MMMM DD, YYYY"
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
                format="MMMM DD, YYYY"
                keyboard
                value={this.state.selectedUntilDate}
                onChange={this.handleUntilDateChange}
                animateYearScrolling={false}
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-2">
              <div className=" searchButton">
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
              </div>
            </div>
          </div>
        </div>
        <br />
      </Paper>
    );
  }
}

export default Default;
