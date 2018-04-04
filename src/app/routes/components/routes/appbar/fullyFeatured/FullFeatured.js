import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import SearchBox from 'components/SearchBox';
import Avatar from 'material-ui/Avatar';
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';

class FullFeatured extends React.Component {

    onSearchBoxSelect = () => {
        this.setState({
            searchBox: !this.state.searchBox
        })
    };
    handleRequestClose = () => {
        this.setState({mailNotification: false, appNotification: false, searchBox: false});
    };

    constructor() {
        super();
        this.state = {
            searchBox: false,
            searchText: '',
        }
    }

    updateSearchText(evt) {
        this.setState({
            searchText: evt.target.value,
        });
    }

    render() {
        return (
            <AppBar className="app-main-header" position="static">
                <Toolbar>
                    <IconButton className="jr-menu-icon" aria-label="Menu">
                        <span className="menu-icon"/>
                    </IconButton>

                    <h4 className="mb-0 mr-auto">Company Name</h4>

                    <SearchBox styleName="d-none d-sm-block"/>

                    <Button size="small" className="ml-3 text-white d-none d-sm-block">Login</Button>

                    <div className="d-inline-block d-sm-none list-inline-item">
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
                    </div>

                    <ul className="header-notifications list-inline ml-3 d-none d-sm-block">

                        <li className="list-inline-item">
                            <i className="zmdi zmdi-notifications-active zmdi-hc-lg zmdi-hc-fw"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="zmdi zmdi-comment-alt-text zmdi-hc-lg zmdi-hc-fw"/>
                        </li>
                    </ul>

                    <Avatar className="ml-3 ml-lg-5 d-none d-sm-block" alt="Remy Sharp"
                            src="http://via.placeholder.com/150x150"/>
                </Toolbar>
            </AppBar>
        );
    }
}

export default FullFeatured;