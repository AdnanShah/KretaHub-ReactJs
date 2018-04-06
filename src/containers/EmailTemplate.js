import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';import Background from './images/bg.jpg';
const divStyle={
    overflowY: 'scroll', border:'1px solid red', width:'100%',
    float: 'center', height:'100%',
    position:'relative', backgroundColor:"#494c50",
    valign:"top", backgroundSize: 'cover', backgroundPosition: 'center',
    backgroundImage: `url(${Background})`
};
const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
  });
  function PaperSheet(props) {
    const { classes } = props;
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
    );
  }
  
  PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(PaperSheet);  