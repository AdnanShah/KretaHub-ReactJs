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

class ScrollableTabsButtonPrevent extends Component {
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
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off">
                        <Tab icon={<PhoneIcon />} />
                        <Tab icon={<FavoriteIcon />} />
                        <Tab icon={<PersonPinIcon />} />
                        <Tab icon={<HelpIcon />} />
                        <Tab icon={<ShoppingBasket />} />
                        <Tab icon={<ThumbDown />} />
                        <Tab icon={<ThumbUp />} />
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

export default ScrollableTabsButtonPrevent;