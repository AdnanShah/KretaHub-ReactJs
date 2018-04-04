import React from 'react';

const ChartCard = ({styleName, children}) => {
    return (
        <div className={`card border-0 shadow ${styleName}`}>
            <div className="chart-header">
                {children[0]}
            </div>
            {children[1]}
        </div>
    )
};

export default ChartCard;

