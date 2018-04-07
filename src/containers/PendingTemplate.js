import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Background from './images/bg.jpg';
import Grid from 'material-ui/Grid';
// import jsonData from './dataSource/PendingTemplate.json';

const divStyle = {
  overflowY: 'scroll',
  border: '1px solid red',
  width: '100%',
  float: 'center',
  height: '100%',
  position: 'relative',
  backgroundColor: "#494c50",
  valign: "top",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${Background})`,
  position: 'relative'
};
const styles = theme => ({
  root: theme
    .mixins
    .gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      width: '45%',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: `translate(-50%, -50%)`,
      position: 'absolute'
    })
});
const label = {
  /* Other styling.. */
  textAlign: 'right',
  clear: 'both',
  float: 'left',
  marginRight: '15px'
}
function PaperSheet(props) {
  const {classes} = props;
  return (
    <div style={divStyle}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="text-center">
        <p style={{
          color: 'white'
        }} className="text-center">Your Shipper Signup Request is Being Processed</p>
        <Paper className={classes.root} elevation={4}>
          <h1 className="h1 display-1 text-center">
            Thank you for signing up as a shipper on KretaHub.
          </h1>
          <br/>
          <Typography component="p" style={{
            fontWeight: 'bold'
          }}>
            Shipper Information
          </Typography>
          <div class="form-group">
            <label for="Student">Name:
            </label>
            <label style={{
              marginLeft: '20px'
            }} name="Student">Umer Saleem</label>
            <br/>
            <label for="Student">Email:
            </label>
            <label style={{
              marginLeft: '20px'
            }} name="Student">UmerSaleem@gmail.com</label>
          </div>
          {/* <div class="form-group">
            <label for="Student">Email:  </label>
            <label style={{marginLeft:'20px'}} name="Student">UmerSaleem@gmail.com</label>
          </div> */}

          <Typography component="label">
            We will notify you by email when your request has been approved.
          </Typography>
          <br/>
          <Typography component="p">
            In the mean time, you can follow us on:
          </Typography>
          <br/>
          <footer
            className="text-center"
            style={{
            backgroundColor: '#F3F3F3',
            alignContent: 'center'
          }}>
            <a
              style={{
              marginLeft: '5px',
              color: '#20B0A8'
            }}
              href='www.raqamisolutions.com'>Facebook</a>
            <a
              style={{
              marginLeft: '20px',
              color: '#20B0A8'
            }}href='www.raqamisolutions.com'>Instagram</a>
            <a
              style={{
              marginLeft: '20px',
              color: '#20B0A8'
            }}
              href='www.raqamisolutions.com'>Twitter</a>
          </footer>
        </Paper>
      </div>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);