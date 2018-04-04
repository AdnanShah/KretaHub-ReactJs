import React from 'react';
import {ButtonGroup} from 'reactstrap';
import Button from 'material-ui/Button';

const HighLightedButtonGroup = ({isVertical}) => {
    return (
        <ButtonGroup vertical={isVertical}>
            <Button variant="raised" className="jr-btn text-muted bg-grey lighten-2 no-shadow">Left</Button>
            <Button color="primary" variant="raised" className="jr-btn  no-shadow">Middle</Button>
            <Button variant="raised" className="jr-btn text-muted bg-grey lighten-2 no-shadow">Right</Button>
        </ButtonGroup>
    );
};

export default HighLightedButtonGroup;