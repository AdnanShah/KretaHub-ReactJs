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

class BasicTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;

        return (
            <div>
                <AppBar className="bg-primary" position="static">
                    <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="on">
                        <Tab className="tab" label="Item One" />
                        <Tab className="tab" label="Item Two" />
                        <Tab className="tab" label="Item Three" />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                <TabContainer>
                    {'Item One'}
                </TabContainer>}
                {value === 1 &&
                <TabContainer>
                    {'Item Two'}
                </TabContainer>}
                {value === 2 &&
                <TabContainer>
                    {'Item Three'}
                </TabContainer>}
            </div>
        );
    }
}

export default BasicTabs;