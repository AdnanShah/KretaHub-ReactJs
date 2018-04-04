import React from 'react';
import TrafficLayerEx from './Components/TrafficLayerEx';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const TrafficLayer = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.map.trafficLayer"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <TrafficLayerEx/>
                </CardBox>
            </div>
        </div>
    );
};

export default TrafficLayer;
