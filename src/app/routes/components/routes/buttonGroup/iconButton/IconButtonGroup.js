import React from 'react';
import {ButtonGroup } from 'reactstrap';
import Button from 'material-ui/Button';

const IconButtonGroup = ({isVertical}) => {
    return (
        <ButtonGroup vertical={isVertical}>
            <Button className="jr-btn text-muted bg-grey lighten-2">
                <i className="zmdi zmdi-shopping-basket zmdi-hc-fw "/>
            </Button>
            <Button className="jr-btn text-muted bg-grey lighten-2">
                <i className="zmdi zmdi-shield-check zmdi-hc-fw "/>
            </Button>
            <Button className="jr-btn text-muted bg-grey lighten-2">
                <i className="zmdi zmdi-notifications-active zmdi-hc-fw"/>
            </Button>
        </ButtonGroup>
    );
};

export default IconButtonGroup;