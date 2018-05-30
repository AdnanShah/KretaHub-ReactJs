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

import logo from "./kretahub-mock-icon.png";
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

class FreightArrived extends React.Component {
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
          <div className="row h-120 justify-content-center align-items-center d-flex flex-column ">
            <Paper>
              <div className="container-fluid">
                <div className="font-weight-bold pt-3 text-center">
                  <img src={logo} />
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
              </div>
            </Paper>

            <div className="row">
              <div className="col-md-12 col-sm-12 mx-auto">
                <ul className="social-link ">
                  <li>
                    <IconButton
                      className="icon"
                      onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userFacebookSignIn();
                      }}
                    >
                      <i className="zmdi zmdi-facebook text-white" />
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
                      <i className="zmdi zmdi-instagram text-white" />
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
                      <i className="zmdi zmdi-twitter text-white" />
                    </IconButton>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="p-1">
                <a
                  className="text-success"
                  href="https://assignmenttablefabodiamond.firebaseapp.com/ATA Notice.html"
                >
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
export default FreightArrived;
