import React from "react";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";
import Row from "./rows";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

const head = {
  backgroundColor: "#3f51b5",
  color: "#fff"
};

class Default extends React.Component {
  render() {
    // console.log("this.state", this.state);
    return (
      <div className="container-fluid">
        <br />
        <Paper>
          <h1 className="text-center p-3">Packing List</h1>
          <div className="container">
            <h2 style={head} className="pl-2">
              Container 1: 20RF
            </h2>
            {/* <Button onClick={this.autofillTable1}>Autofill</Button> */}
            <Row />
          </div>
          <br />
          <div className="container">
            <h2 style={head} className="pl-2">
              Container 2: 20RF
            </h2>
            {/* <Button onClick={this.autofillTable2}>Autofill</Button> */}
            <Row />
          </div>
          <br />
          <div className="container">
            <h2 style={head} className="pl-2">
              Container 3: 40GP
            </h2>
            {/* <Button onClick={this.autofillTable3}>Autofill</Button> */}
            <Row />
          </div>
          <br />
          <div className="row align-items-center justify-content-center">
            {/* <Link to="/mainthankyou"> */}
            <Button
              variant="raised"
              style={{
                background: "#29487D",
                color: "#fff"
              }}
              component="span"
              onClick={this.changeRoute}
            >
              FINISH BOOKING
            </Button>
            {/* </Link> */}
            <br />
            <br />
            <br />
          </div>
        </Paper>
        {/* <div>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={this.state.open}
            autoHideDuration={1000}
            onClose={this.handleClose}
            SnackbarContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">{this.state.errorMessage}</span>}
            action={[
              <Button
                key="undo"
                color="secondary"
                size="small"
                onClick={this.handleClose}
              >
                UNDO
              </Button>,
              <Icon
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.handleClose}
              >
                warning
              </Icon>
            ]}
          />
        </div> */}
      </div>
    );
  }
}

export default Default;
