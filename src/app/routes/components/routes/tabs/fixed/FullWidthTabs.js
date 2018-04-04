import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';

function TabContainer({children, dir}) {
    return (
        <div dir={dir} style={{padding: 8 * 3}}>
            {children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
});

class FullWidthTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    render() {
        const {theme} = this.props;

        return (
            <div className="w-100">
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                        scrollable
                        scrollButtons="on"
                    >
                        <Tab className="tab" label="Item One" />
                        <Tab className="tab" label="Item Two" />
                        <Tab className="tab" label="Item Three" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>Item One</TabContainer>
                    <TabContainer dir={theme.direction}>Item Two</TabContainer>
                    <TabContainer dir={theme.direction}>Item Three</TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withStyles(null, {withTheme: true})(FullWidthTabs);