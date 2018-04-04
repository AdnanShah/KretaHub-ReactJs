import React from 'react';
import SimpleMenu from './sample/SimpleMenu';
import SimpleListMenu from './selected/SimpleListMenu';
import LongMenu from './long/LongMenu';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import UserInfo from 'components/UserInfo/index';
import PaperSheet from './paper/PaperSheet';
import IntlMessages from 'util/IntlMessages';

const MenusNPaper = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.menusPaper"/>} match={match}/>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-3 col-md-6" cardStyle="py-sm-5 text-center"
                         heading={<IntlMessages id="component.menusPaper.simple"/>} headerOutside>
                    <SimpleMenu/>
                </CardBox>

                <CardBox styleName="col-lg-3 col-md-6" cardStyle="py-sm-5 d-flex justify-content-center"
                         heading={<IntlMessages id="component.menusPaper.withIcon"/>} headerOutside>
                    <UserInfo/>
                </CardBox>

                <CardBox styleName="col-lg-3 col-md-6" cardStyle="py-sm-5 text-center"
                         heading={<IntlMessages id="component.menusPaper.withMoreButton"/>} headerOutside>
                    <LongMenu/>
                </CardBox>

                <CardBox styleName="col-lg-3 col-md-6" cardStyle="py-sm-4 text-center"
                         heading={<IntlMessages id="component.menusPaper.withSelectedValue"/>}
                         headerOutside>
                    <SimpleListMenu/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" cardStyle="p-0 bg-transparent no-shadow"
                         heading={<IntlMessages id="component.menusPaper.paper"/>} headerOutside>
                    <PaperSheet/>
                </CardBox>
            </div>
        </div>
    );
};

export default MenusNPaper;

