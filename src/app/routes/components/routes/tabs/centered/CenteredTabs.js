import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';

class CenteredTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {

        return (
            <Paper className="w-100">
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    scrollable
                    scrollButtons="on"
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Paper>
        );
    }
}

export default CenteredTabs;