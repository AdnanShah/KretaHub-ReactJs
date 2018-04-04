import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

class SimpleSnackbar extends Component {
    state = {
        open: false,
        message: null,
    };

    handleClick = () => {
        this.setState({open: true});
    };

    handleRequestClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button variant="raised" color="primary" onClick={this.handleClick}>
                    {this.props.children}
                </Button>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6e3}
                    onClose={this.handleRequestClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Note archived</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleRequestClose}>
                            UNDO
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.handleRequestClose}
                        >
                            <CloseIcon/>
                        </IconButton>,
                    ]}
                />
            </div>
        );
    }
}

export default SimpleSnackbar;