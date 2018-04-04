import React from 'react';
import MarkerClustererExample from './Components/MarkerClustererEx';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';


const MapClustering = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.map.mapClustering"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <MarkerClustererExample />
                </CardBox>
            </div>
        </div>
    );
};

export default MapClustering;
