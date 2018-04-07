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
      top: '80%',
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
  createData('20RF', 'IDR 2,200,000', '2', '	of 10', 'IDR 4,400,000'),
  createData('20TK', 'IDR 2,200,000', null, 'of 10', null),
  createData('20GP', 'IDR 2,200,000', null, 'of 10', null),
  createData('40RF', 'IDR 4,200,000', null, 'of 5', null),
  createData('40GP', 'IDR 4,200,000', '1', 'of 5', 'IDR 4,200,000'),
  createData('Ancillary Price', null, null, null, 'IDR 100,000'),
  createData('Total Price', null, null, null, ' IDR 8,700,000 ')
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
            <div class="container">
              <div className="row">
                <label className="col-md-4 col-12" for="email">Shipper :</label>
                <div className="col-md-4 col-12">
                  <p className="">{jsonData[0].mainEmail}</p>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" for="email">Departure :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line1}</p>
                </div>
                <label className="col-md-3 col-12" for="email">Closing time :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line2}</p>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" for="email">Departure time :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line3}</p>
                </div>
                <label className="col-md-3 col-12" for="email">Departure name :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line4}</p>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" for="email">Arrival :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line5}</p>
                </div>
                <label className="col-md-3 col-12" for="email">Trip Length :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line6}</p>
                </div>
              </div>

              <div className="row">
                <label className="col-md-3 col-12" for="email">Arrival time :</label>
                <div className="col-md-3 col-12">
                  <p className="">{jsonData[0].line7}</p>
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
                    <TableCell numeric>Price</TableCell>
                    <TableCell numeric>Qty</TableCell>
                    <TableCell numeric>Capacity</TableCell>
                    <TableCell numeric>Subtotal</TableCell>
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