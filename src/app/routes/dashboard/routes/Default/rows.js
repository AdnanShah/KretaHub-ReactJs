import React from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import MenuItem from "material-ui/Menu/MenuItem";
import stations from "./jsonDataSource/stations.json";
import DateFormatInput from "material-ui-next-datepicker";
import { Link } from "react-router-dom";
import { DatePicker } from "material-ui-pickers";
import Icon from "material-ui/Icon";
import data from "./jsonDataSource/packingdata.json";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Snackbar from "material-ui/Snackbar";
import IconButton from "material-ui/IconButton";
import Select from "material-ui/Select";
import { Input } from "material-ui/Input";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

const head = {
  backgroundColor: "#3f51b5",
  color: "#fff"
};

class Row extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "",
      open: false,
      checkData: true,
      checkData2: true,
      checkData3: true,
      errorMessage: "Please fill in the fields",
      makeData: [
        {
          field1: "",
          field2: "",
          field22: "",
          field3: "",
          field4: "",
          field5: "",
          field6: "",
          field7: "",
          field8: "",
          field9: ""
        }
      ]
    };
  }

  renderEditable = cellInfo => {
    return (
      <div
        style={{ backgroundColor: "#fff" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const makeData = [...this.state.makeData];
          // console.log(makeData);
          makeData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          // makeData[cellInfo.index].field5 =
          //   makeData[cellInfo.index].field6 * makeData[cellInfo.index].field3;
          this.setState({ makeData });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.makeData[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };
  addRow = () => {
    var newdata = {
      field1: "",
      field2: "",
      field22: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
      field8: "",
      field9: ""
    };
    this.setState({ makeData: this.state.makeData.concat(newdata) });
  };

  deleteRow = cellInfo => {
    if (this.state.makeData[1] != null) {
      var contacts = [...this.state.makeData];
      contacts.splice(cellInfo, 1);
      this.setState({ makeData: contacts });
    }
  };

  handleRow = cellInfo => {
    // console.log(cellInfo);
    if (cellInfo.index == this.state.makeData.length - 1) {
      return (
        <div>
          <Icon color="primary" onClick={this.addRow}>
            add_circle
          </Icon>
        </div>
      );
    } else {
      return (
        <div>
          <Icon
            color="error"
            onClick={() => {
              this.deleteRow(cellInfo.index);
            }}
          >
            delete
          </Icon>
        </div>
      );
    }
  };

  handleOnsubmit = () => {
    this.state.makeData.forEach((item, index) => {
      for (var key in item) {
        if (item[key] == "") {
          // console.log("Container 1: 20RF is not Valid", item[key]);
          this.setState({ open: !this.state.open, checkData: false }, () => {
            this.changeRoute();
          });
        } else {
          this.setState({ open: true, checkData: true }, () => {
            this.changeRoute();
          });
        }
      }
    });

    this.state.makeData2.forEach((item, index) => {
      for (var key in item) {
        if (item[key] == "") {
          // console.log("Container 2: 20RF is not Valid", item[key]);
          this.setState({ open: !this.state.open, checkData2: false }, () => {
            this.changeRoute();
          });
        } else {
          this.setState({ open: true, checkData2: true }, () => {
            this.changeRoute();
          });
        }
      }
    });

    this.state.makeData3.forEach((item, index) => {
      for (var key in item) {
        if (item[key] == "") {
          // console.log("Container 3: 40GP is not Valid", item[key]);
          this.setState({ open: !this.state.open, checkData3: false }, () => {
            this.changeRoute();
          });
        } else {
          this.setState({ open: true, checkData3: true }, () => {
            this.changeRoute();
          });
        }
      }
    });
  };

  changeRoute = () => {
    // if (
    //   this.state.checkData === true &&
    //   this.state.checkData2 === true &&
    //   this.state.checkData3 === true
    // ) {
    this.props.history.push("/app/dashboard/mainthankyou");
    // }
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentWillMount() {
    document.title = "Shipper PackingList  - KretaHub";
  }
  handleChange = cellInfo => event => {
    console.log("rowrow", cellInfo, event.target.value);
    const makeData = [...this.state.makeData];
    makeData[cellInfo.index][cellInfo.column.id] = event.target.value;
    this.setState({ makeData }, () => {
      console.log(this.state.makeData);
    });
  };
  autofillTable1 = () => {
    const makeData = this.state.makeData.map((item, id) => {
      if (id == 0)
        return {
          field1: "Non-DG",
          field2: "Rice",
          field22: "1000",
          field3: "Rice",
          field4: "1",
          field5: "bag",
          field6: "1000",
          field7: "2",
          field8: "1",
          field9: "2.5"
        };
      return item;
    });
    this.setState({
      makeData
    });
  };
  goods = [
    "Rice",
    "Iron",
    "Coke",
    "Sugar",
    "Salt",
    "Grain",
    "Ferro",
    "Klinger",
    "Fuel",
    "Kerozene",
    "Heavy machines/vehicles",
    "Fruits",
    "Wood",
    "Liquid bulk goods",
    "Solid bulk goods",
    "Large freight containers",
    "Other freight containers",
    "Palletised goods",
    "Pre-slung goods",
    "Mobile self-propelled units",
    "Other mobile units",
    "Other cargo not elsewhere specified"
  ];
  units = [
    "bag",
    "board feet",
    "bale",
    "bottle",
    "box",
    "hundred",
    "cubic centimeter",
    "cubic feet",
    "curie",
    "cylinder",
    "centimeter",
    "can",
    "case",
    "carton",
    "hundred weight",
    "cubic yard",
    "diameter",
    "drum",
    "dewar",
    "day",
    "dozen",
    "each",
    "feet",
    "gallon",
    "gram",
    "grain",
    "gross",
    "hour",
    "inch",
    "jar",
    "kilogram",
    "kit",
    "lambda",
    "pound",
    "linear feet",
    "length",
    "liter",
    "lot",
    "linear yard",
    "thousand",
    "milligram",
    "milliliter",
    "millimeter",
    "minute",
    "month",
    "micron",
    "meter",
    "omega",
    "ounce",
    "package",
    "piece",
    "page",
    "package",
    "pail",
    "pair",
    "pint",
    "quarter",
    "quart",
    "rod",
    "roll",
    "ream",
    "square feet",
    "sheet",
    "set",
    "square yard",
    "tube",
    "transaction",
    "unit",
    "vial",
    "week",
    "yard",
    "year"
  ];
  render() {
    console.log("this.state", this.state);
    return (
      <div className="container-fluid">
        {/* <Button onClick={this.autofillTable1}>Autofill</Button> */}
        <ReactTable
          resizable={false}
          sortable={false}
          name="table1"
          className="-striped -highlight"
          defaultPageSize={this.state.makeData.length}
          key={this.state.makeData.length}
          showPagination={false}
          data={this.state.makeData}
          columns={[
            {
              Header: `Type*`,
              accessor: "field1",

              Cell: row => (
                <span>
                  <Select
                    className="mt-3"
                    fullWidth
                    value={this.state.makeData[row.index].field1}
                    onChange={this.handleChange(row)}
                    inputProps={{
                      name: "type",
                      id: "type"
                    }}
                  >
                    <MenuItem value="Non-DG">Non-DG</MenuItem>
                    <MenuItem value="DG">DG</MenuItem>
                  </Select>
                  <br />
                  <div className="mt-2">Weight</div>
                </span>
              )
            },
            {
              Header: "Name*",
              accessor: "field2",
              minWidth: 80,
              Cell: row => (
                <span>
                  <Select
                    className="mt-3"
                    fullWidth
                    value={this.state.makeData[row.index].field2}
                    onChange={this.handleChange(row)}
                    inputProps={{
                      name: "type",
                      id: "type"
                    }}
                  >
                    {this.goods.map(good => {
                      return <MenuItem value={good}>{good}</MenuItem>;
                    })}
                  </Select>
                  <br />
                  <div className="mt-2">
                    <input
                      // onChange={this.handleChange(row)}
                      // value={this.state.makeData[row.index].field22}
                      className="text-right float-left"
                      style={{
                        border: "none",
                        width: "80%",
                        lineHeight: "80%"
                      }}
                      type="number"
                    />
                    <span>kg</span>
                  </div>
                </span>
              )
            },
            {
              Header: "Description*",
              accessor: "field3",
              minWidth: 300,
              Cell: row => (
                <span>
                  <input
                    className="mt-3"
                    onChange={this.handleChange(row)}
                    value={this.state.makeData[row.index].field3}
                    style={{
                      border: "none",
                      width: "100%",
                      lineHeight: "80%"
                    }}
                  />
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    className="mt-3"
                  >
                    <div>Size(Length &times; Width &times; Height)</div>
                    <div className="ml-3">
                      <input
                        // onChange={this.handleChange(row)}
                        // value={this.state.makeData[row.index].field3}
                        className="text-right float-left"
                        type="number"
                        style={{
                          border: "none",
                          width: "100%",
                          lineHeight: "80%"
                        }}
                      />
                    </div>
                    <div className="ml-3">m &times;</div>
                  </div>
                </span>
              )
            },
            {
              Header: "QTY*",
              className: "text-right",
              accessor: "field4",
              Cell: row => (
                <span>
                  <div>
                    <input
                      onChange={this.handleChange(row)}
                      value={this.state.makeData[row.index].field4}
                      className="mt-3 text-right float-left"
                      style={{
                        border: "none",
                        width: "100%",
                        lineHeight: "80%"
                      }}
                      type="number"
                    />
                  </div>
                  <div>
                    <input
                      // onChange={this.handleChange(row)}
                      // value={this.state.makeData[row.index].field4}
                      className="mt-3 text-right float-left"
                      style={{
                        border: "none",
                        width: "100%",
                        lineHeight: "80%"
                      }}
                      type="number"
                    />
                  </div>
                </span>
              )
            },
            {
              Header: "Unit*",
              accessor: "field5",
              minWidth: 100,
              Cell: row => (
                <span>
                  <div>
                    <Select
                      fullWidth
                      value={this.state.makeData[row.index].field5}
                      onChange={this.handleChange(row)}
                      inputProps={{
                        name: "type",
                        id: "type"
                      }}
                    >
                      {this.units.map(good => {
                        return <MenuItem value={good}>{good}</MenuItem>;
                      })}
                    </Select>
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    className="mt-3"
                  >
                    <div>m &times;</div>
                    <div className="ml-3">
                      <input
                        // onChange={this.handleChange(row)}
                        // value={this.state.makeData[row.index].field5}
                        className="text-right float-left"
                        type="number"
                        style={{
                          border: "none",
                          width: "100%",
                          lineHeight: "80%"
                        }}
                      />
                    </div>
                    <div className="ml-3">m</div>
                  </div>
                </span>
              )
            },
            {
              Header: "",
              accessor: "",
              Cell: this.handleRow,
              minWidth: 30
            }
          ]}
        />
      </div>
    );
  }
}

export default Row;
