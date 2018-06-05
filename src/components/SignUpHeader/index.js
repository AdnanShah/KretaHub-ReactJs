import React from "react";
import { connect } from "react-redux";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import { Link } from "react-router-dom";
import { switchLanguage } from "actions/Setting";
import LanguageSwitcher from "components/LanguageSwitcher/index";
import logo from "./kretahub-mock-icon.png";
import { userSignOut } from "actions/Auth";

class Header extends React.Component {
  render() {
    const { onToggleCollapsedNav, drawerType, locale } = this.props;

    return (
      <AppBar className="app-main-header mb-5">
        <Toolbar className="app-toolbar" disableGutters={false}>
          
          <Link className="app-logo" to="/">
            <img src={logo} alt="Jambo" title="Jambo" />
          </Link>

          <h1
            className="mx-auto"
            style={{
              color: "#fff"
            }}
          >
            Shipper Signup
          </h1>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};

export default connect(mapStateToProps, { switchLanguage, userSignOut })(
  Header
);
