import React from 'react';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';

function PositionedTooltips() {
    return (
        <div className="jr-btn-group">
            <Tooltip className="d-inline-block" id="tooltip-top-start" title="Add" placement="top-start">
                <Button variant="raised" className="jr-btn" color="primary">top-start</Button>
            </Tooltip>
            <Tooltip className="d-inline-block" id="tooltip-top" title="Add" placement="top">
                <Button variant="raised" className="jr-btn" color="primary">top</Button>
            </Tooltip>
            <Tooltip className="d-inline-block" id="tooltip-top-end" title="Add" placement="top-end">
                <Button variant="raised" className="jr-btn" color="primary">top-end</Button>
            </Tooltip>
            <Tooltip className="d-inline-block" id="tooltip-left-start" title="Add" placement="left-start">
                <Button variant="raised" className="jr-btn" color="primary">left-start</Button>
            </Tooltip>
            <Tooltip className="d-inline-block" id="tooltip-left" title="Add" placement="left">
                <Button variant="raised" className="jr-btn" color="primary">left</Button>
            </Tooltip>
            <Tooltip className="d-inline-block" id="tooltip-left-end" title="Add" placement="left-end">
                <Button variant="raised" className="jr-btn" color="primary">left-end</Button>
            </Tooltip>

            <Tooltip className="d-inline-block" id="tooltip-right-start" title="Add" placement="right-start">
                <Button variant="raised" className="jr-btn" color="primary">right-start</Button>
            </Tooltip>
            <Tooltip className="d-inline-block" id="tooltip-right" title="Add" placement="right">
                <Button variant="raised" className="jr-btn" color="primary">right</Button>
            </Tooltip>
            <Tooltip className="d-inline-block" id="tooltip-right-end" title="Add" placement="right-end">
                <Button variant="raised" className="jr-btn" color="primary">right-end</Button>
            </Tooltip>
            <Tooltip className="d-inline-block" id="tooltip-bottom-start" title="Add" placement="bottom-start">
                <Button variant="raised" className="jr-btn" color="primary">bottom-start</Button>
            </Tooltip>
            <Tooltip className="d-inline-block" id="tooltip-bottom" title="Add" placement="bottom">
                <Button variant="raised" className="jr-btn" color="primary">bottom</Button>
            </Tooltip>
            <Tooltip className="d-inline-block" id="tooltip-bottom-end" title="Add" placement="bottom-end">
                <Button variant="raised" className="jr-btn" color="primary">bottom-end</Button>
            </Tooltip>

        </div>
    );
}

export default PositionedTooltips;