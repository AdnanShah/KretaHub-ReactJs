import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import Button from "material-ui/Button";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import IntlMessages from "util/IntlMessages";
import { CircularProgress } from "material-ui/Progress";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import img from "./kretahub-mock-icon.png";
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from "actions/Auth";
import Background from "./images/bg.jpg";
import {
  TextValidator,
  ValidatorForm,
  SelectValidator,
  CheckboxValidatorElement
} from "react-material-ui-form-validator";

const divStyle = {
  width: "80%",
  height: "100%",
  position: "relative"
};

const divCenter = {
  position: "absolute",
  margin: "auto",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  width: "100px",
  height: "100px"
};
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push("/");
    }
  }
  handleEmail = event => this.setState({ email: event.target.value });
  handlePassword = event => this.setState({ password: event.target.value });

  handleOnSubmit = e => {
    this.setState({ submitted: false });
    this.props.history.push(`/app/dashboard/default`);
  };

  render() {
    const { email, password } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div className="container text-center justify-content-center align-self-center">
        <div className="col my-auto d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
          <div className="app-login-main-content">
            <div className="app-logo-content d-flex align-items-center justify-content-center">
              <Link className="logo-lg" to="/" title="Jambo">
                <CardMedia
                  style={{
                    border: "0",
                    width: "187px",
                    height: "195px",
                    backgroundColor: "#3f51b5"
                  }}
                  image={img}
                  title="Kretahub"
                />
                {/* <img src="http://via.placeholder.com/177x65" alt="jambo" title="jambo"/> */}
              </Link>
            </div>

            <div className="app-login-content">
              <div className="app-login-header mb-4">
                <h1>Shipper Login</h1>
              </div>

              <div className="app-login-form">
                <ValidatorForm onSubmit={this.handleOnSubmit} ref="form">
                  <form>
                    <fieldset>
                      <TextValidator
                        name="email"
                        validators={["required", "isEmail"]}
                        errorMessages={[
                          "this field is required",
                          "Invalid Email"
                        ]}
                        label="Email"
                        fullWidth
                        onChange={this.handleEmail}
                        value={this.state.email}
                        margin="normal"
                      />
                      <TextValidator
                        name="name"
                        validators={["required"]}
                        errorMessages={["this field is required"]}
                        type="password"
                        label={<IntlMessages id="appModule.password" />}
                        fullWidth
                        onChange={this.handlePassword}
                        value={this.state.password}
                        margin="normal"
                      />
                      <br />
                      <div className="row">
                        <div className="col">
                          <div className="float-left">
                            <Link to="/signup">Forgot password</Link>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 d-flex align-items-center justify-content-between">
                        <Button
                          onClick={() => {
                            this.props.showAuthLoader();
                            this.props.userSignIn({ email, password });
                          }}
                          variant="raised"
                          color="primary"
                          type="submit"
                        >
                          Log In
                        </Button>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="float-left">
                            <p>No account yet?</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="float-right">
                            <Link to="/signup">Sign Up</Link>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </ValidatorForm>
              </div>
            </div>
          </div>
          {loader && (
            <div className="loader-view">
              <CircularProgress />
            </div>
          )}
          {showMessage && NotificationManager.error(alertMessage)}
          <NotificationContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser };
};

export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(SignIn);
