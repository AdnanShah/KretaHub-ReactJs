import deepOrange from 'material-ui/colors/deepOrange';
import lightBlue from 'material-ui/colors/lightBlue';

export default {
    palette: {
        primary: {
            light: deepOrange[300],
            main: deepOrange[500],
            dark: deepOrange[700],
            contrastText: '#fff'
        },
        secondary: {
            light: lightBlue[300],
            main: lightBlue['A200'],
            dark: lightBlue[700],
            contrastText: '#fff'
        }
    },
    status: {
        danger: 'orange',
    },
    typography: {
        button: {
            fontWeight: 400,
            textAlign: 'capitalize'
        },
    },
};
