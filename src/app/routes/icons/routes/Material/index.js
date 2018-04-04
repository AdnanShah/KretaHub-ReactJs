import React from 'react';
import Icons from './Icons';

import CardBox from 'components/CardBox/index';
import ContainerHeader from 'components/ContainerHeader/index'
import IntlMessages from 'util/IntlMessages';

const Material = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="icon.material"/>} match={match}/>

            <div className="row">
                <CardBox childrenStyle="text-center" styleName="col-lg-12" heading=" Material Icons">
                    <Icons/>
                </CardBox>
            </div>
        </div>
    );
};

export default Material;

