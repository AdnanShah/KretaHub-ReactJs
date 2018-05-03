import React from "react";
import Paper from "material-ui/Paper";
import data from "./jsonDataSource/tabledata.json";
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
      anchorEl: undefined,
      menuState: false,
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
  };

  columns = [
    {
      Header: "Estimated Time of Departure (ETD)",
      accessor: "field1"
    },
    {
      Header: "Estimated Time of Arrival (ETA)",
      accessor: "field3"
    },
    {
      Header: "Train",
      accessor: "field5"
    },
    {
      headerStyle: { background: "rgba(0, 0, 0, 0)" },
      Header: "Available Capacity",
      accessor: "field6"
    },
    {
      Header: "Station-to-Station",
      accessor: "field7"
    },
    {
      Header: "Door-to-Station",
      accessor: "field7"
    },
    {
      Header: "Door-to-Door",
      accessor: "field7"
    },
    {
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

      // Cell: row => (
      //   <div rowSpan={2}>
      //     <Link
      //       to={{
      //         pathname: "freightDetail"
      //       }}
      //     >
      //       <Button
      //         variant="raised"
      //         style={{
      //           width: "4em",
      //           background: "#29487D",
      //           color: "#fff",
      //           marginLeft: "1.5em",
      //           marginTop: row.index % 2 == 1 ? "-2.5em" : "auto",
      //           marginBottom: row.index % 2 == 0 ? "-2.5em" : "auto"
      //         }}
      //         component="span"
      //         onClick={() => console.log("Value: ", row)}
      //       >
      //         Details
      //       </Button>
      //     </Link>
      //   </div>
      // )
    }
  ];

  render() {
    try {
      this.props.location.state.key;
    } catch (err) {
      window.location.replace("default");
    }

    // console.log(this.props.location.state.key);
    const { anchorEl, menuState, currentDate } = this.state;
    const { classes } = this.props;
    // console.log(this.state.currentDate);

    return (
      <Paper>
        <div className="container">
          <div className="">
            <div className="">
              <div className="">
                <div className="jr-card-header pt-3 px-4">
                  <h2>
                    <IntlMessages id="Freight Quote Search" />
                  </h2>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label
                        style={{
                          marginRight: "20px"
                        }}
                        for="Student"
                      >
                        Departure:
                      </label>
                      <TextField
                        id="city"
                        select
                        style={{
                          marginRight: "85px"
                        }}
                        className="m-3"
                        value={this.props.location.state.key.country1}
                        onChange={this.handleChange.bind(this, "country1")}
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
                  <div className="col-6">
                    <label
                      style={{
                        marginRight: "20px"
                      }}
                      for="Student"
                    >
                      Arrival:
                    </label>
                    <TextField
                      id="city"
                      select
                      value={this.props.location.state.key.country2}
                      onChange={this.handleChange("country2")}
                      SelectProps={{}}
                      className="m-3"
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
                  <div
                    className="col-12 freight-type"
                    onChange={this.setRadioButton}
                  >
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
                      style={
                        {
                          // marginRight: "20px"
                        }
                      }
                      for="Student"
                    >
                      Departure/Arrival date:
                    </label>
                    <DatePicker
                      style={{
                        width: 280,
                      }}
                      clearable
                      container="inline"
                      keyboard
                      onChange={this.handleDateChange}
                      animateYearScrolling={true}
                      leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                      rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                      value={this.props.location.state.key.selectedDate}
                    />

                    {/* <DatePicker
                      keyboard
                      value={this.props.location.state.key.selectedDate}
                      onChange={this.handleDateChange}
                      animateYearScrolling={false}
                    /> */}
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
                      keyboard
                      value={this.props.location.state.key.selectedUntilDate}
                      onChange={this.handleUntilDateChange}
                      animateYearScrolling={false}
                    />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <Link
              to={{
                pathname: "freightDetail"
              }}
            >
              <Button
                variant="raised"
                style={{
                  background: "#29487D",
                  color: "#fff"
                }}
                component="span"
              >
                Change Search
              </Button>
            </Link>
          </div>
          <br />
          <br />
          <hr />
          <ReactTable className="target-table -striped -highlight" data={data} columns={this.columns} defaultPageSize={10} />
        </div>
      </Paper>
    );
  }
}

export default FreightSearch;
