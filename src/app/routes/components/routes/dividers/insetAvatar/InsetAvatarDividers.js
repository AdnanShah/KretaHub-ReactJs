import React from 'react';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {Badge} from 'reactstrap';

function InsetAvatarDividers() {
    return (
        <List>
            <ListItem button>
                <Avatar className="size-50" alt="Remy Sharp" src="http://via.placeholder.com/150x150"/>
                <ListItemText primary="Jhon Smith" secondary="Jan 28, 2017" />
                <ListItemSecondaryAction>
                    <Badge className="mt-3 mr-3 text-uppercase" color="primary" pill>Admin</Badge>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider inset />
            <ListItem button>
                <Avatar className="size-50" alt="Adelle Charles" src="http://via.placeholder.com/150x150"/>
                <ListItemText primary="Crish Harris" secondary="Nov 20, 2017" />
                <ListItemSecondaryAction>
                    <Badge className="mt-3 mr-3 text-uppercase text-white" color="warning" pill>Guest</Badge>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider inset />
            <ListItem button>
                <Avatar className="size-50" alt="Remy Sharp" src="http://via.placeholder.com/150x150"/>
                <ListItemText primary="Stella Jhonson" secondary="Dec 02, 2014" />
                <ListItemSecondaryAction>
                    <Badge className="mt-3 mr-3 text-uppercase" color="success" pill>Agent</Badge>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}

export default (InsetAvatarDividers);