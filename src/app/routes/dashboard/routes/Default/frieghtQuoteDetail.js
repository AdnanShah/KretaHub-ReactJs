import React, { Fragment } from "react";
import IconButton from "material-ui/IconButton";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import IntlMessages from "util/IntlMessages";
import jsonData from "./jsonDataSource/ATANotice.json";
import { Link } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";

import { DateTimePicker, TimePicker, DatePicker } from "material-ui-pickers";
import { Icon, InputAdornment } from "material-ui";

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

const data = [
  createData("20RF", "IDR 2,200,000", "2", "	of 10", "IDR 4,400,000"),
  createData("20TK", "IDR 2,200,000", null, "of 10", null),
  createData("20GP", "IDR 2,200,000", null, "of 10", null),
  createData("40RF", "IDR 4,200,000", null, "of 5", null),
  createData("40GP", "IDR 4,200,000", "1", "of 5", "IDR 4,200,000"),
  createData("Ancillary Price", null, null, null, "IDR 100,000"),
  createData("Total Price", null, null, null, " IDR 8,700,000 ")
];

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein
  };
}
class Freightdetail extends React.Component {
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

  constructor() {
    super();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    this.state = {
      anchorEl: undefined,
      selectedDate: new Date(),
      arrivalDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      clearedDate: null,

      makeData: [
        {
          field1: "20RF",
          field2: "IDR 2,200,000",
          field6: "2200000",
          field3: "2",
          field4: "of 10",
          field5: 0
        },
        {
          field1: "20TK",
          field2: "IDR 2,200,000",
          field6: "2200000",
          field3: "",
          field4: "of 10",
          field5: 0
        },
        {
          field1: "20GP",
          field2: "IDR 2,200,000",
          field6: "2200000",
          field3: "",
          field4: "of 10",
          field5: 0
        },
        {
          field1: "40RF",
          field2: "IDR 4,200,000",
          field6: "4200000",
          field3: "",
          field4: "of 5",
          field5: 0
        },
        {
          field1: "40GP",
          field2: "IDR 4,200,000",
          field6: "4200000",
          field3: "1",
          field4: "of 5",
          field5: 0
        }
      ]
    };
  }
  handleDateChange = date => {
    this.setState({ selectedDate: date }, this.untilDate);
  };

  untilDate = () => {
    let tt = this.state.selectedDate;
    let date = new Date(tt);
    let newdate = new Date(date);
    newdate.setDate(newdate.getDate() + 1);
    let dd = newdate.getDate();
    let mm = newdate.getMonth() + 1;
    let y = newdate.getFullYear();
    let someFormattedDate = mm + "/" + dd + "/" + y;
    this.setState({ arrivalDate: someFormattedDate });
  };

  handleClearedDateChange = date => {
    this.setState({ clearedDate: date });
  };

