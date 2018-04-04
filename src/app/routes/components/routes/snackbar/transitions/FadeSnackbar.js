import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import Fade from 'material-ui/transitions/Fade';

class FadeSnackbar extends Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState({open: true});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button variant="raised" color="primary" onClick={this.handleClick}><span>Fade</span></Button>
                <Snackbar
                    open={this.state.open}
                    onClose={this.handleRequestClose}
                    transition={Fade}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">I love snacks</span>}
                />
            </div>
        );
    }
}

export default FadeSnackbar;