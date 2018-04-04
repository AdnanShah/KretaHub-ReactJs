import {
    ADD_FAVOURITE,
    FETCH_ALL_CONTACT_SUCCESS,
    FILTER_CONTACT,
    GET_ALL_CONTACT,
    GET_UNSELECTED_ALL_CONTACT,
    HANDLE_REQUEST_CLOSE,
    ON_ADD_CONTACT,
    ON_ALL_CONTACT_SELECT,
    ON_CONTACT_CLOSE,
    ON_CONTACT_SELECT,
    ON_DELETE_CONTACT,
    ON_DELETE_SELECTED_CONTACT,
    ON_FILTER_OPTION_SELECT,
    ON_SAVE_CONTACT,
    ON_TOGGLE_DRAWER,
    SHOW_MESSAGE,
    UPDATE_SEARCH_USER
} from 'constants/ActionTypes';

const INIT_STATE = {
    alertMessage: '',
    showMessage: false,
    loader: true,
    noContentFoundMessage: 'No contact found in selected folder',
    selectedSectionId: 1,
    drawerState: false,
    user: {
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        avatar: 'http://via.placeholder.com/150x150'
    },
    searchUser: '',
    filterOption: 'All contacts',
    allContact: [],
    contactList: [],
    selectedContact: null,
    selectedContacts: 0,
    addContactState: false,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_FAVOURITE: {
            return {
                ...state,
                alertMessage: action.payload.starred ? 'Contact removed as star' : 'Contact marked as star',
                showMessage: true,
                contactList: state.contactList.map((contact) => contact.id === action.payload.id ? {
                    ...contact,
                    starred: !action.payload.starred
                } : contact),
                allContact: state.allContact.map((contact) => contact.id === action.payload.id ? {
                    ...contact,
                    starred: !action.payload.starred
                } : contact)
            };
        }
        case FETCH_ALL_CONTACT_SUCCESS: {
            return {
                ...state,
                loader: false,
                allContact: action.payload,
                contactList: action.payload,
            }
        }
        case SHOW_MESSAGE: {
            return {
                ...state,
                alertMessage: action.payload,
                showMessage: true,
                loader: false
            }
        }
        case ON_CONTACT_SELECT: {
            action.payload.selected = !action.payload.selected;
            let selectedContacts = 0;
            const contactList = state.contactList.map(contact => {
                    if (contact.selected) {
                        selectedContacts++;
                    }
                    if (contact.id === action.payload.id) {
                        if (contact.selected) {
                            selectedContacts++;
                        }
                        return action.payload;
                    } else {
                        return contact;
                    }
                }
            );
            return {
                ...state, INIT_STATE,
                selectedContacts: selectedContacts,
                contactList: contactList
            };
        }
        case ON_ADD_CONTACT: {
            return {...state, addContactState: true};
        }
        case ON_CONTACT_CLOSE: {
            return {...state, addContactState: false};
        }
        case ON_FILTER_OPTION_SELECT: {
            let selectedSectionId = 0;
            let filterOption = '';
            let contactList = [];
            switch (action.payload.name) {
                case 'All contacts': {
                    selectedSectionId = action.payload.id;
                    filterOption = action.payload.name;
                    contactList = state.allContact;
                    break;
                }
                case 'Frequently contacted': {
                    selectedSectionId = action.payload.id;
                    filterOption = action.payload.name;
                    contactList = state.allContact.filter((contact) => contact.frequently);
                    break;
                }
                case 'Starred contacts': {
                    selectedSectionId = action.payload.id;
                    filterOption = action.payload.name;
                    contactList = state.allContact.filter((contact) => contact.starred);
                    break;
                }
            }
            return {
                ...state, selectedSectionId, filterOption, contactList, drawerState: false
            };
        }
        case ON_SAVE_CONTACT: {
            let isNew = true;
            const contactList = state.allContact.map((contact) => {
                if (contact.id === action.payload.id) {
                    isNew = false;
                    return action.payload
                } else {
                    return contact
                }
            });
            if (isNew) {
                contactList.push(action.payload);
            }
            return {
                ...state,
                alertMessage: isNew ? 'Contact Added Successfully' : 'Contact Updated Successfully',
                showMessage: true,
                contactList: contactList,
                allContact: contactList,
            }
        }
        case ON_DELETE_CONTACT: {
            return {
                ...state,
                alertMessage: 'Contact Deleted Successfully',
                showMessage: true,
                allContact: state.allContact.filter((contact) => contact.id !== action.payload.id),
                contactList: state.allContact.filter((contact) => contact.id !== action.payload.id),
            }
        }
        case ON_DELETE_SELECTED_CONTACT: {
            const contacts = state.allContact.filter((contact) => !contact.selected);
            return {
                ...state,
                alertMessage: 'Contact Deleted Successfully',
                showMessage: true,
                allContact: contacts,
                contactList: contacts,
                selectedContacts: 0
            }
        }
        case FILTER_CONTACT: {
            const {filterOption} = state;
            let contactList = [];
            if (action.payload === '') {
                contactList = state.allContact;
            } else {
                const filterContact = state.allContact.filter((contact) =>
                    contact.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1);
                if (filterOption === 'All contacts') {
                    contactList = filterContact
                } else if (filterOption === 'Frequently contacted') {
                    contactList = filterContact.filter((contact) => contact.frequently);
                } else if (filterOption === 'Starred contacts') {
                    contactList = filterContact.filter((contact) => contact.starred);
                }
            }
            return {...state, contactList: contactList}
        }
        case GET_ALL_CONTACT: {
            let contactList = state.allContact.map((contact) => contact ? {
                ...contact,
                selected: true
            } : contact);
            return {
                ...state,
                selectedContacts: contactList.length,
                allContact: contactList,
                contactList: contactList
            }
        }
        case GET_UNSELECTED_ALL_CONTACT: {
            let contactList = state.allContact.map((contact) => contact ? {
                ...contact,
                selected: false
            } : contact);
            return {
                ...state,
                selectedContacts: 0,
                allContact: contactList,
                contactList: contactList
            }
        }
        case ON_ALL_CONTACT_SELECT: {
            const selectAll = state.selectedContacts < state.contactList.length;
            let selectedContacts = 0;
            let contactList = [];
            if (selectAll) {
                contactList = state.allContact.map((contact) => contact ? {
                    ...contact,
                    selected: true
                } : contact);
                selectedContacts = contactList.length;
            } else {
                contactList = state.allContact.map((contact) => contact ? {
                    ...contact,
                    selected: true
                } : contact);
                selectedContacts = 0;
            }
            return {
                ...state,
                selectedContacts: selectedContacts,
                allContact: contactList,
                contactList: contactList
            }
        }
        case UPDATE_SEARCH_USER: {
            return {...state, searchUser: action.payload}
        }
        case HANDLE_REQUEST_CLOSE: {
            return {...state, showMessage: false}
        }
        case ON_TOGGLE_DRAWER: {
            return {...state, drawerState: !state.drawerState}
        }

        default:
            return state;
    }
}
