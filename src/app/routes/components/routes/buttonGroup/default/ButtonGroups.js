import React from 'react';
import {ButtonGroup } from 'reactstrap';
import Button from 'material-ui/Button';

const ButtonGroups = ({isVertical}) => {
    return (
        <ButtonGroup vertical={isVertical}>
            <Button className="jr-btn text-muted bg-grey lighten-2" color="default">Left</Button>{' '}
            <Button className="jr-btn text-muted bg-grey lighten-2" color="default">Middle</Button>{' '}
            <Button className="jr-btn text-muted bg-grey lighten-2" color="default">Right</Button>
        </ButtonGroup>
    );
};

export default ButtonGroups;