import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import Typography from 'material-ui/Typography';
import Background from './images/bg.jpg';
import Grid from 'material-ui/Grid';
import jsonData from './jsonDataSource/DownPayment.json';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
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
  const { classes } = props;
  return (
    <div style={divStyle}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="">
        <h2 style={{
          color: 'white'
        }} className="text-center">{jsonData[0].heading}</h2>
        <Paper className={classes.root} elevation={4}>
          <h1 className="h1 display-1">{jsonData[0].subHeading}
          </h1>
          <br />
          <Typography component="label">
            {jsonData[0].conformNote}
          </Typography>
          <br />
        </Paper>
      </div>
      <div className="align-bottom" style={{
        position: 'absolute', bottom: 0
      }}>
        <Link to="/bookingconform" >
          <Button variant="raised" color="default">
            Next
        </Button>
        </Link>
      </div>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);