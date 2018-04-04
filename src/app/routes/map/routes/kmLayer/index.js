import React from 'react';
import MapKmLayer from './Components/MapKmLayer';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const KmLayer = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.map.kmLayer"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <MapKmLayer />
                </CardBox>
            </div>
        </div>
    );
};

export default KmLayer;
