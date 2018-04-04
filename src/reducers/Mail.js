import {
    FETCH_ALL_MAIL_SUCCESS,
    GET_ALL_MAIL,
    GET_IMPORTANT_MAIL,
    GET_NAV_FILTERS,
    GET_NAV_FOLDER,
    GET_NAV_LABELS,
    GET_READ_MAIL,
    GET_STARRED_MAIL,
    GET_UNIMPORTANT_MAIL,
    GET_UNREAD_MAIL,
    GET_UNSELECTED_ALL_MAIL,
    GET_UNSTARRED_MAIL,
    HANDLE_REQUEST_CLOSE,
    ON_ALL_MAIL_SELECT,
    ON_COMPOSE_MAIL,
    ON_DELETE_MAIL,
    ON_FOLDER_MENU_ITEM_SELECT,
    ON_FOLDER_SELECT,
    ON_HIDE_LOADER,
    ON_IMPORTANT_SELECT,
    ON_LABEL_MENU_ITEM_SELECT,
    ON_LABEL_SELECT,
    ON_MAIL_CHECKED,
    ON_MAIL_SELECT,
    ON_MAIL_SEND,
    ON_OPTION_MENU_SELECT,
    ON_START_SELECT,
    ON_TOGGLE_DRAWER,
    SEARCH_MAIL,
    SET_CURRENT_MAIL_NULL,
    SHOW_MESSAGE,
    UPDATE_SEARCH
} from 'constants/ActionTypes';

