import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {COLLAPSED_DRAWER, FIXED_DRAWER, MINI_DRAWER} from 'constants/ActionTypes'

import {setDrawerType} from 'actions/index';

import {ButtonGroup} from 'reactstrap';
import Button from 'material-ui/Button';

class Customizer extends React.Component {
    setFixedDrawer = () => {
        this.props.setDrawerType(FIXED_DRAWER);
    };
    setCollapsedDrawer = () => {
        this.props.setDrawerType(COLLAPSED_DRAWER);
    };
    setMiniDrawer = () => {
        this.props.setDrawerType(MINI_DRAWER);
    };

    render() {
        const {drawerType} = this.props;

        return (
            <ButtonGroup>
                <Button color="primary" variant="raised"
                        className={`jr-btn no-shadow ${drawerType !== FIXED_DRAWER && 'text-muted bg-grey lighten-2'} `}
                    onClick={this.setFixedDrawer.bind(this)}>Fixed</Button>
                <Button color="primary" variant="raised"
                        className={`jr-btn no-shadow ${drawerType !== COLLAPSED_DRAWER && 'text-muted bg-grey lighten-2'} `}
                        onClick={this.setCollapsedDrawer.bind(this)}>Collapsed</Button>
                <Button color="primary" variant="raised"
                        className={`jr-btn no-shadow ${drawerType !== MINI_DRAWER && 'text-muted bg-grey lighten-2'} `}
                        onClick={this.setMiniDrawer.bind(this)}>Mini</Button></ButtonGroup>        );
    }
}

const mapStateToProps = ({settings}) => {
    const {drawerType} = settings;
    return {drawerType}
};

export default withRouter(connect(mapStateToProps, {setDrawerType})(Customizer));

