import green from 'material-ui/colors/green';
import orange from 'material-ui/colors/orange';

export default {
    palette: {
        primary: {
            light: green[300],
            main: green[500],
            dark: green[700],
            contrastText: '#fff'
        },
        secondary: {
            light: orange[300],
            main: orange['A700'],
            dark: orange[700],
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
