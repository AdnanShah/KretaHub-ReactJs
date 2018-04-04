import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';

class DisabledTabs extends Component {
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
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                    scrollable
                    scrollButtons="on"
                >
                    <Tab className="tab" label="Active" />
                    <Tab className="tab" label="Disabled" disabled />
                    <Tab className="tab" label="Active" />
                </Tabs>
            </Paper>
        );
    }
}

export default DisabledTabs;