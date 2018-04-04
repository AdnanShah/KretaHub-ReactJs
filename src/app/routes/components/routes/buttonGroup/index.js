import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import CardBox from 'components/CardBox';
import ButtonGroups from './default/ButtonGroups';
import FlatButtonGroup from './flat/FlatButtonGroup';
import HighLightedButtonGroup from './highLighted/HighLightedButtonGroup';
import IconFlatButtonGroup from './iconFlatButton/IconFlatButtonGroup';
import IconButtonGroup from './iconButton/IconButtonGroup';
import NestedButtonGroup from './nested/NestedButtonGroup';
import IntlMessages from 'util/IntlMessages';

const ButtonGroup = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.buttonGroup"/>} match={match}/>

            <div className="jr-entry-header">
                <h3 className="entry-heading">
                    <IntlMessages id="component.buttonGroup.horizontalVariations"/>
                </h3>
                <div className="entry-description">
                    <IntlMessages id="component.buttonGroup.defaultStyle"/>
                </div>
            </div>

            <div className="row">
                <CardBox styleName="col-xl-4 col-md-6 col-12"
                         heading={<IntlMessages
                             id="component.buttonGroup.default"/>}>
                    <div><IntlMessages id="component.buttonGroup.defaultStyle"/></div>
                    <ButtonGroups/>
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-6 col-12"
                         heading={<IntlMessages id="component.buttonGroup.flat"/>}>
                    <div><IntlMessages id="component.buttonGroup.flatStyle"/></div>
                    <FlatButtonGroup/>
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-6 col-12"
                         heading={<IntlMessages
                             id="component.buttonGroup.highlighted"/>}>
                    <div><IntlMessages id="component.buttonGroup.highlightedStyle"/></div>
                    <HighLightedButtonGroup/>
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-6 col-12"
                         heading={<IntlMessages id="component.buttonGroup.icon"/>}>
                    <div><IntlMessages id="component.buttonGroup.defaultStyle"/></div>
                    <IconButtonGroup/>
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-6 col-12"
                         heading={<IntlMessages
                             id="component.buttonGroup.iconFlat"/>}>
                    <div><IntlMessages id="component.buttonGroup.defaultStyle"/></div>
                    <IconFlatButtonGroup/>
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-6 col-12"
                         heading={<IntlMessages id="component.buttonGroup.nested"/>}>
                    <div><IntlMessages id="component.buttonGroup.defaultStyle"/></div>
                    <NestedButtonGroup/>
                </CardBox>
            </div>

            <div className="jr-entry-header">
                <h3 className="entry-heading">Vertical Variations</h3>
                <div className="entry-description">
                    <IntlMessages id="component.buttonGroup.defaultStyle"/>
                </div>
            </div>

            <div className="row">
                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center"
                         heading={<IntlMessages
                             id="component.buttonGroup.default"/>}>
                    <div><IntlMessages id="component.buttonGroup.defaultStyle"/></div>
                    <ButtonGroups isVertical/>
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center"
                         heading={<IntlMessages id="component.buttonGroup.flat"/>}>
                    <div><IntlMessages id="component.buttonGroup.flatStyle"/></div>
                    <FlatButtonGroup isVertical/>
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center"
                         heading={<IntlMessages
                             id="component.buttonGroup.highlighted"/>}>
                    <div><IntlMessages id="component.buttonGroup.highlightedStyle"/></div>
                    <HighLightedButtonGroup isVertical/>
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center"
                         heading={<IntlMessages id="component.buttonGroup.icon"/>}>
                    <div><IntlMessages id="component.buttonGroup.defaultStyle"/></div>
                    <IconButtonGroup isVertical/>
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center"
                         heading={<IntlMessages
                             id="component.buttonGroup.iconFlat"/>}>
                    <div><IntlMessages id="component.buttonGroup.defaultStyle"/></div>
                    <IconFlatButtonGroup isVertical/>
                </CardBox>

                <CardBox styleName="col-xl-4 col-md-4 col-sm-6 col-12" cardStyle="text-center"
                         heading={<IntlMessages id="component.buttonGroup.nested"/>}>
                    <div><IntlMessages id="component.buttonGroup.defaultStyle"/></div>
                    <NestedButtonGroup isVertical/>
                </CardBox>
            </div>
        </div>
    );
};
export default ButtonGroup;