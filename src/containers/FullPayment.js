import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Background from './images/bg.jpg';
import Grid from 'material-ui/Grid';
import jsonData from './jsonDataSource/FullPayment.json';

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
const h1 = {
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
        <Paper className={classes.root} elevation={4}>
          <strong>
            <h1 className="h1 display-1 text-center">{jsonData[0].subHeading}
            </h1>
          </strong>
          <br/>
          <div class="form-group">
            <h3 style={{
              marginLeft: '20px'
            }} name="Student">{jsonData[0].subHeading1}</h3>
            <h3 style={{
              marginLeft: '20px'
            }} name="Student">{jsonData[0].subHeading2}</h3>
          </div>
          <br/>
        </Paper>
      </div>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);