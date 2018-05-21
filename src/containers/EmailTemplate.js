import React from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import IntlMessages from "util/IntlMessages";
import MenuItem from "material-ui/Menu/MenuItem";
import DateFormatInput from "material-ui-next-datepicker";
import { Link } from "react-router-dom";
import { DatePicker } from "material-ui-pickers";
import IconButton from "material-ui/IconButton";
import Background from "./images/bg.jpg";

import Radio from "material-ui/Radio";
const divStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#494c50",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${Background})`,
  position: "relative"
};

class EmailTemplate extends React.Component {
  nextRoute = () => {
    this.props.history.push({
      pathname: "default",
      state: {
        key: this.state
      }
    });
  };

  componentWillMount() {
    document.title = "Shipper Dashboard - KretaHub";
  }
  render() {
    return (
      <div style={divStyle}>
        <div className="container-fluid h-100 align-middle">
          <div className="row h-100 justify-content-center align-items-center flex-column ">
            <Paper>
              <div className="container-fluid">
                <div className="font-weight-bold pt-3 text-center">
                  <h1>Your Shipper Signup Request is Being Processed</h1>
                </div>
                <div className="jr-card-header pt-3">
                  <h2>Thank you for signing up as a shipper on KretaHub.</h2>
                </div>
                <div className="jr-card-header pt-3">
                  <h3 className="font-weight-bold">Shipper Information</h3>
                  <div className="row">
                    <div className="col-sm-4">Name:</div>
                    <div className="col-sm-8">PT. Indotech</div>
                    <div className="col-sm-4">Email</div>
                    <div className="col-sm-8">indotech@gmail.com</div>
                  </div>
                  <p>
                    We will notify you by email when your request has been
                    approved.
                  </p>
                </div>
              </div>

              <div style={{ backgroundColor: "#a1a1a1" }} className="mt-2">
                <div className="row">
                  <div className="col-6 mx-auto">
                    <div className="text-center text-white">
                      In the mean time, you can follow us on:
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 mx-auto">
                    <div className="text-center">
                      <div className="app-social-block">
                        <ul className="social-link p-1 ">
                          <li>
                            <IconButton
                              className="icon "
                              onClick={() => {
                                this.props.showAuthLoader();
                                this.props.userFacebookSignIn();
                              }}
                            >
                              <i className="zmdi zmdi-facebook" />
                            </IconButton>
                          </li>
                          <li>
                            <IconButton
                              className="icon "
                              onClick={() => {
                                this.props.showAuthLoader();
                                this.props.userInstagramSignIn();
                              }}
                            >
                              <i className="zmdi zmdi-instagram" />
                            </IconButton>
                          </li>

                          <li>
                            <IconButton
                              className="icon"
                              onClick={() => {
                                this.props.showAuthLoader();
                                this.props.userTwitterSignIn();
                              }}
                            >
                              <i className="zmdi zmdi-twitter" />
                            </IconButton>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
            <div className="row">
              <div className="col mt-5">
                  <a className="text-success" href="https://assignmenttablefabodiamond.firebaseapp.com/Pending.html">
                    Next
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EmailTemplate;
