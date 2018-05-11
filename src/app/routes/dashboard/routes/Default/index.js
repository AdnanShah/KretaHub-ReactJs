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
      country1: "Algeria",
      country2: "Australia",
      currentDate: yyyy + "-" + mm + "-" + dd,
      radioButton: "radioButton2",
      selectedDate: new Date(),
      selectedUntilDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
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
    document.title = 'Shipper Dashboard - KretaHub'
  }
  render() {
    const { anchorEl, menuState, currentDate } = this.state;
    const { classes } = this.props;
    console.log(this.state);
    return (
      <Paper>
        <Tour />
        <div className="container">
          <div className="jr-card-header pt-3 px-4">
            <h2 className="freight-heading">
              <IntlMessages id="Freight Quote Search" />
            </h2>
          </div>
          <div className="row">
            <div className="col-6 destination">
              <label for="departure">
                Departure:
                <TextField
                  className="m-3"
                  id="departure"
                  select
                  value={this.state.country1}
                  onChange={this.handleChange("country1")}
                  SelectProps={{}}
                  margin="normal"
                >
                  {stations.map(countrie => (
                    <MenuItem key={countrie.id} value={countrie.field}>
                      {countrie.field}
                    </MenuItem>
                  ))}
                </TextField>
              </label>
            </div>
            <div className="col-6 origin">
              <label for="arrival">
                Arrival:
                <TextField
                  className="m-3"
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
              </label>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12 freight-type" onChange={this.setRadioButton}>
              <div id="group1">
                <label
                  style={{
                    marginRight: "20px"
                  }}
                  for="Student"
                >
                  Freight type:
                </label>
                <label className="m-2" for="fcl">
                  <input
                    id="fcl"
                    type="radio"
                    value="radioButton1"
                    name="radioButton"
                    defaultChecked
                  />
                  FCL
                </label>
                <label className="m-2" for="lcl">
                  <input
                    id="lcl"
                    type="radio"
                    value="radioButton2"
                    name="radioButton"
                  />
                  LCL
                </label>
                <label className="m-2" for="cargo">
                  <input
                    id="cargo"
                    type="radio"
                    value="radioButton3"
                    name="radioButton"
                  />
                  General Cargo
                </label>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-6">
              <label
                style={{
                  marginRight: "20px"
                }}
                for="Student"
              >
                Departure/Arrival date:
              </label>
              <DatePicker
                disablePast
                keyboard
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                animateYearScrolling={false}
              />
            </div>
            <div className="col-6">
              <label
                style={{
                  marginRight: "20px"
                }}
                for="Student"
              >
                Until:
              </label>
              <DatePicker
                disabled
                keyboard
                value={this.state.selectedUntilDate}
                animateYearScrolling={false}
              />
              <br />
              <br />
            </div>
          </div>

          <Button
            letiant="raised"
            onClick={this.nextRoute}
            style={{
              background: "#29487D",
              color: "#fff"
            }}
            className="searchButton"
            component="span"
          >
            Search
          </Button>
          <br />
          <br />
          <br />
        </div>
      </Paper>
    );
  }
}

export default Default;
