import React from 'react';
import EventHandler from './Components/EventHandler';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const EventHanlder = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.map.eventListener"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <EventHandler/>
                </CardBox>
            </div>
        </div>
    );
};

export default EventHanlder;
