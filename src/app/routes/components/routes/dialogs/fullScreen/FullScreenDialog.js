import React from 'react';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button variant="raised" className="bg-primary text-white" onClick={this.handleClickOpen}>full-screen
                    dialog</Button>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleRequestClose}
                    transition={Transition}
                >
                    <AppBar className="position-relative">
                        <Toolbar>
                            <IconButton onClick={this.handleRequestClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" style={{
                                flex: 1,
                            }}>
                                Sound
                            </Typography>
                            <Button onClick={this.handleRequestClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default FullScreenDialog;