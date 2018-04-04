import React from 'react';

import CardBox from 'components/CardBox/index';
import ContainerHeader from 'components/ContainerHeader/index';
import Basic from './Basic';
import IntlMessages from 'util/IntlMessages';

const Callouts = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="extraElements.callouts"/>} match={match}/>

            <div className="row">
                <CardBox childrenStyle="p-0" styleName="col-lg-12" heading={<IntlMessages id="callouts.basic"/>}>
                    <Basic/>
                </CardBox>
            </div>
        </div>
    );
};

export default Callouts;

