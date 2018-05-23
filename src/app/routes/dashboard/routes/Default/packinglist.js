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
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Icon from "material-ui/Icon";
import data from "./jsonDataSource/packingdata.json";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {
  TextValidator,
  ValidatorForm,
  SelectValidator,
  CheckboxValidatorElement
} from "react-material-ui-form-validator";
import { withRouter } from "react-router-dom";
import Snackbar from "material-ui/Snackbar";
import IconButton from "material-ui/IconButton";
import Select from "material-ui/Select";

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

class Default extends React.Component {
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
          field3: "",
          field4: "",
          field5: "",
          field6: "",
          field7: "",
          field8: "",
          field9: ""
        }
      ],
      makeData2: [
        {
          field1: "",
          field2: "",
          field3: "",
          field4: "",
          field5: "",
          field6: "",
          field7: "",
          field8: "",
          field9: ""
        }
      ],
      makeData3: [
        {
          field1: "",
          field2: "",
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
          console.log(makeData);
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
    console.log(cellInfo, cellInfo.column.id);
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
        <br />
        <Icon color="primary" onClick={this.addRow}>
          add_circle
        </Icon>
      </div>
    );
  };
  renderEditable2 = cellInfo => {
    // console.log("cellInfo", cellInfo.index, cellInfo.column.id);

    return (
      <div
        style={{ backgroundColor: "#fff" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const makeData = [...this.state.makeData2];
          // console.log(makeData);
          makeData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          // makeData[cellInfo.index].field5 =
          //   makeData[cellInfo.index].field6 * makeData[cellInfo.index].field3;
          this.setState({ makeData2 });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.makeData2[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };
  addRow2 = () => {
    var newdata = {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
      field8: "",
      field9: ""
    };
    this.setState({ makeData2: this.state.makeData2.concat(newdata) });
  };

  deleteRow2 = cellInfo => {
    if (this.state.makeData2[1] != null) {
      var contacts = [...this.state.makeData2];
      contacts.splice(cellInfo, 1);
      this.setState({ makeData2: contacts });
    }
  };

  handleRow2 = cellInfo => {
    console.log(cellInfo, cellInfo.column.id);
    return (
      <div>
        <Icon
          color="error"
          onClick={() => {
            this.deleteRow2(cellInfo.index);
          }}
        >
          delete
        </Icon>
        <br />
        <Icon color="primary" onClick={this.addRow2}>
          add_circle
        </Icon>
      </div>
    );
  };
  renderEditable3 = cellInfo => {
    // console.log("cellInfo", cellInfo.index, cellInfo.column.id);

    return (
      <div
        style={{ backgroundColor: "#fff" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const makeData = [...this.state.makeData3];
          // console.log(makeData);
          makeData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          // makeData[cellInfo.index].field5 =
          //   makeData[cellInfo.index].field6 * makeData[cellInfo.index].field3;
          this.setState({ makeData3 });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.makeData3[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };
  addRow3 = () => {
    var newdata = {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
      field8: "",
      field9: ""
    };
    this.setState({ makeData3: this.state.makeData3.concat(newdata) });
  };

  deleteRow3 = cellInfo => {
    if (this.state.makeData3[1] != null) {
      var contacts = [...this.state.makeData3];
      contacts.splice(cellInfo, 1);
      this.setState({ makeData3: contacts });
    }
  };

  handleRow3 = cellInfo => {
    console.log(cellInfo, cellInfo.column.id);
    return (
      <div>
        <Icon
          color="error"
          onClick={() => {
            this.deleteRow3(cellInfo.index);
          }}
        >
          delete
        </Icon>
        <br />
        <Icon color="primary" onClick={this.addRow3}>
          add_circle
        </Icon>
      </div>
    );
  };

  handleOnsubmit = () => {
    this.state.makeData.forEach((item, index) => {
      for (var key in item) {
        if (item[key] == "") {
          console.log("Container 1: 20RF is not Valid", item[key]);
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
          console.log("Container 2: 20RF is not Valid", item[key]);
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
          console.log("Container 3: 40GP is not Valid", item[key]);
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
    console.log("rowrow", cellInfo);
    const makeData = [...this.state.makeData];
    makeData[cellInfo.index][cellInfo.column.id] = event.target.value;
    this.setState({ makeData });
  };
  handleChange2 = cellInfo => event => {
    console.log("rowrow", cellInfo);
    const makeData2 = [...this.state.makeData2];
    makeData2[cellInfo.index][cellInfo.column.id] = event.target.value;
    this.setState({ makeData2 });
  };
  handleChange3 = cellInfo => event => {
    console.log("rowrow", cellInfo);
    const makeData3 = [...this.state.makeData3];
    makeData3[cellInfo.index][cellInfo.column.id] = event.target.value;
    this.setState({ makeData3 });
  };

  render() {
    console.log("this.state", this.state);
    return (
      <div className="container-fluid">
        <br />
        <Paper>
          <h1 className="text-center p-3">Packing List</h1>
          <div className="container">
            <h2 style={head} className="pl-2">
              Container 1: 20RF
            </h2>
            <ReactTable
              showPagination={false}
              sortable={false}
              name="table1"
              className="-striped -highlight"
              sortable={false}
              defaultPageSize={2}
              data={this.state.makeData}
              columns={[
                {
                  Header: `Type*`,
                  accessor: "field1",

                  Cell: row => (
                    <span>
                      <Select
                        value={this.state.makeData[row.index].field1}
                        onChange={this.handleChange(row)}
                        inputProps={{
                          name: "type",
                          id: "type"
                        }}
                      >
                        <MenuItem value="" name="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Non-DG">Non-DG</MenuItem>
                      </Select>
                    </span>
                  )
                },
                {
                  Header: "Name*",
                  accessor: "field2",
                  Cell: row => (
                    <span>
                      <Select
                        value={this.state.makeData[row.index].field2}
                        onChange={this.handleChange(row)}
                        inputProps={{
                          name: "type",
                          id: "type"
                        }}
                      >
                        <MenuItem value="" name="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="rice">Rice</MenuItem>
                      </Select>
                    </span>
                  )
                },
                {
                  Header: "Description*",
                  accessor: "field3",
                  Cell: this.renderEditable
                },
                {
                  Header: "QTY*",
                  className: "text-right",
                  accessor: "field4",
                  Cell: row => (
                    <input
                      className="text-right float-left"
                      style={{
                        border: "none",
                        width: "100%",
                        lineHeight: "80%"
                      }}
                      type="number"
                    />
                  )
                },
                {
                  Header: "Unit*",
                  accessor: "field5",
                  Cell: row => (
                    <span>
                      <Select
                        value={this.state.makeData[row.index].field5}
                        onChange={this.handleChange(row)}
                        inputProps={{
                          name: "type",
                          id: "type"
                        }}
                      >
                        <MenuItem value="" name="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Non-DG">bags</MenuItem>
                      </Select>
                    </span>
                  )
                },
                {
                  Header: "Weight*",
                  className: "text-right",
                  accessor: "field6",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />kg
                    </span>
                  )
                },
                {
                  Header: "Length",
                  className: "text-right",
                  accessor: "field7",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />
                      <span className="float-right">m x</span>
                    </span>
                  )
                },
                {
                  Header: "Width",
                  className: "text-right",
                  accessor: "field8",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />

                      <span className="float-right">m x</span>
                    </span>
                  )
                },
                {
                  Header: "Height",
                  className: "text-right",
                  accessor: "field9",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />

                      <span className="float-right">m </span>
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
          <br />
          <div className="container">
            <h2 style={head} className="pl-2">
              Container 2: 20RF
            </h2>
            <ReactTable
              showPagination={false}
              sortable={false}
              className="-striped -highlight"
              sortable={false}
              defaultPageSize={2}
              data={this.state.makeData2}
              columns={[
                {
                  Header: `Type*`,
                  accessor: "field1",

                  Cell: row => (
                    <span>
                      <Select
                        value={this.state.makeData2[row.index].field1}
                        onChange={this.handleChange2(row)}
                        inputProps={{
                          name: "type",
                          id: "type"
                        }}
                      >
                        <MenuItem value="" name="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Non-DG">Non-DG</MenuItem>
                      </Select>
                    </span>
                  )
                },
                {
                  Header: "Name*",
                  accessor: "field2",
                  Cell: row => (
                    <span>
                      <Select
                        value={this.state.makeData2[row.index].field2}
                        onChange={this.handleChange2(row)}
                        inputProps={{
                          name: "type",
                          id: "type"
                        }}
                      >
                        <MenuItem value="" name="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="rice">Rice</MenuItem>
                      </Select>
                    </span>
                  )
                },
                {
                  Header: "Description*",
                  accessor: "field3",
                  Cell: this.renderEditable2
                },
                {
                  Header: "QTY*",
                  className: "text-right",
                  accessor: "field4",
                  Cell: row => (
                    <input
                      className="text-right float-left"
                      style={{
                        border: "none",
                        width: "100%",
                        lineHeight: "80%"
                      }}
                      type="number"
                    />
                  )
                },

                {
                  Header: "Unit*",
                  accessor: "field5",
                  Cell: row => (
                    <span>
                      <Select
                        value={this.state.makeData2[row.index].field5}
                        onChange={this.handleChange2(row)}
                        inputProps={{
                          name: "type",
                          id: "type"
                        }}
                      >
                        <MenuItem value="" name="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Non-DG">bags</MenuItem>
                      </Select>
                    </span>
                  )
                },
                {
                  Header: "Weight*",
                  className: "text-right",
                  accessor: "field6",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />kg
                    </span>
                  )
                },
                {
                  Header: "Length",
                  className: "text-right",
                  accessor: "field7",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />
                      <span className="float-right">m x</span>
                    </span>
                  )
                },
                {
                  Header: "Width",
                  className: "text-right",
                  accessor: "field8",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />
                      <span className="float-right">m x</span>
                    </span>
                  )
                },
                {
                  Header: "Height",
                  className: "text-right",
                  accessor: "field9",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />

                      <span className="float-right">m </span>
                    </span>
                  )
                },
                {
                  Header: "",
                  accessor: "",
                  Cell: this.handleRow2,
                  minWidth: 30
                }
              ]}
            />
          </div>
          <br />
          <div className="container">
            <h2 style={head} className="pl-2">
              Container 3: 40GP
            </h2>
            <ReactTable
              showPagination={false}
              sortable={false}
              className="-striped -highlight"
              sortable={false}
              defaultPageSize={2}
              data={this.state.makeData3}
              columns={[
                {
                  sortable: false,
                  Header: `Type*`,
                  accessor: "field1",

                  Cell: row => (
                    <span>
                      <Select
                        value={this.state.makeData3[row.index].field1}
                        onChange={this.handleChange3(row)}
                        inputProps={{
                          name: "type",
                          id: "type"
                        }}
                      >
                        <MenuItem value="" name="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Non-DG">Non-DG</MenuItem>
                      </Select>
                    </span>
                  )
                },
                {
                  Header: "Name*",
                  accessor: "field2",
                  Cell: row => (
                    <span>
                      <Select
                        value={this.state.makeData3[row.index].field2}
                        onChange={this.handleChange3(row)}
                        inputProps={{
                          name: "type",
                          id: "type"
                        }}
                      >
                        <MenuItem value="" name="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="rice">Rice</MenuItem>
                      </Select>
                    </span>
                  )
                },
                {
                  Header: "Description*",
                  accessor: "field3",
                  Cell: this.renderEditable3
                },
                {
                  Header: "QTY*",
                  className: "text-right",
                  accessor: "field4",
                  Cell: row => (
                    <input
                      className="text-right float-left"
                      style={{
                        border: "none",
                        width: "100%",
                        lineHeight: "80%"
                      }}
                      type="number"
                    />
                  )
                },
                {
                  Header: "Unit*",
                  accessor: "field5",
                  Cell: row => (
                    <span>
                      <Select
                        value={this.state.makeData3[row.index].field5}
                        onChange={this.handleChange3(row)}
                        inputProps={{
                          name: "type",
                          id: "type"
                        }}
                      >
                        <MenuItem value="" name="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Non-DG">bags</MenuItem>
                      </Select>
                    </span>
                  )
                },
                {
                  Header: "Weight*",
                  className: "text-right",
                  accessor: "field6",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />kg
                    </span>
                  )
                },
                {
                  Header: "Length",
                  className: "text-right",
                  accessor: "field7",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />
                      <span className="float-right">m x</span>
                    </span>
                  )
                },
                {
                  Header: "Width",
                  className: "text-right",
                  accessor: "field8",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />
                      <span className="float-right">m x</span>
                    </span>
                  )
                },
                {
                  Header: "Height",
                  className: "text-right",
                  accessor: "field9",
                  Cell: row => (
                    <span>
                      <input
                        className="text-right float-left"
                        style={{
                          border: "none",
                          width: "70%",
                          lineHeight: "80%"
                        }}
                        type="number"
                      />

                      <span className="float-right">m </span>
                    </span>
                  )
                },
                {
                  Header: "",
                  accessor: "",
                  Cell: this.handleRow3,
                  minWidth: 30
                }
              ]}
            />
          </div>
          <br />
          <div className="row align-items-center justify-content-center">
            {/* <Link to="/mainthankyou"> */}
            <Button
              variant="raised"
              style={{
                background: "#29487D",
                color: "#fff"
              }}
              component="span"
              onClick={this.changeRoute}
            >
              FINISH BOOKING
            </Button>
            {/* </Link> */}
            <br />
            <br />
            <br />
          </div>
        </Paper>
        {/* <div>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={this.state.open}
            autoHideDuration={1000}
            onClose={this.handleClose}
            SnackbarContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">{this.state.errorMessage}</span>}
            action={[
              <Button
                key="undo"
                color="secondary"
                size="small"
                onClick={this.handleClose}
              >
                UNDO
              </Button>,
              <Icon
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.handleClose}
              >
                warning
              </Icon>
            ]}
          />
        </div> */}
      </div>
    );
  }
}

export default Default;
