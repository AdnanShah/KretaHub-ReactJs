import {
    FETCH_ALL_MAIL,
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
    ON_OPTION_MENU_ITEM_SELECT,
    ON_OPTION_MENU_SELECT,
    ON_START_SELECT,
    ON_TOGGLE_DRAWER,
    SEARCH_MAIL,
    SET_CURRENT_MAIL_NULL,
    UPDATE_SEARCH
} from '../constants/ActionTypes';
import {FETCH_ALL_MAIL_SUCCESS, SHOW_LOADER, SHOW_MESSAGE} from 'constants/ActionTypes';


export const fetchMails = () => {
    return {
        type: FETCH_ALL_MAIL
    };
};

export const fetchMailsSuccess = (mails) => {
    return {
        type: FETCH_ALL_MAIL_SUCCESS,
        payload: mails
    }
};
export const showMailMessage = (message) => {
    return {
        type: SHOW_MESSAGE,
        payload: message
    };
};
export const onFolderMenuItemSelect = (folderId) => {
    return {
        type: ON_FOLDER_MENU_ITEM_SELECT,
        payload: folderId
    };
};

export const onMailLabelMenuItemSelect = (label) => {
    return {
        type: ON_LABEL_MENU_ITEM_SELECT,
        payload: label
    };
};
export const handleMailRequestClose = () => {
    return {
        type: HANDLE_REQUEST_CLOSE,
    };
};

export const getMailNavFilters = (filter) => {
    return {
        type: GET_NAV_FILTERS,
        payload: filter,
    };
};
export const onFolderSelect = () => {
    return {
        type: ON_FOLDER_SELECT
    };
};
export const onMailLabelSelect = () => {
    return {
        type: ON_LABEL_SELECT,
    };
};
export const onMailOptionMenuSelect = () => {
    return {
        type: ON_OPTION_MENU_SELECT,
    };
};
export const onOptionMenuItemSelect = (option) => {
    return {
        type: ON_OPTION_MENU_ITEM_SELECT,
        payload: option
    };
};
export const getAllMail = () => {
    return {
        type: GET_ALL_MAIL,
    };
};
export const getUnselectedAllMail = () => {
    return {
        type: GET_UNSELECTED_ALL_MAIL,
    };
};
export const getReadMail = () => {
    return {
        type: GET_READ_MAIL
    };
};
export const getUnreadMail = () => {
    return {
        type: GET_UNREAD_MAIL
    };
};
export const getStarredMail = () => {
    return {
        type: GET_STARRED_MAIL
    };
};

export const getUnStarredMail = () => {
    return {
        type: GET_UNSTARRED_MAIL
    };
};
export const getImportantMail = () => {
    return {
        type: GET_IMPORTANT_MAIL
    };
};
export const getUnimportantMail = () => {
    return {
        type: GET_UNIMPORTANT_MAIL
    };
};
export const getMailNavLabels = (label) => {
    return {
        type: GET_NAV_LABELS,
        payload: label
    };
};
export const onSearchMail = (searchText) => {
    return {
        type: SEARCH_MAIL,
        payload: searchText
    };
};
export const onMailChecked = (data) => {
    return {
        type: ON_MAIL_CHECKED,
        payload: data
    };
};

export const onAllMailSelect = () => {
    return {
        type: ON_ALL_MAIL_SELECT
    };
};
export const onStartSelect = (data) => {
    return {
        type: ON_START_SELECT,
        payload: data
    };
};
export const onImportantSelect = (data) => {
    return {
        type: ON_IMPORTANT_SELECT,
        payload: data
    };
};
export const onMailSend = (data) => {
    return {
        type: ON_MAIL_SEND,
        payload: data
    };
};
export const onMailSelect = (mail) => {
    return {
        type: ON_MAIL_SELECT,
        payload: mail
    };
};
export const getNavFolders = (folder) => {
    return {
        type: GET_NAV_FOLDER,
        payload: folder
    };
};

export const updateMailSearch = (searchText) => {
    return {
        type: UPDATE_SEARCH,
        payload: searchText
    };
};
export const onMailToggleDrawer = () => {
    return {
        type: ON_TOGGLE_DRAWER
    };
};
export const onDeleteMail = () => {
    return {
        type: ON_DELETE_MAIL
    };
};
export const hideMailLoader = () => {
    return {
        type: ON_HIDE_LOADER
    };
};
export const setCurrentMailNull = () => {
    return {
        type: SET_CURRENT_MAIL_NULL
    };
};
export const onComposeMail = () => {
    return {
        type: ON_COMPOSE_MAIL
    };
};
