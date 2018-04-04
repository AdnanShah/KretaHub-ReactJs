import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import {Config} from 'constants/ThemeColors';
import SidenavContent from './SidenavContent';
import UserInfo from 'components/UserInfo';
import {COLLAPSED_DRAWER, FIXED_DRAWER} from 'constants/ActionTypes';
import {updateWindowWidth} from 'actions/Setting';

class SideNav extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.props.updateWindowWidth($(window).width())
        });
    }

    render() {
        const {navCollapsed, drawerType, width} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-xl-flex' : drawerType.includes(COLLAPSED_DRAWER) ? '' : 'd-flex';
        let type = 'permanent';
        if (drawerType.includes(COLLAPSED_DRAWER) || (drawerType.includes(FIXED_DRAWER) && width < 1200)) {
            type = 'temporary';
        }

        return (
            <div className={`app-sidebar d-none ${drawerStyle}`}>
                <Drawer className="app-sidebar-content"
                        variant={type}
                        open={type.includes('temporary') ? navCollapsed : true}
                        onClose={this.props.onToggleCollapsedNav}
                        classes={{
                            paper: 'side-nav',
                        }}
                >
                    <UserInfo/>
                    <SidenavContent/>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = ({settings}) => {
    const {navCollapsed, drawerType, width} = settings;
    return {navCollapsed, drawerType, width}
};

export default withRouter(connect(mapStateToProps, {updateWindowWidth})(SideNav));

