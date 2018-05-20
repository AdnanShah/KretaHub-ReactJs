import React from "react";
import Paper from "material-ui/Paper";
import { data, searchData } from "./jsonDataSource/tabledata.js";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import IntlMessages from "util/IntlMessages";
import MenuItem from "material-ui/Menu/MenuItem";
import countries from "./jsonDataSource/countries.json";
import stations from "./jsonDataSource/stations.json";
import { Link } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import moment from "moment";
import { DatePicker } from "material-ui-pickers";
import "./frieghtstyles.css";

import Radio from "material-ui/Radio";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class FreightSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDate: moment()
    };
  }

  handleChange = name => event => {
    console.log("name", name, "event", event.target.value);
    this.setState({ [name]: event.target.value });
  };
  onOptionMenuSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
    // this.requiredDateFormate();
  };

  columns = [
    {
      sortable: false,
      Header: "Estimated Time of Departure (ETD)",
      accessor: "field1"
    },
    {
      sortable: false,
      Header: "Estimated Time of Arrival (ETA)",
      accessor: "field3"
    },
    {
      sortable: false,
      Header: "Train",
      accessor: "field5"
    },
    {
      sortable: false,
      Header: "Available Capacity",
      accessor: "field6"
    },
    {
      sortable: false,
      Header: "Station-to-Station",
      accessor: "field7"
    },
    {
      sortable: false,
      Header: "Door-to-Station",
      accessor: "field8"
    },
    {
      sortable: false,
      Header: "Door-to-Door",
      accessor: "field9"
    },
    {
      sortable: false,
      Header: "",
      accessor: "age",
      Cell: row => (
        <Link
          to={{
            pathname: "freightDetail"
          }}
          style={{
            overflow: "hidden"
          }}
          id="links"
        >
          <Button
            variant="raised"
            style={{
              width: "4em",
              background: "#29487D",
              color: "#fff",
              marginLeft: "1.5em",
              marginTop: row.index % 2 == 1 ? "-2.5em" : "auto",
              marginBottom: row.index % 2 == 0 ? "-2.5em" : "auto"
            }}
            component="span"
            onClick={() => console.log("Value: ", row)}
          >
            Details
          </Button>
        </Link>
      )
    }
  ];

  componentWillMount() {
    document.title = "Frieght Quote Search - KretaHub";
  }
  render() {
    try {
      this.props.location.state.key;
    } catch (err) {
      window.location.replace("default");
    }

    console.log(this.props.location.state.key);
    const { anchorEl, menuState, currentDate } = this.state;
    const { classes } = this.props;
    console.log("this.state", this.state);

    return (
      <Paper>
        <div className="container">
          <div className="container-fluid">
            <div className="jr-card-header pt-3">
              <h2 className="freight-heading">Freight Quote Search </h2>
            </div>
            <div className="row">
              <div className="col-md-3 mt-3" style={{ marginRight: "-5%" }}>
                Departure:
              </div>
              <div className="col-md-4">
                <TextField
                  id="departure"
                  select
                  value={this.props.location.state.key.country1}
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
                  value={this.props.location.state.key.country2}
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
              <div className="col-md-3 mt-3" style={{ marginRight: "-7%" }}>
                <label for="Student">Freight type:</label>
              </div>
              <div className="col-md">
                <label className="m-0" for="fcl">
                  <Radio
                    checked={
                      this.props.location.state.key.radioButton ===
                      "radioButton1"
                    }
                    onChange={this.setRadioButton}
                    aria-label="A"
                    value="radioButton1"
                    name="radioButton"
                  />
                  FCL
                </label>
                <label className="" for="lcl">
                  <Radio
                    checked={
                      this.props.location.state.key.radioButton ===
                      "radioButton2"
                    }
                    onChange={this.setRadioButton}
                    aria-label="A"
                    value="radioButton2"
                    name="radioButton"
                  />
                  LCL
                </label>
                <label className="" for="cargo">
                  <Radio
                    checked={
                      this.props.location.state.key.radioButton ===
                      "radioButton3"
                    }
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
              <div className="col-md-3" style={{ marginRight: "-5%" }}>
                <label className="mt-3" for="Student">
                  Departure date / Arrival date:
                </label>
              </div>
              <div className="col-md-4">
                <DatePicker
                  keyboard
                  value={this.props.location.state.key.selectedDate}
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
                  keyboard
                  value={this.props.location.state.key.selectedUntilDate}
                  animateYearScrolling={false}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <Button
                  onClick={searchData(
                    this.state.someFormattedDate,
                    this.state.someFormattedDate
                  )}
                  letiant="raised"
                  style={{
                    background: "#29487D",
                    color: "#fff"
                  }}
                >
                  Change Search
                </Button>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>

          <br />
          <br />
          <hr />
          <ReactTable
            data={searchData(
              this.props.location.state.key.selectedDate,
              // this.props.location.state.key.selectedUntilDate
              "March 21  2018"
            )}
            sortable={false}
            className="target-table -striped -highlight"
            // data={data}
            columns={this.columns}
            defaultPageSize={10}
          />
        </div>
      </Paper>
    );
  }
}

export default FreightSearch;
