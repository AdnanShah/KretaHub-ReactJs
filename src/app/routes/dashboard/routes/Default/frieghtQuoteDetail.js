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
import Radio from "material-ui/Radio";
import { DateTimePicker, TimePicker, DatePicker } from "material-ui-pickers";
import { Icon, InputAdornment } from "material-ui";
import Snackbar from "material-ui/Snackbar";
import { classNames } from "classnames";

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
      radioButton: "radioButton1",
      total: 0,
      open: false,
      autoFill: false,
      makeData: [
        {
          field1: "20RF",
          field2: "IDR 2,200,000",
          field6: "2200000",
          field3: "2",
          field4: "of 10",
          field5: "IDR 4,400,000"
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
          field5: "IDR 4,200,000"
        }
      ],
      makeData2: [
        {
          field1: "20RF",
          field2: "IDR 2,200,000",
          field6: "2200000",
          field3: "",
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
          field3: "",
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
    return `IDR:${(this.state.total + 100000)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
  };

  saveData = () => {
    const { state } = this;
    this.props.saveInvoice(state);
  };

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
          if (makeData[cellInfo.index].field3 <= 20) {
            let t =
              makeData[cellInfo.index].field6 * makeData[cellInfo.index].field3;
            let tt = `IDR:${t
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
            makeData[cellInfo.index].field5 = tt;
            this.setState({ makeData, total: t });
          } else {
            this.setState({ open: true }, () => {
              console.log("this.state", this.state);
            });
          }
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.makeData[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };
  renderEditable2 = cellInfo => {
    console.log("cellInfo", cellInfo.index, cellInfo.column.id);
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const makeData = [...this.state.makeData2];
          console.log(makeData);
          makeData[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          if (makeData[cellInfo.index].field3 <= 20) {
            let t =
              makeData[cellInfo.index].field6 * makeData[cellInfo.index].field3;
            let tt = `IDR:${t
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
            makeData[cellInfo.index].field5 = tt;
            this.setState({ makeData2: makeData, total: t });
          } else {
            this.setState({ open: true }, () => {
              console.log("this.state", this.state);
            });
          }
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.makeData[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };
  componentWillMount() {
    document.title = "Freight Quote Details - KretaHub";
    this.calculateTotal();
  }
  setRadioButton = event => {
    this.setState({ radioButton: event.target.value });
  };
  handleAutofill = () => {
    this.setState({ autoFill: !this.state.autoFill });
  };
  render() {
    const { anchorEl, menuState, currentDate } = this.state;
    const { classes } = this.props;
    console.log(this.state);
    return (
      <Paper>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className=" row jr-card-header pt-3 px-2">
                <h2 className="col" >
                  <IntlMessages id="Freight Quote Details" />
                  </h2>
                  <Button
                  className="float-right col-1"
                  variant="raised"
                  style={{
                    background: "#29487D",
                    color: "#fff"
                  }}
                  component="span"
                  onClick={this.handleAutofill}
                >
                  Autofill
                </Button>
              
                
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
                    Closing time:
                  </label>
                  <div className="col-md-3 col-12">
                    <div style={{ display: "inline-flex", width: "85%" }}>
                      <DatePicker
                        format="MMMM DD, YYYY"
                        disabled
                        style={{ borderRight: "1px solid #3f51b5" }}
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        animateYearScrolling={false}
                      />
                      <TimePicker
                        disabled
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
                    <div style={{ display: "inline-flex", width: "85%" }}>
                      <DatePicker
                        disabled
                        format="MMMM DD, YYYY"
                        style={{ borderRight: "1px solid #3f51b5" }}
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        animateYearScrolling={false}
                      />
                      <TimePicker
                        disabled
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
                    <div style={{ display: "inline-flex", width: "85%" }}>
                      <DatePicker
                        disabled
                        format="MMMM DD, YYYY"
                        style={{ borderRight: "1px solid #3f51b5" }}
                        value={this.state.arrivalDate}
                        onChange={this.handleDateChange}
                        animateYearScrolling={false}
                      />
                      <TimePicker
                        disabled
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
                    Terms and Conditions:
                  </label>
                  <div className="col-md-8 col-12">
                    <textarea
                      className="border border-primary rounded"
                      rows="3"
                      style={{
                        minWidth: "100%"
                      }}
                    />
                  </div>
                </div>

                <h2>Book This Schedule</h2>
                <div className="row">
                  <div className="col-md-3 mt-3" style={{ marginRight: "-2%" }}>
                    <label for="Student">Incoterm:</label>
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
                      Station-to-Station
                    </label>
                    <label className="" for="lcl">
                      <Radio
                        checked={this.state.radioButton === "radioButton2"}
                        onChange={this.setRadioButton}
                        aria-label="A"
                        value="radioButton2"
                        name="radioButton"
                      />
                      Door-to-Station
                    </label>
                    <label className="" for="cargo">
                      <Radio
                        checked={this.state.radioButton === "radioButton3"}
                        onChange={this.setRadioButton}
                        aria-label="A"
                        value="radioButton3"
                        name="radioButton"
                      />
                      Door-to-Door
                    </label>
                  </div>
                </div>
              </div>

              <div className="table-responsive-material">
                <div className="col-sm-12">
                  <div className="p-a">
                    <ReactTable
                      showPagination={false}
                      sortable={false}
                      data={
                        this.state.autoFill === false
                          ? this.state.makeData2
                          : this.state.makeData
                      }
                      columns={[
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
                          Cell:
                            this.state.autoFill === false
                              ? this.renderEditable2
                              : this.renderEditable,
                          className: "text-right"
                        },
                        {
                          Header: "Capacity",
                          accessor: "field4",
                          minWidth: 150
                        },
                        {
                          Header: "Subtotal",
                          accessor: "field5",
                          className: "text-right"
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
                          <h1>
                            {this.state.autoFill === true &&
                            this.state.total == 0
                              ? "IDR 8,700,000"
                              : this.calculateTotal()}
                          </h1>
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
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={
            <span id="message-id">Qty cannot exceed capacity of 20.</span>
          }
          action={[
            <Button
              key="undo"
              color="secondary"
              size="small"
              onClick={() => {
                this.setState({ open: false });
              }}
            >
              Close
            </Button>
          ]}
        />
      </Paper>
    );
  }
}

export default Freightdetail;
