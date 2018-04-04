import React from 'react';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';

function ListDividers() {
    return (
        <List>
            <ListItem button>
                <ListItemIcon>
                    <i className="zmdi zmdi-email zmdi-hc-fw zmdi-hc-2x" />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>

            <Divider light />

            <ListItem button>
                <ListItemIcon>
                    <i className="zmdi zmdi-mail-send zmdi-hc-fw zmdi-hc-2x" />
                </ListItemIcon>
                <ListItemText primary="Sent" />
            </ListItem>

            <Divider light />

            <ListItem button>
                <ListItemIcon>
                    <i className="zmdi zmdi-email-open zmdi-hc-fw zmdi-hc-2x" />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItem>

            <Divider />
            <Divider light />
            <ListItem button>
                <ListItemIcon>
                    <i className="zmdi zmdi-star zmdi-hc-fw zmdi-hc-2x" />
                </ListItemIcon>
                <ListItemText primary="Starred"/>
            </ListItem>
            <Divider />

            <Divider light />
            <ListItem button>
                <ListItemIcon>
                    <i className="zmdi zmdi-delete zmdi-hc-fw zmdi-hc-2x" />
                </ListItemIcon>
                <ListItemText primary="Trash" />
            </ListItem>
        </List>
    );
}

export default (ListDividers);