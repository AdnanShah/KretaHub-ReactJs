import blue from 'material-ui/colors/blue';
import deepOrange from 'material-ui/colors/deepOrange';

export default {
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
            contrastText: '#fff'
        },
        secondary: {
            light: deepOrange[300],
            main: deepOrange['A200'],
            dark: deepOrange[700],
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
