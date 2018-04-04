import React from 'react';

import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox/index';

import TextFields from '../app/routes/components/routes/textFields/textField/TextFields';
import ComposedTextField from '../app/routes/components/routes/textFields/components/ComposedTextField';
import TextFieldMargins from '../app/routes/components/routes/textFields/layout/TextFieldMargins';
import Inputs from '../app/routes/components/routes/textFields/inputs/Inputs';


import Checkboxes from '../app/routes/components/routes/selection/checkboxes/Checkboxes';
import RadioButtonsGroup from '../app/routes/components/routes/selection/radioButtons/RadioButtonsGroup';
import RadioButtons from '../app/routes/components/routes/selection/radioButtons/RadioButtons';
import Switches from '../app/routes/components/routes/selection/switches/Switches';
import SwitchLabels from '../app/routes/components/routes/selection/switches/SwitchLabels';


import SimpleSelect from '../app/routes/components/routes/selects/simple/SimpleSelect';
import NativeSelect from '../app/routes/components/routes/selects/native/NativeSelect';
import MultipleSelect from '../app/routes/components/routes/selects/multi/MultipleSelect';
import DialogSelect from '../app/routes/components/routes/selects/dialog/DialogSelect';


import CircularIndeterminate from '../app/routes/components/routes/progressbar/circular/indeterminate/CircularIndeterminate';
import CircularFab from '../app/routes/components/routes/progressbar/circular/interactive/CircularFab';
import CircularDeterminate from '../app/routes/components/routes/progressbar/circular/determinate/CircularDeterminate';
import LinearIndeterminate from '../app/routes/components/routes/progressbar/linear/indeterminate/LinearIndeterminate';
import LinearDeterminate from '../app/routes/components/routes/progressbar/linear/determinate/LinearDeterminate';
import LinearBuffer from '../app/routes/components/routes/progressbar/linear/buffer/LinearBuffer';
import LinearQuery from '../app/routes/components/routes/progressbar/linear/query/LinearQuery';

import SimpleDialogDemo from '../app/routes/components/routes/dialogs/simple/SimpleDialogDemo';
import AlertDialog from '../app/routes/components/routes/dialogs/alerts/AlertDialog';
import AlertDialogSlide from '../app/routes/components/routes/dialogs/slideAlerts/AlertDialogSlide';
import ConfirmationDialogDemo from '../app/routes/components/routes/dialogs/confirmation/ConfirmationDialogDemo';
import FullScreenDialog from '../app/routes/components/routes/dialogs/fullScreen/FullScreenDialog';
import FormDialog from '../app/routes/components/routes/dialogs/formAlerts/FormDialog';

import Chip from '../app/routes/components/routes/chips/simpleChip/Chips';
import ChipsArray from '../app/routes/components/routes/chips/chipArray/ChipsArray';
import IntlMessages from '../util/IntlMessages';

const Form = ({match}) => {
    return (

        <div className="animated slideInUpTiny animation-duration-3">
            {/* <ContainerHeader title={<IntlMessages id="sidebar.forms.components"/>} match={match}/> */}

            <div className="row">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.textFields.textfield"/>}>
                    <TextFields/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="sidebar.forms.components"/>}>
                    <ComposedTextField/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.textFields.layout"/>}>
                    <TextFieldMargins/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.textFields.inputs"/>}>
                    <Inputs/>
                </CardBox>
            </div>


            <div className="row">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.selectionControl.checkboxes"/>}>
                    <Checkboxes/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.selectionControl.switches"/>}>
                    <Switches/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.selectionControl.switches"/>}>
                    <SwitchLabels/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.selectionControl.basicRadio"/>}>
                    <RadioButtons/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.selectionControl.radioBtnGroup"/>}>
                    <RadioButtonsGroup/>
                </CardBox>
            </div>


            <div className="row">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.selects.simple"/>}>
                    <SimpleSelect/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.selects.native"/>}>
                    <NativeSelect/>
                </CardBox>
                <CardBox heading={<IntlMessages id="component.selects.multiple"/>}>
                    <MultipleSelect/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.selects.dialog"/>}>
                    <DialogSelect/>
                </CardBox>
            </div>


            <div className="row">
                <CardBox childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.progress.indeterminateCircular"/>}>
                    <CircularIndeterminate/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.progress.determinateCircular"/>}>
                    <CircularDeterminate/>
                </CardBox>
                <CardBox heading={<IntlMessages id="component.progress.indeterminateLinear"/>}>
                    <LinearIndeterminate/>
                </CardBox>
                <CardBox heading={<IntlMessages id="component.progress.determinateLinear"/>}>
                    <LinearDeterminate/>
                </CardBox>
                <CardBox heading={<IntlMessages id="component.progress.bufferLinear"/>}>
                    <LinearBuffer/>
                </CardBox>
                <CardBox heading={<IntlMessages id="component.progress.queryLinear"/>}>
                    <LinearQuery/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.progress.interactiveIntegration"/>}>
                    <CircularFab/>
                </CardBox>
            </div>


            <div className="row">
                <CardBox childrenStyle="text-center" heading={<IntlMessages id="sidebar.components.alerts"/>}>
                    <AlertDialog/>
                </CardBox>
                <CardBox childrenStyle="text-center" heading="Alert Dialogs">
                    <AlertDialogSlide/>
                </CardBox>
                <CardBox childrenStyle="text-center" heading="Simple Dialogs">
                    <SimpleDialogDemo/>
                </CardBox>
                <CardBox childrenStyle="text-center" heading="Full-Screen Dialogs">
                    <FullScreenDialog/>
                </CardBox>
                <CardBox childrenStyle="text-center" heading="Form Dialog">
                    <div className="card d-inline-block">
                        <FormDialog/>
                    </div>
                </CardBox>
                <CardBox childrenStyle="text-center" heading="Confirmation Dialogs">
                    <div className="card d-inline-block">
                        <ConfirmationDialogDemo/>
                    </div>
                </CardBox>

            </div>


            <div className="row">
                <CardBox styleName="col-lg-12" heading={<IntlMessages id="sidebar.components.chips"/>}>
                    <Chip/>
                </CardBox>
                <CardBox styleName="col-lg-12" heading={<IntlMessages id="component.chips.array"/>}>
                    <ChipsArray/>
                </CardBox>
            </div>
        </div>

    );
};

export default Form;
