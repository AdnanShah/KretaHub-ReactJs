import React from 'react';
import MapDirections from './Components/MapDirections';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const Directions = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.map.mapDirection"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <MapDirections/>
                </CardBox>
            </div>
        </div>
    );
};

export default Directions;
