import React from 'react';

import IntlMessages from 'util/IntlMessages';
import CardBox from 'components/CardBox/index';
import ContainerHeader from 'components/ContainerHeader/index';
import Basic from './Basic';
import Classic from './Classic';
import Circle from './Circle';
import Dark from './Dark';

const PricingTable = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="extraElements.pricingTable"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12" cardStyle="p-0 no-shadow bg-transparent"
                         heading={<IntlMessages id="pricingTable.basic"/>}>
                    <Basic/>
                </CardBox>
                <CardBox styleName="col-lg-12" cardStyle="p-0 no-shadow bg-transparent"
                         heading={<IntlMessages id="pricingTable.circle"/>}>
                    <Circle/>
                </CardBox>
                <CardBox styleName="col-lg-12" cardStyle="p-0 no-shadow bg-transparent"
                         heading={<IntlMessages id="pricingTable.classic"/>}>
                    <Classic/>
                </CardBox>
                <CardBox styleName="col-lg-12" cardStyle="p-0 no-shadow bg-transparent"
                         heading={<IntlMessages id="pricingTable.dark"/>}>
                    <Dark/>
                </CardBox>
            </div>
        </div>
    );
};

export default PricingTable;

