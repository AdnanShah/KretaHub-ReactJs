import React, {Component} from 'react';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {Badge} from 'reactstrap';

const lists = [
    {id: 1, badge: '', name: 'Facebook', color: ''},
    {id: 2, badge: '', name: 'Apple', color: ''},
    {id: 3, badge: 'new', name: 'GitHub', color: 'primary'},
    {id: 4, badge: '', name: 'Google Map', color: ''},
    {id: 5, badge: '23-new', name: 'Instagram', color: 'danger'}];

class BadgeIconList extends Component {
    render() {
        return (
            <List className="pb-0">
                {lists.map(item =>
                    <div key={item.id}>
                        <ListItem button key={item.id}
                                  onClick={event => this.handleToggle(event, item.id)}>
                            <ListItemText primary={item.name} />
                            <ListItemSecondaryAction>
                                <Badge className="mt-3 mr-2" href="javascript:void(0)" color={item.color}>{item.badge}</Badge>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider light/>
                    </div>
                )}
            </List>
        );
    }
}

export default BadgeIconList;