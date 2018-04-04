import React from 'react';
import timeLineData from '../timeLineData';
import DefaultTimeLineItem from 'components/timeline/DefaultTimeLineItem';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

const Default = ({match}) => {
    return (
        <div>
            <ContainerHeader title={<IntlMessages id="sidebar.timeLine.default"/>} match={match}/>
            <div className="timeline-section timeline-center clearfix animated slideInUpTiny animation-duration-3">
                {timeLineData.map((timeLine, index) => <DefaultTimeLineItem key={index}
                                                                            styleName={index % 2 === 0 ? '' : 'timeline-inverted'}
                                                                            timeLine={timeLine}/>)}
            </div>
        </div>
    )
};

export default Default;

