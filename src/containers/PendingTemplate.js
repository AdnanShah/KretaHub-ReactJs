import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Background from './images/bg.jpg';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import jsonData from './jsonDataSource/PendingTemplate.json';

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

      <div className="text-center">
        <h2
          style={{
          color: 'white',
          fontFamily: 'Sans-Sarif'
        }}
          className="text-center">
          <strong>
            {jsonData[0].mainHeading}
          </strong>
        </h2>
        <span
          style={{
          color: 'red',
          margin: '3%',
          paddingBottom: '30%'
        }}
          className="text-center">-</span>
        <span
          style={{
          color: 'red',
          margin: '3%',
          paddingBottom: '30%'
        }}
          className="text-center">-</span>
        <span
          style={{
          color: 'red',
          margin: '3%',
          paddingBottom: '30%'
        }}
          className="text-center">-</span>
        <br/>
        <br/>
        <br/>
        <br/>
        <Paper className={classes.root} elevation={4}>
          <h1 className="h1 display-1 text-center">
            {jsonData[0].mainHeading}
          </h1>
          <br/>
          <div class="form-group">
            <label for="Student">To:
            </label>
            <label style={{
              marginLeft: '20px'
            }} name="Student">{jsonData[0].shipperName}</label>
            <br/>
          </div>
          {/* <div class="form-group">
            <label for="Student">Email:  </label>
            <label style={{marginLeft:'20px'}} name="Student">UmerSaleem@gmail.com</label>
          </div> */}

          <Typography component="label">
            {jsonData[0].subHeading}
          </Typography>
          <br/>
          <Typography component="p">
            {jsonData[0].subHeading2}
          </Typography>
          <br/>
          <br/>
          <Typography component="p">
            {jsonData[0].followUs}
          </Typography>
          <br/>
          <br/>
          <footer
            className="text-center"
            style={{
            backgroundColor: '#fff',
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
          <div class="form-group">
            <label for="Student">Regards:
            </label>
            <label style={{
              marginLeft: '20px'
            }} name="Student">{jsonData[0].companyName}</label>
            <br/>
          </div>

        </Paper>
      </div>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);