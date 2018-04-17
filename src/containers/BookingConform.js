import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Background from './images/bg.jpg';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import jsonData from './jsonDataSource/BookingConform.json';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import logo from './kretahub-mock-icon.png';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const divStyle = {
  overflowY: 'scroll',
  border: '1px solid red',
  width: '100%',
  float: 'center',
  height: '100%',
  position: 'relative',
  backgroundColor: "#fff",
  valign: "top",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  fontFamily: 'Sans-Sarif'

};
const styles = theme => ({
  root: theme
    .mixins
    .gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      width: '55%',
      top: '135%',
      left: '50%',
      marginRight: '-50%',
      transform: `translate(-50%, -50%)`,
      position: 'absolute'
    }),
  table: {
    minWidth: 700
  }
});
const label = {
  /* Other styling.. */
  textAlign: 'right',
  clear: 'both',
  float: 'left',
  marginRight: '15px'
}

// const data = [   createData('20RF', 'IDR 2,200,000', '2', '	of 10', 'IDR
// 4,400,000'),   createData('20TK', 'IDR 2,200,000', null, 'of 10', null),
// createData('20GP', 'IDR 2,200,000', null, 'of 10', null), createData('40RF',
// 'IDR 4,200,000', null, 'of 5', null),   createData('40GP', 'IDR 4,200,000',
// '1', 'of 5', 'IDR 4,200,000'),   createData('Ancillary Price', null, null,
// null, 'IDR 100,000'),   createData('Total Price', null, null, null, ' IDR
// 8,700,000 ') ];

class ComposedTextField extends React.Component {
  state = {
    makeData: [
      {
        field1: "20RF",
        field2: "IDR 2,200,000",
        field3: "2",
        field4: "of 10",
        field5: 0
      },
      {
        field1: "20TK",
        field2: "IDR 2,200,000",
        field3: "",
        field4: "of 10",
        field5: 0
      },
      {
        field1: "20GP",
        field2: "IDR 2,200,000",
        field3: "",
        field4: "of 10",
        field5: 0
      },
      {
        field1: "40RF",
        field2: "IDR 4,200,000",
        field3: "2",
        field4: "of 5",
        field5: 0
      },
      {
        field1: "40GP",
        field2: "IDR 4,200,000",
        field3: "1",
        field4: "of 5",
        field5: 0
      },
      {
        field1: "20GP",
        field2: "IDR 2,200,000",
        field3: "",
        field4: "of 10",
        field5: 0
      },
    ]
  };

  handleChange = event => {
    this.setState({name: event.target.value});
  };

addRow = () => {
  this.setState(prevState => ({
    makeData: [...prevState.makeData, {
      number: prevState.makeData.length + 1,
      product: '',
      description: '',
      quantity: '',
      rate: '',
      amount: 0
    }]
  }));
}

calculateTotal = () => {
  const data = this.state.makeData;
  let total = 0;

  data.forEach((d) => {
    total += d.amount;
  });

  // this.setState({ total });
  return total;
}

saveData = () => {
  const { state } = this;
  this.props.saveInvoice(state);
}

handleDateChange = (date) => {
  this.setState({ date });
}

handleDueChange = (due) => {
  this.setState({ due });
}
renderEditable=(cellInfo)=> {
  console.log('cellInfo',cellInfo.index,cellInfo.column.id);
  return (
    <div
      style={{ backgroundColor: '#fafafa' }}
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => {
        const makeData = [...this.state.makeData];
        console.log(makeData); 
        makeData[ cellInfo.index ][ cellInfo.column.id ] = e.target.innerHTML;
        makeData[ cellInfo.index ].field5 =parseInt( makeData[ cellInfo.index ].field2 * makeData[ cellInfo.index ].field3);
        this.setState({ makeData });
        debugger
       
      }}
      dangerouslySetInnerHTML={{ //eslint-disable-line
        __html: this.state.makeData[ cellInfo.index ][ cellInfo.column.id ]
      }}
    />
  );
}

