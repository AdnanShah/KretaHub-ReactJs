import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import jsonData from "./jsonDataSource/mainthankyou.json";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import logo from "../../../../../../public/kretahub-mock-icon.png";
import { Link } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { DateTimePicker, TimePicker, DatePicker } from "material-ui-pickers";
import { Icon, InputAdornment } from "material-ui";
import Snackbar from "material-ui/Snackbar";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 10,
    marginTop: "50%",
    width: "100%",
    left: "50%",
    marginRight: "-50%",
    transform: `translate(-50%, -50%)`,
    position: "relative"
  })
});
const label = {
  /* Other styling.. */
  textAlign: "right",
  clear: "both",
  float: "left",
  marginRight: "15px"
};
const headStyle = {
  width: "80%",
  color: "#000",
  background: "#4267B2"
};
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
const data = [
  createData("20RF", "IDR 2,200,000", "2", "	of 10", "IDR 4,400,000"),
  createData("20TK", "IDR 2,200,000", null, "of 10", null),
  createData("20GP", "IDR 2,200,000", null, "of 10", null),
  createData("40RF", "IDR 4,200,000", null, "of 5", null),
  createData("40GP", "IDR 4,200,000", "1", "of 5", "IDR 4,200,000"),
  createData("Ancillary Price", null, null, null, "IDR 100,000"),
  createData("Total Price", null, null, null, " IDR 8,700,000 ")
];

class ComposedTextField extends React.Component {
  state = {
    name: "Composed TextField",
    total: 0,
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
        field5: ""
      },
      {
        field1: "20GP",
        field2: "IDR 2,200,000",
        field6: "2200000",
        field3: "",
        field4: "of 10",
        field5: ""
      },
      {
        field1: "40RF",
        field2: "IDR 4,200,000",
        field6: "4200000",
        field3: "",
        field4: "of 5",
        field5: ""
      },
      {
        field1: "40GP",
        field2: "IDR 4,200,000",
        field6: "4200000",
        field3: "1",
        field4: "of 5",
        field5: "IDR 4,200,000"
      }
    ]
  };

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

  saveData = () => {
    const { state } = this;
    this.props.saveInvoice(state);
  };

  // handleDateChange = date => {
  //   this.setState({ date });
  // };

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

  componentWillMount() {
    document.title = "Shipper Order - KretaHub";
  }
  render() {
    const { classes } = this.props;

    return (
      <Paper>
        <div
          className="row m-0 p-5"
          style={{
            background: "#eee"
          }}
        >
          <div className="col">
            <img
              src={logo}
              style={{ width: "150px", height: "150px" }}
              className="img-thumbnail"
            />
          </div>
          <div className="col">
            <h1
              style={{
                fontFamily: "Open Sans",
                fontSize: "28px",
                color: "#3b3b3b",
                lineHeight: "26px"
              }}
            >
              {jsonData[0].mainHeading}
            </h1>
            <p>{jsonData[0].subHeading2}</p>
            <p>{jsonData[0].subHeading1}</p>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-3 ml-2" style={headStyle}>
              Order:
            </div>
            <div className="col-3" style={headStyle}>
              #001
            </div>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-3">Shipper </div>
            <div className="col-3">{jsonData[0].shipper}</div>
          </div>
          <div className="row">
            <label className="col-md-3 col-12" for="email">
              Departure :
            </label>
            <div className="col-md-3 col-12">
              <p>{jsonData[0].line1}</p>
            </div>
            <label className="col-md-3 col-12" for="email">
              Arrival :
            </label>
            <div className="col-md-3 col-12">
              <p>{jsonData[0].line5}</p>
            </div>
          </div>

          <div className="row">
            <label className="col-md-3 col-12" for="email">
              Closing time:
            </label>
            <div className="col-md-3 col-12">
              <div style={{ display: "inline-flex", width: "100%" }}>
                <div style={{width:'45%',borderRight: '1px solid #eee'}}>Mar 20, 2018</div>
                <div className="pl-1">02:00</div>

                {/* <DatePicker
                  disabled
                  style={{ borderRight: "1px solid #dee2e6" }}
                  value={this.state.selectedDate}
                  onChange={this.handleDateChange}
                  animateYearScrolling={false}
                /> */}
                {/* <TimePicker
                  disabled
                  ampm={false}
                  value={new Date(new Date().setHours(2, 0, 0, 0))}
                  onChange={this.handleDateChange}
                /> */}
              </div>
            </div>

            <label className="col-md-3 col-12" for="email">
              Trip Length :
            </label>
            <div className="col-md-3 col-12">
              <p>{jsonData[0].line6}</p>
            </div>
          </div>

          <div className="row">
            <label className="col-md-3 col-12" for="email">
              Departure Time :
            </label>
            <div className="col-md-3 col-12">
              <div style={{ display: "inline-flex", width: "95%" }}>
              <div style={{width:'45%',borderRight: '1px solid #eee'}}>Mar 20, 2018</div>
                <div className="pl-5">06:00</div>

                {/* <DatePicker
                  disabled
                  style={{ borderRight: "1px solid #dee2e6" }}
                  value={this.state.selectedDate}
                  onChange={this.handleDateChange}
                  animateYearScrolling={false}
                />
                <TimePicker
                  disabled
                  ampm={false}
                  value={new Date(new Date().setHours(6, 0, 0, 0))}
                  onChange={this.handleDateChange}
                /> */}
              </div>
            </div>
            <label className="col-md-3 col-12" for="email">
              Arrival Time :
            </label>

            <div className="col-md-3 col-12">
              <div style={{ display: "inline-flex", width: "95%" }}>
              <div style={{width:'45%',borderRight: '1px solid #eee'}}>Mar 21, 2018</div>
                <div className="pl-5 text-rght">0:00</div>

                {/* <DatePicker
                  disabled
                  style={{ borderRight: "1px solid #dee2e6" }}
                  value={this.state.arrivalDate}
                  onChange={this.handleDateChange}
                  animateYearScrolling={false}
                />
                <TimePicker
                  disabled
                  ampm={false}
                  value={new Date(new Date().setHours(0, 0, 0, 0))}
                  onChange={this.handleDateChange} */}
                {/* /> */}
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
                disabled
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
              Incoterm:
            </label>
            <div className="col-md-8 col-12">
              <p disabled className="border border-primary rounded">
                {jsonData[0].line10}
              </p>
            </div>
          </div>
        </div>

        <div className="table-responsive-material">
          <div className="col-sm-12">
            <div className="p-a">
              <ReactTable
                showPagination={false}
                sortable={false}
                data={this.state.makeData}
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
                    <h1>IDR 8,700,000</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button variant="raised" className="m-2">
          <a href="https://assignmenttablefabodiamond.firebaseapp.com/Order%20Pending.html">
            Next
          </a>
        </Button>
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

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComposedTextField);
