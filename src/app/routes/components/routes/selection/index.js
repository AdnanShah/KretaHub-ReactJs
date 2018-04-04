import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

import Checkboxes from './checkboxes/Checkboxes';
import RadioButtonsGroup from './radioButtons/RadioButtonsGroup';
import Switches from './switches/Switches';
import DisabledCheckboxes from './disabled/DisabledCheckboxes';
import Intermediate from './intermediate/Intermediate';
import RadioButtonsDisabled from './radioButtons/RadioButtonsDisabled';
import ErrorMessage from './message/ErrorMessage';
import SwitchList from './List/SwitchList';
import FormGroup from './formGroups/FormGroup';
import IntlMessages from 'util/IntlMessages';

const Selection = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.selectionControl"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-md-4 col-lg-4 col-sm-6" childrenStyle=""
                         heading={<IntlMessages id="component.selectionControl.checkboxes"/>}>
                    <Checkboxes/>
                </CardBox>
                <CardBox styleName="col-md-4 col-lg-4 col-sm-6" childrenStyle=""
                         heading={<IntlMessages id="component.selectionControl.disabled"/>}>
                    <DisabledCheckboxes/>
                </CardBox>

                <CardBox styleName="col-md-4 col-lg-4 col-12"
                         heading={<IntlMessages id="component.selectionControl.intermediate"/>}>
                    <Intermediate/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-12" heading={<IntlMessages
                    id="component.selectionControl.checkboxesWithForm"/>}>
                    <div><IntlMessages
                        id="component.selectionControl.checkboxesWithFormTxt"/>
                    </div>
                    <FormGroup/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-6" heading={<IntlMessages
                    id="component.selectionControl.basicRadio"/>}>
                    <div><IntlMessages
                        id="component.selectionControl.verticalInlineRadio"/></div>
                    <RadioButtonsGroup/>
                </CardBox>

                <CardBox styleName="col-lg-3 col-sm-6" childrenStyle="d-flex flex-column"
                         heading={<IntlMessages
                             id="component.selectionControl.disabledRadio"/>}>
                    <RadioButtonsDisabled/>
                </CardBox>

                <CardBox styleName="col-lg-3 col-sm-6" childrenStyle="d-flex flex-column"
                         heading={<IntlMessages
                             id="component.selectionControl.withError"/>}>
                    <ErrorMessage/>
                </CardBox>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="row">
                        <CardBox styleName="col-12"
                                 heading={<IntlMessages id="component.selectionControl.switches"/>}>
                            <div>
                                <IntlMessages id="component.selectionControl.onOffSwitches"/>
                            </div>
                            <Switches/>
                        </CardBox>

                        <CardBox styleName="col-12" childrenStyle="" heading={<IntlMessages
                            id="component.selectionControl.verticalSwitches"/>}>
                            <div><IntlMessages id="component.selectionControl.verticalImplementation"/>
                            </div>
                            <SwitchList/>
                        </CardBox>
                    </div>
                </div>

                <CardBox heading={<IntlMessages id="component.selectionControl.groupedSwitches"/>}>
                    <div>{<IntlMessages id="component.selectionControl.verticalImplementation"/>}
                    </div>
                    <div>
                        <SwitchList title={<IntlMessages
                            id="component.selectionControl.generalSettings"/>}/>
                        <SwitchList
                            title={<IntlMessages id="component.selectionControl.themeSettings"/>}/>
                    </div>
                </CardBox>
            </div>
        </div>
    );
};

export default (Selection);

