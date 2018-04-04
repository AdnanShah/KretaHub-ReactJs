import React from 'react';
import 'jquery-slimscroll/jquery.slimscroll.min';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';

const lists = [
    {
        headerId: 0,
        heading: 'Components',
        items: [
            {id: 1, icon: 'label', name: 'Label', color: 'primary'},
            {id: 2, icon: 'layers', name: 'Layer', color: 'info'},
            {id: 3, icon: 'lamp', name: 'Lamp', color: 'secondary'},
        ]
    },
    {
        headerId: 1,
        heading: 'Movies',
        items: [
            {id: 4, icon: 'movie', name: 'Movie', color: 'warning'},
            {id: 5, icon: 'puzzle-piece', name: 'Puzzle', color: 'danger'}
        ]
    }, {
        headerId: 2,
        heading: 'Social',
        items: [
            {id: 6, icon: 'facebook', name: 'Facebook', color: 'primary'},
            {id: 7, icon: 'google-earth', name: 'Google Eearth', color: 'danger'},
            {id: 8, icon: 'twitter', name: 'twitter', color: 'blue'}
        ]
    }
];


class PinnedSubheaderList extends React.Component {
    state = {
        checked: [0],
    };

    componentDidMount() {
        $('.pinned-list').slimscroll({
            height: '370px',
        });
    }

    handleToggle = (event, value) => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        return (
            <List className="pinned-list" subheader={<div/>}>
                {lists.map((listItem) => (
                    <div key={`section-${listItem.headerId}`}>
                        <ListSubheader className="text-muted bg-grey lighten-4">{listItem.heading}</ListSubheader>
                        {listItem.items.map(item => (
                            <ListItem button key={`section-${listItem.headerId}-${item.id}`}
                                      onClick={event => this.handleToggle(event, item.id)}>
                                <Checkbox color="primary"
                                          checked={this.state.checked.indexOf(item.id) !== -1}
                                          tabIndex="-1"
                                />

                                <ListItemText primary={item.name}/>
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <i className={`zmdi zmdi-${item.icon} text-${item.color}`}/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </div>
                ))}
            </List>
        );
    }
}


export default PinnedSubheaderList;