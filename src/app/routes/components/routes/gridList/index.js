import React from 'react';
import ImageGridList from './image/ImageGridList';
import TitlebarGridList from './titlebars/TitlebarGridList';
import SingleLineGridList from './singleLine/SingleLineGridList';
import AdvancedGridList from './advance/AdvancedGridList';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';

const GridLists = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.gridList"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-sm-6 col-12"
                         heading={<IntlMessages id="component.gridList.image"/>}>
                    <ImageGridList/>
                </CardBox>

                <CardBox styleName="col-sm-6 col-12"
                         heading={<IntlMessages id="component.gridList.advanced"/>}>
                    <AdvancedGridList/>
                </CardBox>

                <CardBox styleName="col-lg-12"
                         heading={<IntlMessages id="component.gridList.singleLine"/>}>
                    <SingleLineGridList/>
                </CardBox>

                <CardBox styleName="col-lg-12 col-12"
                         heading={<IntlMessages id="component.gridList.withTitlebars"/>}>
                    <TitlebarGridList/>
                </CardBox>
            </div>
        </div>
    );
};

export default (GridLists);

