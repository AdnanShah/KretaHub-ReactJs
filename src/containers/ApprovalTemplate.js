import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Background from './images/bg.jpg';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import jsonData from './jsonDataSource/ApprovalTemplate.json';
import {Link} from 'react-router-dom';

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

      <Link to="/signin">
        <Button variant="raised" color="secondary">
          Next
        </Button>
      </Link>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="text-center">
        <Paper className={classes.root} elevation={4}>
          <h1>
            <strong>
              {jsonData[0].mainHeading}
            </strong>
          </h1>
          <br/>
          <div className="float-left">
            <label for="Student">To:
            </label>
            <label style={{
              marginLeft: '20px'
            }} name="Student">{jsonData[0].shipperName}</label>
            <br/>
          </div>
          <br/>
          <Typography component="label">
            {jsonData[0].heading}
          </Typography>
          <br/>
          <Typography component="p">
            {jsonData[0].subHeading01}
            <a href="#">{jsonData[0].shipperWebsite}</a>
            {jsonData[0].subHeading02}
          </Typography>
          <br/>
          <br/>
          <Button variant="raised" size="large" color="primary">
            Login to KretaHub
          </Button>
          <br/>
          <br/>
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