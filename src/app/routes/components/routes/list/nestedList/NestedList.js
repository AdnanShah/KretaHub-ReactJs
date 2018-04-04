import React from 'react';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

class NestedList extends React.Component {
    state = {open: true};

    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        return (
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <i className="zmdi zmdi-email zmdi-hc-fw zmdi-hc-2x"/>
                    </ListItemIcon>
                    <ListItemText inset primary="Inbox"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <i className="zmdi zmdi-mail-send zmdi-hc-fw zmdi-hc-2x"/>
                    </ListItemIcon>
                    <ListItemText inset primary="Sent"/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <i className="zmdi zmdi-network zmdi-hc-fw zmdi-hc-2x"/>
                    </ListItemIcon>
                    <ListItemText inset primary="Network"/>
                </ListItem>

                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <i className="zmdi zmdi-star zmdi-hc-fw zmdi-hc-2x"/>
                    </ListItemIcon>
                    <ListItemText inset primary="Starred"/>
                    {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>

                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        <ListItem button>
                            <ListItemIcon>
                                <i className="zmdi zmdi-gps zmdi-hc-fw zmdi-hc-2x"/>
                            </ListItemIcon>
                            <ListItemText inset primary="Gps"/>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        );
    }
}

export default NestedList;