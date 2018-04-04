import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';

class PositionedSnackbar extends Component {
    state = {
        open: false,
        vertical: null,
        horizontal: null,
    };

    handleClick = state => () => {
        this.setState({open: true, ...state});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {
        const {vertical, horizontal, open} = this.state;
        return (
            <div className="manage-margin">
                <Button variant="raised" color="primary"
                        onClick={this.handleClick({vertical: 'top', horizontal: 'center'})}>
                    <span>Top-Center</span>
                </Button>
                <Button variant="raised" color="primary"
                        onClick={this.handleClick({vertical: 'top', horizontal: 'right'})}>
                    <span>Top-Right</span>
                </Button>
                <Button variant="raised" color="primary"
                        onClick={this.handleClick({vertical: 'bottom', horizontal: 'right'})}>
                    <span>Bottom-Right</span>
                </Button>
                <Button variant="raised" color="primary"
                        onClick={this.handleClick({vertical: 'bottom', horizontal: 'center'})}>
                    <span>Bottom-Center</span>
                </Button>
                <Button variant="raised" color="primary"
                        onClick={this.handleClick({vertical: 'bottom', horizontal: 'left'})}>
                    <span>Bottom-Left</span>
                </Button>
                <Button variant="raised" color="primary"
                        onClick={this.handleClick({vertical: 'top', horizontal: 'left'})}>
                    <span>Top-Left</span>
                </Button>
                <Snackbar
                    anchorOrigin={{vertical, horizontal}}
                    open={open}
                    onClose={this.handleRequestClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">I love snacks</span>}
                />
            </div>
        );
    }
}

export default PositionedSnackbar;