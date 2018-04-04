import React from 'react';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'

import FlatButtons from './flat/FlatButtons';
import FAB from './fab/FloatingActionButtons';
import Raised from './raised/RaisedButton';
import IconButtons from './icon/IconButtons';
import ColorScheme from './colorScheme/ColorScheme';
import Complex from './complex/ComplexButtons';
import DifferentSizesButtons from './differentSizes/DifferentSizesButtons';
import SocialMediaButtons from './socialMediaButtons/SocialMediaButtons';
import IntlMessages from 'util/IntlMessages';

const Buttons = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.buttons"/>} match={match}/>
            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12"
                         heading={<IntlMessages id="component.buttons.colorScheme"/>}>
                    <div><IntlMessages id="component.buttons.colorSchemeTxt"/></div>
                    <ColorScheme/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12"
                         heading={<IntlMessages id="component.buttons.icon"/>}>
                    <div><IntlMessages id="component.buttons.iconTxt"/></div>
                    <IconButtons/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-6 col-12"
                         heading={<IntlMessages id="component.buttons.differentSizes"/>}>
                    <div><IntlMessages id="component.buttons.differentSizesTxt"/></div>
                    <DifferentSizesButtons/>
                </CardBox>

                <CardBox styleName="col-lg-6 col-12"
                         heading={<IntlMessages id="component.buttons.flatFullWidth"/>}>
                    <div><IntlMessages id="component.buttons.flatFullWidthTxt"/></div>
                    <FlatButtons/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-6 col-12"
                         heading={<IntlMessages id="component.buttons.raised"/>}>
                    <div><IntlMessages id="component.buttons.raisedTxt"/>
                    </div>
                    <Raised/>
                </CardBox>

                <CardBox styleName="col-lg-6 col-12"
                         heading={<IntlMessages id="component.buttons.fab"/>}>
                    <div><IntlMessages id="component.buttons.fabTxt"/></div>
                    <FAB/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12"
                         heading={<IntlMessages id="component.buttons.socialMedia"/>}>
                    <div><IntlMessages id="component.buttons.socialMediaTxt"/></div>
                    <SocialMediaButtons/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12"
                         heading={<IntlMessages id="component.buttons.complex"/>}>
                    <Complex/>
                </CardBox>
            </div>
        </div>
    );
};
export default Buttons;