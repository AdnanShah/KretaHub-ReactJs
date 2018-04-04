import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ThumbUp from 'material-ui-icons/ThumbUp';

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

class ScrollableTabsButtonForce extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;

        return (
            <div className="w-100">
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Item One" icon={<PhoneIcon />} />
                        <Tab label="Item Two" icon={<FavoriteIcon />} />
                        <Tab label="Item Three" icon={<PersonPinIcon />} />
                        <Tab label="Item Four" icon={<HelpIcon />} />
                        <Tab label="Item Five" icon={<ShoppingBasket />} />
                        <Tab label="Item Six" icon={<ThumbDown />} />
                        <Tab label="Item Seven" icon={<ThumbUp />} />
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
                {value === 3 &&
                <TabContainer>
                    {'Item Four'}
                </TabContainer>}
                {value === 4 &&
                <TabContainer>
                    {'Item Five'}
                </TabContainer>}
                {value === 5 &&
                <TabContainer>
                    {'Item Six'}
                </TabContainer>}
                {value === 6 &&
                <TabContainer>
                    {'Item Seven'}
                </TabContainer>}
            </div>
        );
    }
}

export default ScrollableTabsButtonForce;