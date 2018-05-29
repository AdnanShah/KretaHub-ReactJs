import React from "react";
import Avatar from "material-ui/Avatar";
import { connect } from "react-redux";
import Menu, { MenuItem } from "material-ui/Menu";
import { userSignOut } from "actions/Auth";
import IntlMessages from "util/IntlMessages";
import userData from "./UserInfo.json";
class UserInfo extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="user-profile d-flex flex-row align-items-center">
        <div className="user-bar row">
          <Avatar
            style={{
              backgroundColor: "#fff"
            }}
            alt="..."
            src={require("./indotech.png")}
            className="user-avatar"
          />
          <div className="user-detail mt-3">
            <h4 className="user-name" onClick={this.handleClick}>
              {userData[0].username}
              <i className="zmdi zmdi-caret-down zmdi-hc-fw align-middle" />
            </h4>
          </div>
        </div>
        <Menu
          className="user-info"
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleRequestClose}
          PaperProps={{
            style: {
              width: 120,
              paddingTop: 0,
              paddingBottom: 0
            }
          }}
        >
          <MenuItem onClick={this.handleRequestClose}>
            <i className="zmdi zmdi-account zmdi-hc-fw mr-2" />
            <IntlMessages id="popup.profile" />
          </MenuItem>
          <MenuItem onClick={this.handleRequestClose}>
            <i className="zmdi zmdi-settings zmdi-hc-fw mr-2" />
            <IntlMessages id="popup.setting" />
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleRequestClose();
              this.props.userSignOut();
            }}
          >
            <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2" />

            <IntlMessages id="popup.logout" />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};
export default connect(mapStateToProps, { userSignOut })(UserInfo);
