import React from "react";
import { connect } from "react-redux";
import AppBar from "material-ui/AppBar";
import { Link } from "react-router-dom";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "constants/ActionTypes";
import SearchBox from "components/SearchBox";
import MailNotification from "../MailNotification/index";
import AppNotification from "../AppNotification/index";
import CardHeader from "components/dashboard/Common/CardHeader/index";
import { switchLanguage } from "actions/Setting";
import IntlMessages from "util/IntlMessages";
import LanguageSwitcher from "components/LanguageSwitcher/index";
import logo from "./kretahub-mock-icon.png";
import { userSignOut } from "actions/Auth";
class Header extends React.Component {
  onAppNotificationSelect = () => {
    this.setState({
      appNotification: !this.state.appNotification
    });
  };
  onMailNotificationSelect = () => {
    this.setState({
      mailNotification: !this.state.mailNotification
    });
  };
  onLangSwitcherSelect = event => {
    this.setState({
      langSwitcher: !this.state.langSwitcher,
      anchorEl: event.currentTarget
    });
  };
  onSearchBoxSelect = () => {
    this.setState({
      searchBox: !this.state.searchBox
    });
  };
  handleRequestClose = () => {
    this.setState({
      langSwitcher: false,
      mailNotification: false,
      appNotification: false,
      searchBox: false
    });
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      searchBox: false,
      searchText: "",
      mailNotification: false,
      langSwitcher: false,
      appNotification: false
    };
  }

  updateSearchText(evt) {
    this.setState({
      searchText: evt.target.value
    });
  }

  render() {
    const { onToggleCollapsedNav, drawerType, locale } = this.props;
    // const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-block d-xl-none' : drawerType.includes(COLLAPSED_DRAWER) ? 'd-block' : 'd-none';

    return (
      <AppBar className="app-main-header">
        <Toolbar className="app-toolbar" disableGutters={false}>
          {/* <IconButton
            className={`jr-menu-icon`}
            aria-label="Menu"
            onClick={onToggleCollapsedNav}
          >
            <span className="menu-icon" />
          </IconButton> */}

          {/* <Link className="app-logo" to="/">
            <img src={logo} alt="Jambo" title="Jambo" />
          </Link> */}
          {/* <div className="justify-content-center align-items-center"> */}
            <h1
              style={{
                color: "#fff"
              }}
            >
              Shipper Signup
            </h1>
          {/* </div> */}
          {/* <SearchBox styleName="d-none d-sm-block" placeholder=""
                               onChange={this.updateSearchText.bind(this)}
                               value={this.state.searchText}/> */}

          <ul className="header-notifications list-inline ml-auto">
            {/* <li className="d-inline-block d-sm-none list-inline-item">
                            <Dropdown
                                className="quick-menu nav-searchbox"
                                isOpen={this.state.searchBox}
                                toggle={this.onSearchBoxSelect.bind(this)}>

                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <IconButton className="icon-btn size-30">
                                        <i className="zmdi zmdi-search zmdi-hc-fw"/>
                                    </IconButton>
                                </DropdownToggle>

                                <DropdownMenu right className="p-0">
                                    <SearchBox styleName="search-dropdown" placeholder=""
                                               onChange={this.updateSearchText.bind(this)}
                                               value={this.state.searchText}/>
                                </DropdownMenu>
                            </Dropdown>
                        </li> */}
            <li className="list-inline-item">
              <image src={logo} />
            </li>
            <li className="list-inline-item app-tour">
              <Dropdown
                className="quick-menu"
                isOpen={this.state.appNotification}
                toggle={this.onAppNotificationSelect.bind(this)}
              >
                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown"
                >
                  <IconButton className="icon-btn size-30">
                    <i className="zmdi zmdi-notifications-active icon-alert animated infinite wobble" />
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right>
                  <CardHeader
                    styleName="align-items-center"
                    heading={<IntlMessages id="appNotification.title" />}
                  />
                  <AppNotification />
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="list-inline-item mail-tour">
              <IconButton
                className="icon-btn size-30"
                onClick={() => {
                  this.props.userSignOut();
                }}
              >
                <i
                  style={{ color: "#fff" }}
                  className="zmdi zmdi-sign-in zmdi-hc-fw mr-2"
                />
              </IconButton>
            </li>
          </ul>
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
