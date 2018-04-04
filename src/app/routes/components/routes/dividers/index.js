import React from 'react';
import ListDividers from './list/ListDividers';
import InsetDividers from './inset/InsetDividers';
import InsetAvatarDividers from './insetAvatar/InsetAvatarDividers';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const Dividers = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.dividers"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-4 col-sm-6" cardStyle="p-0"
                         heading={<IntlMessages id="component.dividers.list"/>} headerOutside>
                    <ListDividers/>
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" cardStyle="p-0"
                         heading={<IntlMessages id="component.dividers.inset"/>} headerOutside>
                    <InsetDividers/>
                </CardBox>
                <CardBox styleName="col-lg-4 col-12" cardStyle="p-0"
                         heading={<IntlMessages id="component.dividers.inset"/>} headerOutside>
                    <InsetAvatarDividers/>
                </CardBox>
            </div>
        </div>
    );
};

export default Dividers;