const INIT_STATE = {
    searchMail: '',
    noContentFoundMessage: 'No mail found in selected folder',
    alertMessage: '',
    showMessage: false,
    drawerState: false,
    anchorEl: null,
    allMail: [],
    optionName: 'None',
    loader: true,
    currentMail: null,
    user: {
        name: 'Robert Johnson',
        email: 'robert@example.com',
        avatar: 'http://via.placeholder.com/150x150'
    },
    selectedMails: 0,
    selectedFolder: 0,
    composeMail: false,
    labelMenuState: false,
    folderMenuState: false,
    optionMenuState: false,
    folderMails: []

};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ALL_MAIL: {
            let mails = state.allMail.map((mail) => mail.folder === state.selectedFolder ? {
                ...mail,
                selected: true
            } : mail);
            return {
                ...state,
                selectedMails: mails.length,
                optionName: 'All',
                allMail: mails,
                folderMails: mails.filter(mail => mail.folder === state.selectedFolder)
            }
        }
        case FETCH_ALL_MAIL_SUCCESS: {
            return {
                ...state,
                loader: false,
                allMail: action.payload,
                folderMails: action.payload.filter(mail => mail.folder === 0)
            }
        }
        case GET_IMPORTANT_MAIL: {
            let selectedMail = 0;
            let mails = state.allMail.filter(mail => mail.folder === state.selectedFolder);
            mails = mails.map((mail) => {
                if (mail.important) {
                    selectedMail++;
                    return {...mail, selected: true};
                }
                return {...mail, selected: false}
            });
            return {
                ...state,
                selectedMails: selectedMail,
                optionName: 'Important',
                allMail: mails,
                folderMails: mails.filter(mail => mail.folder === state.selectedFolder)
            }
        }
        case GET_NAV_FILTERS: {
            const filterMails = state.allMail.filter(mail => {
                if (action.payload.id === 0 && mail.starred) {
                    return mail
                } else if (action.payload.id === 1 && mail.important) {
                    return mail
                }
            });
            return {
                ...state,
                noContentFoundMessage: 'No mail found in selected filter',
                loader: true,
                folderMails: filterMails
            }
        }
        case ON_FOLDER_SELECT: {
            return {...state, folderMenuState: !state.folderMenuState}
        }
        case GET_NAV_LABELS: {
            const filterMails = state.allMail.filter(mail => mail.labels.includes(action.payload.id));
            return {
                ...state,
                loader: true,
                noContentFoundMessage: 'No mail found in selected label',
                folderMails: filterMails
            }
        }
        case GET_READ_MAIL: {
            let selectedMail = 0;
            let mails = state.allMail.filter(mail => mail.folder === state.selectedFolder);
            mails = mails.map((mail) => {
                if (mail.read) {
                    selectedMail++;
                    return {...mail, selected: true};
                }
                return {...mail, selected: false}
            });
            return {
                ...state,
                selectedMails: selectedMail,
                allMail: mails,
                optionName: 'Read',
                folderMails: mails.filter(mail => mail.folder === state.selectedFolder)
            }
        }
        case GET_STARRED_MAIL: {
            let selectedMail = 0;
            let mails = state.allMail.filter(mail => mail.folder === state.selectedFolder);
            mails = mails.map((mail) => {
                if (mail.starred) {
                    selectedMail++;
                    return {...mail, selected: true};
                }
                return {...mail, selected: false}
            });
            return {
                ...state,
                selectedMails: selectedMail,
                allMail: mails,
                optionName: 'Stared',
                folderMails: mails.filter(mail => mail.folder === state.selectedFolder)
            }
        }
        case GET_UNIMPORTANT_MAIL: {
            let selectedMail = 0;
            let mails = state.allMail.filter(mail => mail.folder === state.selectedFolder);
            mails = mails.map((mail) => {
                if (!mail.important) {
                    selectedMail++;
                    return {...mail, selected: true};
                }
                return {...mail, selected: false}
            });
            return {
                ...state,
                selectedMails: selectedMail,
                allMail: mails,
                optionName: 'Unimportant',
                noContentFoundMessage: 'No Mail found in selected Label',
                folderMails: mails.filter(mail => mail.folder === state.selectedFolder)
            }
        }
        case GET_UNREAD_MAIL: {
            let selectedMail = 0;
            let mails = state.allMail.filter(mail => mail.folder === state.selectedFolder);
            mails = mails.map((mail) => {
                if (!mail.read) {
                    selectedMail++;
                    return {...mail, selected: true};
                }
                return {...mail, selected: false}
            });
            return {
                ...state,
                selectedMails: selectedMail,
                allMail: mails,
                optionName: 'Unread',
                folderMails: mails.filter(mail => mail.folder === state.selectedFolder)
            }
        }
        case GET_UNSELECTED_ALL_MAIL: {
            let mails = state.allMail.map((mail) => mail.folder === state.selectedFolder ? {
                ...mail,
                selected: false
            } : mail);
            return {
                ...state,
                selectedMails: 0,
                optionName: 'None',
                allMail: mails,
                folderMails: mails.filter(mail => mail.folder === state.selectedFolder)
            }
        }
        case GET_UNSTARRED_MAIL: {
            let selectedMail = 0;
            let mails = state.allMail.filter(mail => mail.folder === state.selectedFolder);
            mails = mails.map((mail) => {
                if (!mail.starred) {
                    selectedMail++;
                    return {...mail, selected: true};
                }
                return {...mail, selected: false}
            });
            return {
                ...state,
                selectedMails: selectedMail,
                optionName: 'UnStarred',
                allMail: mails,
                folderMails: mails.filter(mail => mail.folder === state.selectedFolder)
            }
        }
        case HANDLE_REQUEST_CLOSE: {
            return {
                ...state,
                composeMail: false,
                showMessage: false,
                folderMenuState: false,
                labelMenuState: false,
                optionMenuState: false
            }
        }
        case ON_ALL_MAIL_SELECT: {
            return {...state}
        }
        case ON_FOLDER_MENU_ITEM_SELECT: {
            const mails = state.allMail.map(mail =>
                mail.selected && (mail.folder === state.selectedFolder) ?
                    {...mail, folder: action.payload, selected: false,} : mail
            );

            return {
                ...state,
                selectedMails: 0,
                allMail: mails,
                noContentFoundMessage: 'No mail found in selected folder',
                alertMessage: 'Mail has been moved successfully',
                showMessage: true,
                folderMails: mails.filter(mail => mail.folder === state.selectedFolder)
            }
        }
        case ON_IMPORTANT_SELECT: {
            action.payload.important = !action.payload.important;
            return {
                ...state,
                alertMessage: action.payload.important ? 'Mail Mark as Important' : 'Mail Remove as Important',
                showMessage: true,
                folderMails: state.folderMails.map(mail =>
                    mail.id === action.payload.id ?
                        action.payload : mail
                )
            }
        }
        case ON_LABEL_MENU_ITEM_SELECT: {
            let currentMail = state.currentMail;
            const mails = state.allMail.map(mail => {
                    if (mail.selected && (mail.folder === state.selectedFolder)) {
                        if (mail.labels.includes(action.payload.id)) {
                            mail.labels.splice(mail.labels.indexOf(action.payload.id), 1);
                            if (currentMail !== null && mail.id === currentMail.id) {
                                currentMail.labels = mail.labels;
                            }
                            return {...mail, labels: mail.labels};
                        } else {
                            mail.labels = mail.labels.concat(action.payload.id);
                            if (currentMail !== null && mail.id === currentMail.id) {
                                currentMail.labels = mail.labels;
                            }
                            return {...mail, labels: mail.labels};
                        }
                    } else {
                        return mail;
                    }
                }
            );

            return {
                ...state,
                currentMail: currentMail,
                noContentFoundMessage: 'No mail found in selected label',
                alertMessage: 'Label Updated Successfully',
                showMessage: true,
                allMail: mails,
                folderMails: mails.filter(mail => mail.folder === state.selectedFolder)
            }
        }
        case ON_LABEL_SELECT: {
            return {...state, labelMenuState: !state.labelMenuState}
        }
        case ON_MAIL_CHECKED: {
            action.payload.selected = !action.payload.selected;
            let selectedMail = 0;
            const mails = state.folderMails.map(mail => {
                    if (mail.selected) {
                        selectedMail++;
                    }
                    if (mail.id === action.payload.id) {
                        if (mail.selected) {
                            selectedMail++;
                        }
                        return action.payload;
                    } else {
                        return mail;
                    }
                }
            );
            return {
                ...state,
                selectedMails: selectedMail,
                folderMails: mails
            }
        }
        case ON_MAIL_SELECT: {
            return {
                ...state,
                loader: true,
                currentMail: action.payload
            }
        }
        case ON_MAIL_SEND: {
            return {
                ...state,
                alertMessage: 'Mail Sent Successfully',
                showMessage: true,
                folderMails: state.allMail.concat(action.payload),
                allMail: state.allMail.concat(action.payload)
            }
        }
        case ON_OPTION_MENU_SELECT: {
            return {...state, optionMenuState: !state.optionMenuState}
        }
        case GET_NAV_FOLDER: {
            const filterMails = state.allMail.filter(mail => mail.folder === action.payload.id);
            return {
                ...state,
                selectedFolder: action.payload.id,
                noContentFoundMessage: 'No mail found in selected folder',
                currentMail: null,
                loader: true,
                folderMails: filterMails
            }
        }

        case ON_START_SELECT: {
            action.payload.starred = !action.payload.starred;
            return {
                ...state,
                alertMessage: action.payload.starred ? 'Mail Mark as Star' : 'Mail Remove as Star',
                showMessage: true,
                folderMails: state.folderMails.map(mail =>
                    mail.id === action.payload.id ?
                        action.payload : mail
                )
            }
        }

        case SEARCH_MAIL: {
            if (action.payload === '') {
                return {...state, folderMails: state.allMail.filter((mail) => !mail.deleted)};
            } else {
                const searchMails = state.allMail.filter((mail) =>
                    !mail.deleted && mail.subject.toLowerCase().indexOf(action.payload.toLowerCase()) > -1);
                return {
                    ...state,
                    folderMails: searchMails
                };
            }

        }

        case UPDATE_SEARCH: {
            return {...state, searchMail: action.payload}
        }
        case ON_HIDE_LOADER: {
            return {...state, loader: false}
        }
        case ON_TOGGLE_DRAWER: {
            return {...state, drawerState: !state.drawerState}
        }
        case SET_CURRENT_MAIL_NULL: {
            return {...state, currentMail: null}
        }
        case ON_DELETE_MAIL: {

            const mails = state.allMail.map(mail =>
                mail.selected && (mail.folder === state.selectedFolder) ?
                    {...mail, folder: 4, selected: false,} : mail
            );

            return {
                ...state,
                alertMessage: 'Mail Deleted Successfully',
                showMessage: true,
                selectedMails: 0,
                allMail: mails,
                folderMails: mails.filter(mail => mail.folder === state.selectedFolder)
            }
        }
        case ON_COMPOSE_MAIL: {
            return {...state, composeMail: true}
        }
        case SHOW_MESSAGE: {
            return {
                ...state,
                alertMessage: action.payload,
                showMessage: true,
                loader: false
            }
        }

        default:
            return state;
    }
}