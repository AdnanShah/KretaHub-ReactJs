import React from 'react';
import Callout from "components/callouts/Callout";
import calloutsData from "../calloutsData";

const Basic = () => {
    return (
        <div id="callouts">
            {calloutsData.map((callout, index) => <Callout key={index} styleName={index % 2 === 0 ? 'odd' : 'even'}
                                                           callout={callout} />
            )}
        </div>
    )
};

export default Basic;

