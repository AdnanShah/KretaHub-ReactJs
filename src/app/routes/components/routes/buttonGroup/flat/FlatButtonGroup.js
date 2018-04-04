import React from 'react';
import {ButtonGroup } from 'reactstrap';
import Button from 'material-ui/Button';

const FlatButtonGroup = ({isVertical}) => {
    return (
        <ButtonGroup vertical={isVertical}>
            <Button className="jr-btn text-muted" color="default">Left</Button>{' '}
            <Button className="jr-btn" color="primary">Middle</Button>{' '}
            <Button className="jr-btn text-muted" color="default">Right</Button>
        </ButtonGroup>
    );
};

export default FlatButtonGroup;