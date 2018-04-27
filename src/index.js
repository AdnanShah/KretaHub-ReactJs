import React from "react";
import ReactDOM from "react-dom";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";

const rootEl = document.getElementById("app-site");

// Create a reusable render method that we can call more than once
let render = () => {
  // Dynamically import our main App component, and render it
  const MainApp = require("./MainApp").default;
  ReactDOM.render(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MainApp />
    </MuiPickersUtilsProvider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./MainApp", () => {
    const NextApp = require("./MainApp").default;
    render(<NextApp />, rootEl);
  });
}

render();
