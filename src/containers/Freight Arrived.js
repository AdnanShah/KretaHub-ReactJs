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
import point from "../../public/point.png";
import Radio from "material-ui/Radio";
const divStyle = {
  overflowY: "auto",
  fontSize: "14px",
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
            <Paper style={{ marginTop: "5%", width: "600px", height: "585px" }}>
              <div className="container-fluid">
                <div className="font-weight-bold pt-3 text-center">
                  <h1 className="page-header" style={{ fontSize: "36px" }}>
                    <b> Freight Arrived</b>
                  </h1>
                  <hr
                    style={{
                      width: "35px",
                      height: "2px",
                      backgroundColor: "#21b6ae"
                    }}
                  />
                  <img
                    className="mt-5"
                    style={{ width: "256px", height: "256px" }}
                    src={logo}
                  />
                </div>
              </div>
              <div className="mt-5">
                <div className="row">
                  <div className="col-6 mx-auto">
                    <div className="text-center text-white">
                      <Button
                        style={{
                          borderRadius: 35,
                          backgroundColor: "#21b6ae",
                          padding: "18px 36px",
                          fontSize: "18px",
                          fontWeight: "bold"
                        }}
                        // variant="contained"
                      >
                        <Link to="/signin" className="text-white">
                          KretaHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div style={{ height: "1px" }} /> */}

              <div
                style={{
                  backgroundColor: "#a1a1a1"
                }}
                className="mt-5"
              >
                <div className="row">
                  <div className="col-6 mx-auto">
                    <div
                      className="text-center text-white"
                      style={{ lineHeight: "30px" }}
                    >
                      Freight arrived at Point-of-Loading
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
            <img
              // className="mt-5"
              style={{ width: "42px", height: "22px" }}
              src={point}
            />

            <div className="row mt-5">
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
              <p className="text-light">
                Copyright &#169; 2018 KretaHub. All rights reserved.
              </p>
            </div>
            <div className="row">
              <div className="">
                <a
                  className="text-success mb-5"
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
