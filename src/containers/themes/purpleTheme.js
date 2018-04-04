import deepPurple from 'material-ui/colors/deepPurple';
import amber from 'material-ui/colors/amber';

export default {
    palette: {
        primary: {
            light: deepPurple[300],
            main: deepPurple[500],
            dark: deepPurple[700],
            contrastText: '#fff'
        },
        secondary: {
            light: amber[300],
            main: amber['A700'],
            dark: amber[700],
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
