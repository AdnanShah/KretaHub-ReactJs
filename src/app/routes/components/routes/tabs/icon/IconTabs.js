import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';

export default class IconTabs extends Component {
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
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable
                    scrollButtons="on"
                >
                    <Tab className="tab" icon={<PhoneIcon />} />
                    <Tab className="tab" icon={<FavoriteIcon />} />
                    <Tab className="tab" icon={<PersonPinIcon />} />
                </Tabs>
            </Paper>
        );
    }
}