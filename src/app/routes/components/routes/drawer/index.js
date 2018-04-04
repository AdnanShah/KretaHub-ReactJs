import React from 'react';
import UndockedDrawer from './temporary/TemporaryDrawer';
import PermanentDrawer from './permanent/PermanentDrawer';
import PersistentDrawer from './persistent/PersistentDrawer';
import MiniDrawer from './mini/MiniDrawer';
import ResponsiveDrawer from './responsive/ResponsiveDrawer';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';

const Drawer = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.drawer"/>} match={match}/>

            <div className="row mb-md-4">
                <div className="col-12">
                    <UndockedDrawer/>
                </div>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-12" cardStyle="p-0"
                         heading={<IntlMessages id="component.drawer.persistent"/>} headerOutside>
                    <PersistentDrawer/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-12" cardStyle="p-0"
                         heading={<IntlMessages id="component.drawer.permanent"/>} headerOutside>
                    <PermanentDrawer/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-12" cardStyle="p-0"
                         heading={<IntlMessages id="component.drawer.mini"/>} headerOutside>
                    <MiniDrawer/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-12" cardStyle="p-0"
                         heading={<IntlMessages id="component.drawer.responsive"/>} headerOutside>
                    <ResponsiveDrawer/>
                </CardBox>
            </div>
        </div>
    );
};

export default (Drawer);

