import {
    DARK_THEME,
    DRAWER_TYPE,
    FIXED_DRAWER,
    SWITCH_LANGUAGE,
    THEME_COLOR,
    TOGGLE_COLLAPSED_NAV,
    WINDOW_WIDTH
} from 'constants/ActionTypes';
import {DARK_INDIGO} from 'constants/ThemeColors';

const rltLocale = ['ar'];
const initialSettings = {
    navCollapsed: false,
    drawerType: FIXED_DRAWER,
    themeColor: DARK_INDIGO,
    darkTheme: false,
    width: $(window).width(),
    isDirectionRTL: false,
    locale: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us'
    }
};

const settings = (state = initialSettings, action) => {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
            return {
                ...state,
                navCollapsed: false
            };
        case TOGGLE_COLLAPSED_NAV:
            return {
                ...state,
                navCollapsed: action.isNavCollapsed
            };
        case DRAWER_TYPE:
            return {
                ...state,
                drawerType: action.drawerType
            };
        case WINDOW_WIDTH:
            return {
                ...state,
                width: action.width
            };
        case THEME_COLOR:
            return {
                ...state,
                darkTheme: false,
                themeColor: action.color
            };
        case DARK_THEME:
            return {
                ...state,
                darkTheme: !state.darkTheme
            };
        case SWITCH_LANGUAGE:

            return {
                ...state,
                locale: action.payload,
                // isDirectionRTL: rltLocale.includes(action.payload.locale)

            };
        default:
            return state;
    }
};

export default settings;
