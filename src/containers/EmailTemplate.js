import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Background from './images/bg.jpg';
import Grid from 'material-ui/Grid';
import jsonData from './jsonDataSource/EmailTemplate.json';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import IntlMessages from 'util/IntlMessages';
import IconButton from 'material-ui/IconButton';

const divStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: "#494c50",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${Background})`,
  position: 'relative'
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '10%',
    paddingBottom: '10%',
    marginTop: theme.spacing.unit * 2,
    width: '50%',
    top: '50%',
    left: '45%',
    marginRight: '-50%',
    transform: `translate(-50%, -50%)`,
    position: 'absolute'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },


});

const label = {
  textAlign: 'right',
}

function PaperSheet(props) {
  const { classes } = props;
  return (

    <Grid container>
      <Grid item xs={12} sm={12}>
        <div style={divStyle}>
          <div className="container-fluid h-100 align-middle">
            <div className="row h-100 justify-content-center align-items-center">
              <form className={classes.root}>
                <div >
                  <div>
                    <div className={classes.row}>
                      <Avatar
                        alt="Adelle Charles"
                        src="kretahub-mock-icon.png"
                        className={classes.bigAvatar}
                      />
                    </div>
                    <Paper className="col-sm p-5 m-5">
                      <h1 className="col h1 font-weight-bold display-1 text-center">
                        {jsonData[0].heading}
                      </h1>

                      <h2 className="text-center">{jsonData[0].subHeading}
                      </h2>
                      <br />
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
                        }} name="Student">{jsonData[0].userName}</label>
                        <br />
                        <label for="Student">Email:
            </label>
                        <label style={{
                          marginLeft: '20px'
                        }} name="Student">{jsonData[0].userEmail}</label>
                      </div>

                      <Typography component="label">
                        {jsonData[0].conformNote}
                      </Typography>
                      <br />
                      <Typography component="p">
                        {jsonData[0].followUs}
                      </Typography>
                      <br />
                    </Paper>
                  </div>

                </div>

              </form>


            </div>

          </div>

          <div className="container-fluid" style={{ position: 'relative', bottom: '10%' }}>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 offset-5">
                <div className="text-center">
                  <div className="app-social-block my-1 my-sm-3">
                    <ul className="social-link ">
                      <li>
                        <IconButton className="icon "
                          onClick={() => {
                            this.props.showAuthLoader();
                            this.props.userFacebookSignIn();
                          }}>
                          <i className="zmdi zmdi-facebook" />
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                          onClick={() => {
                            this.props.showAuthLoader();
                            this.props.userTwitterSignIn();
                          }}>
                          <i className="zmdi zmdi-twitter" />
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                          onClick={() => {
                            this.props.showAuthLoader();
                            this.props.userGoogleSignIn();

                          }}>
                          <i className="zmdi zmdi-google-plus" />
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                          onClick={() => {
                            this.props.showAuthLoader();
                            this.props.userGithubSignIn();
                          }}>
                          <i className="zmdi zmdi-github" />
                        </IconButton>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="align-bottom" style={{
            position: 'absolute', bottom: 0
          }}>
            <Link to="/pending" >
              <Button variant="raised" color="default">
                Next
        </Button>
            </Link>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);