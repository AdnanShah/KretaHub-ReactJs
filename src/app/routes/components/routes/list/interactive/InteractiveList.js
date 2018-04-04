import React, {cloneElement, Component} from 'react';
import List, {ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText,} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import {FormControlLabel, FormGroup} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Grid from 'material-ui/Grid';
import FolderIcon from 'material-ui-icons/Folder';
import DeleteIcon from 'material-ui-icons/Delete';

function generate(element) {
    return [0, 1, 2].map(value =>
        cloneElement(element, {
            key: value,
        }),
    );
}

class InteractiveList extends Component {
    state = {
        dense: false,
        secondary: false,
    };

    render() {
        const classes = this.props.classes;
        const {dense, secondary} = this.state;

        return (
            <div>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                      checked={dense}
                                      onChange={(event, checked) => this.setState({dense: checked})}
                                      value="dense"
                            />
                        }
                        label="Enable dense"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox color="primary"
                                      checked={secondary}
                                      onChange={(event, checked) => this.setState({secondary: checked})}
                                      value="secondary"
                            />
                        }
                        label="Enable secondary text"
                    />
                </FormGroup>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <h3 className="text-gray lighten-2 my-3">
                            Text only
                        </h3>
                        <div className="jr-card p-0 m-1">
                            <List dense={dense}>
                                {generate(
                                    <ListItem button>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h3 className="text-gray lighten-2 my-3">
                            Icon with text
                        </h3>
                        <div className="jr-card p-0 m-1">
                            <List dense={dense}>
                                {generate(
                                    <ListItem button>
                                        <ListItemIcon>
                                            <FolderIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <h3 className="text-gray lighten-2 my-3">
                            Avatar with text
                        </h3>
                        <div className="jr-card p-0 m-1">
                            <List dense={dense}>
                                {generate(
                                    <ListItem button>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <i className="zmdi zmdi-folder zmdi-hc-fw zmdi-hc-lg text-white"/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h3 className="text-gray lighten-2 my-3">
                            Avatar with text and icon
                        </h3>
                        <div className="jr-card p-0 m-1">
                            <List dense={dense}>
                                {generate(
                                    <ListItem button>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <i className="zmdi zmdi-folder zmdi-hc-fw zmdi-hc-lg text-white"/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton aria-label="Delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>,
                                )}
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default InteractiveList;