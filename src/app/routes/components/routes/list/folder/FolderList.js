import React from 'react';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

function FolderList() {
    return (
        <List>

            <ListItem button>
                <Avatar>
                    <i className="zmdi zmdi-folder zmdi-hc-fw zmdi-hc-lg text-white"/>
                </Avatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2016" />
            </ListItem>

            <ListItem button>
                <Avatar>
                    <i className="zmdi zmdi-file zmdi-hc-fw zmdi-hc-lg text-white"/>
                </Avatar>
                <ListItemText primary="Work" secondary="Jan 7, 2016" />
            </ListItem>

            <ListItem button>
                <Avatar>
                    <i className="zmdi zmdi-account zmdi-hc-fw zmdi-hc-lg text-white"/>
                </Avatar>
                <ListItemText primary="Meetings" secondary="Jan 7, 2016" />
            </ListItem>

        </List>
    );
}

export default FolderList;