  onChange = date => {
    console.log(date);
    this.setState({ date });
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  addRow = () => {
    this.setState(prevState => ({
      makeData: [
        ...prevState.makeData,
        {
          number: prevState.makeData.length + 1,
          product: "",
          description: "",
          quantity: "",
          rate: "",
          amount: 0
        }
      ]
    }));
  };

  calculateTotal = () => {
    const data = this.state.makeData;
    let total = 0;
    data.forEach(d => {
      total += d.field5;
    });
    return total + 100000;
  };

  saveData = () => {
    const { state } = this;
    this.props.saveInvoice(state);
  };

  //   handleDateChange = date => {
  //     this.setState({ date });
  //   };

  handleDueChange = due => {
    this.setState({ due });
  };
  renderEditable = cellInfo => {
    console.log("cellInfo", cellInfo.index, cellInfo.column.id);
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const makeData = [...this.state.makeData];
          console.log(makeData);
          makeData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          makeData[cellInfo.index].field5 =
            makeData[cellInfo.index].field6 * makeData[cellInfo.index].field3;
          this.setState({ makeData });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.makeData[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  render() {
    const { anchorEl, menuState, currentDate } = this.state;
    const { classes } = this.props;
    console.log(this.state.currentDate);
    return (
      <Paper>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="jr-card-header pt-3 px-4">
                <h2>
                  <IntlMessages id="Freight Quote Details" />
                </h2>
              </div>
              <div className="container">
                <div className="row">
                  <label className="col-md-3 col-12" for="email">
                    Departure :
                  </label>
                  <div className="col-md-3 col-12">
                    <p className="">{jsonData[0].line1}</p>
                  </div>
                  <label className="col-md-3 col-12" for="email">
                    Arrival :
                  </label>
                  <div className="col-md-3 col-12">
                    <p className="">{jsonData[0].line5}</p>
                  </div>
                </div>

                <div className="row">
                  <label className="col-md-3 col-12" for="email">
                    Closing time:<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-3 col-12">
                    <div style={{ display: "inline-flex", width: "75%" }}>
                      <DatePicker
                        style={{ borderRight: "1px solid #3f51b5" }}
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        animateYearScrolling={false}
                      />
                      <TimePicker
                        ampm={false}
                        value={new Date(new Date().setHours(2, 0, 0, 0))}
                        onChange={this.handleDateChange}
                      />
                    </div>
                  </div>

                  <label className="col-md-3 col-12" for="email">
                    Trip Length :
                  </label>
                  <div className="col-md-3 col-12">
                    <p className="">{jsonData[0].line6}</p>
                  </div>
                </div>

                <div className="row">
                  <label className="col-md-3 col-12" for="email">
                    Departure Time :
                  </label>
                  <div className="col-md-3 col-12">
                    <div style={{ display: "inline-flex", width: "75%" }}>
                      <DatePicker
                        style={{ borderRight: "1px solid #3f51b5" }}
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        animateYearScrolling={false}
                      />
                      <TimePicker
                        ampm={false}
                        value={new Date(new Date().setHours(6, 0, 0, 0))}
                        onChange={this.handleDateChange}
                      />
                    </div>
                  </div>
                  <label className="col-md-3 col-12" for="email">
                    Arrival Time :
                  </label>

                  <div className="col-md-3 col-12">
                    <div style={{ display: "inline-flex", width: "75%" }}>
                      <DatePicker
                        style={{ borderRight: "1px solid #3f51b5" }}
                        value={this.state.arrivalDate}
                        onChange={this.handleDateChange}
                        animateYearScrolling={false}
                      />
                      <TimePicker
                        ampm={false}
                        value={new Date(new Date().setHours(0, 0, 0, 0))}
                        onChange={this.handleDateChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <label className="col-md-3 col-12" for="email">
                    Train Name:
                  </label>
                  <div className="col-md-3 col-12">
                    <p className="">{jsonData[0].line4}</p>
                  </div>
                  <label className="col-md-3 col-12" for="email">
                    Train Number :
                  </label>
                  <div className="col-md-3 col-12">
                    <p className="">{jsonData[0].line8}</p>
                  </div>
                </div>

                <div className="row">
                  <label className="col-md-3 col-12" for="email">
                    Terms and Conditions:<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-8 col-12">
                    <textarea
                      className="border border-primary rounded"
                      rows="3"
                      style={{
                        minWidth: "100%"
                      }}
                    >
                      {jsonData[0].line9}
                    </textarea>
                  </div>
                </div>

                <div className="row">
                  <label className="col-md-3 col-12" for="email">
                    Incoterm:<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-8 col-12">
                    <p className="border border-primary rounded">
                      {jsonData[0].line10}
                    </p>
                  </div>
                </div>
              </div>

              <div className="table-responsive-material">
                <div className="col-sm-12">
                  <div className="p-a">
                    <ReactTable
                      data={this.state.makeData}
                      columns={[
                        {
                          Header: "#",
                          accessor: "number",
                          minWidth: 25
                        },
                        {
                          Header: "Container type",
                          accessor: "field1",
                          minWidth: 150
                        },
                        {
                          Header: "Price",
                          accessor: "field2"
                        },
                        {
                          Header: "QTY",
                          accessor: "field3",
                          Cell: this.renderEditable
                        },
                        {
                          Header: "Capacity",
                          accessor: "field4",
                          minWidth: 150
                        },
                        {
                          Header: "Subtotal",
                          accessor: "field5"
                        }
                      ]}
                      defaultPageSize={5}
                      className="-striped -highlight"
                    />
                    <br />
                    <div className="row">
                      <div className="col-6">
                        <h3>Ancillary Price:</h3>
                      </div>
                      <div className="col-6 float-right">
                        <div className="float-right">
                          <h3>IDR 100,000</h3>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h1>Total:</h1>
                      </div>
                      <div className="col-6 float-right">
                        <div className="float-right">
                          <h1>{this.calculateTotal()}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row align-items-center justify-content-center">
                <Link to="/app/dashboard/packinglist">
                  <Button
                    variant="raised"
                    style={{
                      background: "#29487D",
                      color: "#fff"
                    }}
                    component="span"
                  >
                    BOOK NOW
                  </Button>
                </Link>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default Freightdetail;
