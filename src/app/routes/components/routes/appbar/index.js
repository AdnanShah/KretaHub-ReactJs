import React from 'react';
import SimpleAppBar from './simple/SimpleAppBar';
import ButtonAppBar from './button/ButtonAppBar';
import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox/index';
import FullFeatured from './fullyFeatured/FullFeatured';
import IntlMessages from 'util/IntlMessages';

const AppBar = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.appbar"/>} match={match}/>

            <div className="row mb-md-4">
                <CardBox cardStyle="p-0" heading={<IntlMessages id="component.appbar.simple"/>}
                         headerOutside>
                    <SimpleAppBar/>
                </CardBox>

                <CardBox cardStyle="p-0" heading={<IntlMessages id="component.appbar.colored"/>}
                         headerOutside>
                    <ButtonAppBar/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" cardStyle="p-0"
                         heading={<IntlMessages id="component.appbar.fullyFeatured"/>} headerOutside>
                    <FullFeatured/>
                </CardBox>
            </div>
        </div>
    );
};

export default (AppBar);
