import React from 'react';
import MapPopupInfo from './Components/MapPopupInfo';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';


const PopUpInfo = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.map.popupInfo"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <MapPopupInfo />
                </CardBox>
            </div>
        </div>
    );
};

export default PopUpInfo;
