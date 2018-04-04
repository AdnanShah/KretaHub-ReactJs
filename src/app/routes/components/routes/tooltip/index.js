import React from 'react';
import ControlledTooltips from './controlled/ControlledTooltips';
import PositionedTooltips from './positional/PositionedTooltips';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import Avatar from 'material-ui/Avatar';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const Tooltips = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.tooltips"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center"
                         childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.tooltips.avatar"/>}>
                    <Tooltip id="tooltip-icon" title="Hello" placement="bottom">
                        <Avatar className="size-60" alt="Remy Sharp" src="http://via.placeholder.com/150x150"/>
                    </Tooltip>
                </CardBox>

                <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center"
                         childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.tooltips.button"/>}>
                    <Tooltip id="tooltip-fab" title="Plus" placement="bottom">
                        <Button variant="fab" color="primary">
                            <i className="zmdi zmdi-plus zmdi-hc-lg"/>
                        </Button>
                    </Tooltip>
                </CardBox>

                <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center"
                         childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.tooltips.icon"/>}>
                    <Tooltip id="tooltip-icon" title="Add User" placement="bottom">
                        <IconButton>
                            <i className="zmdi zmdi-account-add"/>
                        </IconButton>
                    </Tooltip>
                </CardBox>

                <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center"
                         childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.tooltips.controlled"/>}>
                    <ControlledTooltips/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-xl-12" heading={<IntlMessages id="component.tooltips.positioned"/>}>
                    <PositionedTooltips/>
                </CardBox>
            </div>
        </div>
    );
};

export default Tooltips;