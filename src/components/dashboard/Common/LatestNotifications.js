import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs, {Tab} from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import CardLayout from "components/CardLayout/index";
import UserList from "./UserList";
import CardMenu from "components/dashboard/Common/CardMenu";


function TabContainer({children, dir}) {
    return (
        <div dir={dir}>
            {children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

class LatestNotifications extends Component {

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    onOptionMenuSelect = event => {
        this.setState({menuState: true, anchorEl: event.currentTarget});
    };
    handleRequestClose = () => {
        this.setState({menuState: false});
    };

    constructor() {
        super();
        this.state = {
            value: 0,
            anchorEl: undefined,
            menuState: false,
        }
    }

    render() {
        const {anchorEl, menuState} = this.state;
        const {theme} = this.props;

        return (
            <CardLayout styleName="col-lg-12">
                <div className="jr-card-header mb-3 d-flex align-items-center">
                    <div className="mr-auto">
                        <h3 className="card-heading mb-0">
                            <i className="zmdi zmdi-notifications-active mr-2"/>
                            Latest Notifications
                        </h3>
                    </div>
                    <IconButton className="size-30" onClick={this.onOptionMenuSelect.bind(this)}>
                        <i className="zmdi zmdi-more-vert"/>
                    </IconButton>
                </div>

                <div className="tab-notifications">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        fullWidth
                    >
                        <Tab className="tab" label="App Notifications"/>

                        <Tab className="tab" label="Announcements"/>
                    </Tabs>
                </div>

                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <UserList users={this.props.appNotification}/>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <UserList users={this.props.announcementsNotification}/>
                    </TabContainer>

                </SwipeableViews>
                <CardMenu menuState={menuState} anchorEl={anchorEl}
                          handleRequestClose={this.handleRequestClose.bind(this)}/>
            </CardLayout>

        );
    }
}

LatestNotifications.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withStyles(null, {withTheme: true})(LatestNotifications);