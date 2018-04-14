import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Background from './images/bg.jpg';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import jsonData from './jsonDataSource/ATANotice.json';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import logo from './kretahub-mock-icon.png';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';

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
      top: '105%',
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
  createData('20RF', null, '2', '	of 10', null),
  createData('20TK', null, null, 'of 10', null),
  createData('20GP', null, null, 'of 10', null),
  createData('40RF', null, null, 'of 5', null),
  createData('40GP', null, '1', 'of 5', null)
];

class ComposedTextField extends React.Component {
  state = {
    name: 'Composed TextField'
  };

  handleChange = event => {
    this.setState({name: event.target.value});
  };

  render() {
    const {classes} = this.props;

    return (
      <div style={divStyle}>
        <Link to="/fullpayment">
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
                <p>{jsonData[0].subHeading3}
                </p>
              </div>
            </div>
            <br/>
            <br/>
            <div class="container">
              <div className="row">
                <label className="col-md-4 col-12" for="email">Order :</label>
                <div className="col-md-4 col-12">
                  <p className="">{jsonData[0].field1}</p>
                </div>
              </div>
              <div className="row">
                <label className="col-md-4 col-12" for="email">Shipper :</label>
                <div className="col-md-4 col-12">
                  <p className="">{jsonData[0].shipper}</p>
                </div>
              </div>
              <div className="row">
                <label className="col-md-4 col-12" for="email">Carrier :</label>
                <div className="col-md-4 col-12">
                  <p className="">{jsonData[0].carrier}</p>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" for="email">Departure :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line1}</p>
                </div>
                <label className="col-md-3 col-12" for="email">Arrival :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line5}</p>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" for="email">Estimated Departure Time:</label>
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
                <label className="col-md-3 col-12" for="email">Trip Length :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line6}</p>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" for="email">Actual Departure Time :</label>
                <div className="col-md-3 col-12">
                  <input
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2018-04-20"
                    InputLabelProps={{
                    shrink: true
                  }}/>
                </div>
                <label className="col-md-3 col-12" for="email">Estimated Arrival Time :</label>
                <div className="col-md-3 col-12">
                  <input
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2018-04-21"
                    InputLabelProps={{
                    shrink: true
                  }}/>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" for="email">Train Name:</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line4}</p>
                </div>
                <label className="col-md-3 col-12" for="email">Train Number :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line8}</p>
                </div>
              </div>

              <div className="row">
                <label className="col-md-4 col-12" for="email">Terms and Conditions:</label>
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
                <label className="col-md-4 col-12" for="email">Incoterm :</label>
                <div className="col-md-4 col-12">
                  <p className="border border-primary rounded">{jsonData[0].line10}</p>
                </div>
              </div>

            </div>

            <div className="table-responsive-material">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Container type</TableCell>
                    <TableCell numeric></TableCell>
                    <TableCell numeric>Qty</TableCell>
                    <TableCell numeric>Capacity</TableCell>
                    <TableCell numeric></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => {
                    return (
                      <TableRow key={n.id}>
                        <TableCell>{n.name}</TableCell>
                        <TableCell numeric>{n.calories}</TableCell>
                        <TableCell numeric>{n.fat}</TableCell>
                        <TableCell numeric>{n.carbs}</TableCell>
                        <TableCell numeric>{n.protein}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
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