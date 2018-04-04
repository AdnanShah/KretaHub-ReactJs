import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';

function TabContainer(props) {
    return (
        <div style={{padding: 20}}>
            {props.children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class BasicTabsWrappedLabel extends Component {
    state = {
        value: 'one',
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;

        return (
            <div className="w-100">
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="on">
                        <Tab value="one" label="New Arrivals in the Longest Text of Nonfiction" />
                        <Tab value="two" label="Item Two" />
                        <Tab value="three" label="Item Three" />
                    </Tabs>
                </AppBar>
                {value === 'one' &&
                <TabContainer>
                    {'Item One'}
                </TabContainer>}
                {value === 'two' &&
                <TabContainer>
                    {'Item Two'}
                </TabContainer>}
                {value === 'three' &&
                <TabContainer>
                    {'Item Three'}
                </TabContainer>}
            </div>
        );
    }
}

export default BasicTabsWrappedLabel;