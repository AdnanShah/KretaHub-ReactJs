import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import {connect} from 'react-redux'
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import 'jquery-slimscroll/jquery.slimscroll.min';
import ContactList from 'components/contact/ContactList';
import AppModuleHeader from 'components/AppModuleHeader/index';
import AddContact from 'components/contact/AddContact';
import IntlMessages from 'util/IntlMessages';
import {CircularProgress} from 'material-ui/Progress';

import {
    addFavourite,
    fetchContacts,
    filterContact,
    getAllContact,
    getUnselectedAllContact,
    handleRequestClose,
    onAddContact,
    onAllContactSelect,
    onContactClose,
    onContactSelect,
    onDeleteContact,
    onDeleteSelectedContact,
    onFilterOptionSelect,
    onSaveContact,
    onToggleDrawer,
    updateContactUser
} from 'actions/Contact';


let contactId = 723812738;

const filterOptions = [
    {
        id: 1,
        name: 'All contacts',
        icon: 'zmdi-menu'
    }, {
        id: 2,
        name: 'Frequently contacted',
        icon: 'zmdi-time-restore'

    }, {

        id: 3,
        name: 'Starred contacts',
        icon: 'zmdi-star'
    }
];

class ContactWithRedux extends Component {

    ContactSideBar = (user) => {
        return <div className="module-side">
            <div className="module-side-header">
                <div className="module-logo">
                    <i className="zmdi zmdi-account-box mr-4"/>
                    <span><IntlMessages id="chat.contacts"/></span>
                </div>
            </div>


            <div className="module-side-content">
                <div className="module-side-scroll">
                    <div className="module-add-task">
                        <Button className="btn-block jr-btn" variant="raised" color="primary" aria-label="add"
                                onClick={this.onAddContact}>
                            <i className="zmdi zmdi-account-add zmdi-hc-fw"/>
                            <span>Add New Contact</span>
                        </Button>
                    </div>
                    <div className="module-side-nav">
                        <ul className="module-nav">
                            {filterOptions.map(option => <li key={option.id} className="nav-item">
                                    <a href="javascript:void(0)"
                                       className={option.id === this.props.selectedSectionId ? 'active' : ''} onClick={
                                        this.onFilterOptionSelect.bind(this, option)
                                    }>
                                        <i className={`zmdi ${option.icon}`}/>
                                        <span>{option.name}</span>
                                    </a>
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    };

    addFavourite = (data) => {
        this.props.addFavourite(data);
    };
    onContactSelect = (data) => {
        this.props.onContactSelect(data);
    };

    onAddContact = () => {
        this.props.onAddContact();
    };
    onContactClose = () => {
        this.props.onContactClose();
    };
    onFilterOptionSelect = (option) => {
        this.props.onFilterOptionSelect(option);
    };
    onSaveContact = (data) => {
        this.props.onSaveContact(data);
    };
    onDeleteContact = (data) => {
        this.props.onDeleteContact(data);
    };
    onDeleteSelectedContact = () => {
        this.props.onDeleteSelectedContact();
    };
    filterContact = (userName) => {
        if (userName === '') {
            this.onFilterOptionSelect(this.props.filterOption);
        } else {
            this.props.filterContact(userName);
        }
    };
    handleRequestClose = () => {
        this.props.handleRequestClose();
    };
    getAllContact = () => {
        this.props.getAllContact();
    };
    getUnselectedAllContact = () => {
        this.props.getUnselectedAllContact();
    };
    onAllContactSelect = () => {
        const selectAll = this.props.selectedContacts < this.props.contactList.length;
        if (selectAll) {
            this.props.getAllContact();
        } else {
            this.props.getUnselectedAllContact();
        }
    };
    onToggleDrawer = () => {
        this.props.onToggleDrawer();
    };

    constructor() {
        super();
    }

    componentWillMount() {
        this.props.fetchContacts();
    }

    componentDidMount() {
        this.manageHeight();
    }

    componentDidUpdate() {
        this.manageHeight();
    }

    manageHeight() {
        if (this.props.width >= 1200) {
            $('.module-list-scroll').slimscroll({
                height: 'calc(100vh - 265px)'
            });
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 200px)'
            });
        } else if (this.props.width >= 992) {
            $('.module-list-scroll').slimscroll({
                height: 'calc(100vh - 245px)'
            });
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 80px)'
            });
        } else {
            $('.module-list-scroll').slimscroll({
                height: 'calc(100vh - 245px)'
            });
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 80px)'
            });
        }
    }

    updateContactUser(evt) {
        this.props.updateContactUser(evt.target.value);
        this.props.filterContact(evt.target.value)
    }

    render() {
        const {user, contactList, addContactState, selectedContacts, alertMessage, showMessage, drawerState, searchUser, noContentFoundMessage, loader} = this.props;
        return (
            <div className="app-wrapper">
                <div className="app-module animated slideInUpTiny animation-duration-3">

                    <div className="d-block d-xl-none">
                        <Drawer
                                open={drawerState}
                                onClose={this.onToggleDrawer.bind(this)}>
                            {this.ContactSideBar(user)}
                        </Drawer>
                    </div>
                    <div className="app-module-sidenav d-none d-xl-flex">
                        {this.ContactSideBar(user)}
                    </div>

                    <div className="module-box">
                        <div className="module-box-header">
                            <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                                        onClick={this.onToggleDrawer.bind(this)}>
                                <i className="zmdi zmdi-menu"/>
                            </IconButton>
                            <AppModuleHeader placeholder="Search contact" notification={false} apps={false}
                                             user={this.props.user}
                                             onChange={this.updateContactUser.bind(this)}
                                             value={this.props.searchUser}/>
                        </div>
                        <div className="module-box-content">

                            <div className="module-box-topbar">
                                <Checkbox color="primary"
                                          indeterminate={selectedContacts > 0 && selectedContacts < contactList.length}
                                          checked={selectedContacts > 0}
                                          onChange={this.onAllContactSelect.bind(this)}
                                          value="SelectMail"/>


                                {selectedContacts > 0 &&
                                <IconButton
                                    onClick={this.onDeleteSelectedContact.bind(this)}>
                                    <i className="zmdi zmdi-delete"/>
                                </IconButton>}

                            </div>
                            <div className="module-list-scroll">
                                {loader ?
                                    <div
                                        className="loader-view-block h-100">
                                        <div className="loader-view">
                                            <CircularProgress/>
                                        </div>
                                    </div>
                                    :
                                    contactList.length === 0 ?
                                        <div className="h-100 d-flex align-items-center justify-content-center">
                                            {noContentFoundMessage}
                                        </div>
                                        : <ContactList contactList={contactList}
                                                       addFavourite={this.addFavourite.bind(this)}
                                                       onContactSelect={this.onContactSelect.bind(this)}
                                                       onDeleteContact={this.onDeleteContact.bind(this)}
                                                       onSaveContact={this.onSaveContact.bind(this)}/>
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <AddContact open={addContactState} contact={{
                    'id': contactId++,
                    'name': '',
                    'thumb': '',
                    'email': '',
                    'phone': '',
                    'designation': '',
                    'selected': false,
                    'starred': false,
                    'frequently': false,
                }} onSaveContact={this.onSaveContact}
                            onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={showMessage}
                    autoHideDuration={3000}
                    onClose={this.handleRequestClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{alertMessage}</span>}
                />
            </div>
        )
    }
}


const mapStateToProps = ({contacts, settings}) => {
    const {width} = settings;
    const {
        loader,
        alertMessage,
        showMessage,
        noContentFoundMessage,
        selectedSectionId,
        drawerState,
        user,
        searchUser,
        filterOption,
        allContact,
        contactList,
        selectedContact,
        selectedContacts,
        addContactState
    } = contacts;
    return {
        width,
        loader,
        alertMessage,
        showMessage,
        noContentFoundMessage,
        selectedSectionId,
        drawerState,
        user,
        searchUser,
        filterOption,
        allContact,
        contactList,
        selectedContact,
        selectedContacts,
        addContactState
    }
};
export default connect(mapStateToProps, {
    fetchContacts,
    addFavourite,
    onContactSelect,
    onAddContact,
    onContactClose,
    onFilterOptionSelect,
    onSaveContact,
    onDeleteContact,
    onDeleteSelectedContact,
    filterContact,
    getAllContact,
    getUnselectedAllContact,
    onAllContactSelect,
    updateContactUser,
    onToggleDrawer,
    handleRequestClose
})(ContactWithRedux);