//  makeData=()=> {
// 	return;}


  render() {
    const {classes} = this.props;
    const { data } = this.state;
    
    return (
      <div style={divStyle}>

        <Link to="/deliverynotice">
          <Button variant="raised" color="secondary">
            Next
          </Button>
        </Link>
        <div>
          <Paper className={classes.root} elevation={4}>
            <div
              className="row"
              style={{
              background: '#eee',
              padding: '5%'
            }}>
              <div className="col">
                <img src={logo} className="img-thumbnail"/>

              </div>
              <div className="col">
                <h1
                  style={{
                  fontFamily: 'Open Sans',
                  fontSize: '28px',
                  color: '#3b3b3b',
                  lineHeight: '26px'
                }}>
                  {jsonData[0].mainHeading}
                </h1>
                <p>{jsonData[0].line1}
                </p>
                <p>{jsonData[0].line2}
                </p>
                <p>{jsonData[0].subHeading1}
                </p>
                <h2>{jsonData[0].subHeading2}
                </h2>
              </div>
            </div>
            <br/>
            <br/>
            <div className="container">
              <div className="row">
                <label className="col-md-4 col-12" htmlFor="email">Order :</label>
                <div className="col-md-4 col-12">
                  <p className="">{jsonData[0].field1}</p>
                </div>
              </div>
              <div className="row">
                <label className="col-md-4 col-12" htmlFor="email">Order Total :</label>
                <div className="col-md-4 col-12">
                  <p className="">{jsonData[0].field2}</p>
                </div>
              </div>
              <div className="row">
                <label className="col-md-4 col-12" htmlFor="email">Minimum Down-Payment :</label>
                <div className="col-md-4 col-12">
                  <p className="">{jsonData[0].field3}</p>
                </div>
              </div>
              <h2>
                <u>Please make payment to :</u>
              </h2>
              <div className="row">
                <label className="col-md-4 col-12" htmlFor="email">Bank :</label>
                <div className="col-md-4 col-12">
                  <p className="">{jsonData[0].field4}</p>
                </div>
              </div>
              <div className="row">
                <label className="col-md-4 col-12" htmlFor="email">Account name :</label>
                <div className="col-md-4 col-12">
                  <p className="">{jsonData[0].field5}</p>
                </div>
              </div>
              <div className="row">
                <label className="col-md-4 col-12" htmlFor="email">Account number :</label>
                <div className="col-md-4 col-12">
                  <p className="">{jsonData[0].field6}</p>
                </div>
              </div>
              <div className="row">
                <label className="col-md-4 col-12" htmlFor="email">Branch :</label>
                <div className="col-md-4 col-12">
                  <p className="">{jsonData[0].field7}</p>
                </div>
              </div>
              <div className="row">
                <h2 className="col-md-12 col-12" htmlFor="email">
                  <u>Your order details are shown below htmlFor your reference :</u>
                </h2>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" htmlFor="email">Departure :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line1}</p>
                </div>
                <label className="col-md-3 col-12" htmlFor="email">Closing time :</label>
                <div className="col-md-2 col-12">
                  <input
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                    shrink: true
                  }}/>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" htmlFor="email">Departure time :</label>
                <div className="col-md-3 col-12">
                  <input
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                    shrink: true
                  }}/>

                </div>
                <label className="col-md-3 col-12" htmlFor="email">Departure name :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line4}</p>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" htmlFor="email">Arrival :</label>
                <div className="col-md-3 col-12">
                  <input
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                    shrink: true
                  }}/>
                </div>
                <label className="col-md-3 col-12" htmlFor="email">Trip Length :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line6}</p>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" htmlFor="email">Arrival time :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line7}</p>
                </div>
                <label className="col-md-3 col-12" htmlFor="email">Train Number :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line8}</p>
                </div>
              </div>

              <div className="row">
                <label className="col-md-4 col-12" htmlFor="email">Terms and Conditions:</label>
                <div className="col-md-4 col-12">
                  <textarea
                    className="border border-primary rounded"
                    rows="3"
                    style={{
                    minWidth: '100%'
                  }}>{jsonData[0].line9}</textarea>
                </div>
              </div>

              <div className="row">
                <label className="col-md-4 col-12" htmlFor="email">Incoterm :</label>
                <div className="col-md-4 col-12">
                  <p className="border border-primary rounded">{jsonData[0].line10}</p>
                </div>
              </div>

            </div>
            <div className="table-responsive-material">            
                  <div className="col-sm-12">
                    <div className="p-a">
                      <ReactTable
                        // data={this.state.makeData}
                        data={this.state.makeData}

                
                        columns={[
                        {
                          Header: '#',
                          accessor: 'number',
                          minWidth: 25
                        },                        
                        {
                          Header: 'Container type',
                          accessor: 'field1',
                          minWidth: 150
                        },
                        {
                          Header: 'Price',
                          accessor: 'field2',
                          },
                        {
                          Header: 'QTY',
                          accessor: 'field3',
                          Cell: this.renderEditable
                        }, {
                          Header: 'Capacity',
                          accessor: 'field4',
                          minWidth: 150
                        }, {
                          Header: 'Subtotal',
                          accessor: 'field5'
                        }
                      ]}
                        defaultPageSize={5}
                        className="-striped -highlight"/>
                      <br/>
                      <Button onClick={this.addRow}>Add row</Button>
                    <Button onClick={this.saveData}>Save</Button>
                  {/* <h1>Price: {this.calculateTotal()}</h1> */}
                    </div>
                  </div>
            </div>
           
            <h2>
              <u>Best regards</u>
            </h2>
            <h2>
              <u>{jsonData[0].companyName}</u>
            </h2>
          </Paper>
        </div>
      </div>

    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComposedTextField);