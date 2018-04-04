import React, {Component} from 'react';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

const lists = [
    {id: 1, icon: 'facebook', name: 'Facebook', color: 'primary'},
    {id: 2, icon: 'apple', name: 'Apple', color: 'info'},
    {id: 3, icon: 'github', name: 'GitHub', color: 'secondary'},
    {id: 4, icon: 'google-maps', name: 'Google Map', color: 'warning'},
    {id: 5, icon: 'instagram', name: 'Instagram', color: 'danger'}];

class RightIconList extends Component {
    render() {
        return (
            <List className="pb-0">
                {lists.map(item =>
                    <div style={{borderBottom: 1, borderBottomColor: 'red'}} key={item.id}>
                        <ListItem style={{borderBottom: 1, borderBottomColor: 'red'}} button key={item.id}
                                  onClick={event => this.handleToggle(event, item.id)}>
                            <ListItemText primary={item.name}/>
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <i className={`zmdi zmdi-${item.icon} text-${item.color}`}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider light/>
                    </div>
                )}
            </List>
        );
    }
}

export default RightIconList;