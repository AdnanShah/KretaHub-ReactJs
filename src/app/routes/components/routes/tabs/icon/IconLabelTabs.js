import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';

export default class IconLabelTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        return (
            <Paper>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    fullWidth
                    indicatorColor="secondary"
                    textColor="secondary"
                    scrollable
                    scrollButtons="on"
                >
                    <Tab icon={<PhoneIcon />} label="RECENTS" />
                    <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                    <Tab icon={<PersonPinIcon />} label="NEARBY" />
                </Tabs>
            </Paper>
        );
    }
}