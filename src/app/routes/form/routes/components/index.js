import React from 'react';

import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox/index';

import TextFields from '../../../components/routes/textFields/textField/TextFields';
import ComposedTextField from '../../../components/routes/textFields/components/ComposedTextField';
import TextFieldMargins from '../../../components/routes/textFields/layout/TextFieldMargins';
import Inputs from '../../../components/routes/textFields/inputs/Inputs';


import Checkboxes from '../../../components/routes/selection/checkboxes/Checkboxes';
import RadioButtonsGroup from '../../../components/routes/selection/radioButtons/RadioButtonsGroup';
import RadioButtons from '../../../components/routes/selection/radioButtons/RadioButtons';
import Switches from '../../../components/routes/selection/switches/Switches';
import SwitchLabels from '../../../components/routes/selection/switches/SwitchLabels';


import SimpleSelect from '../../../components/routes/selects/simple/SimpleSelect';
import NativeSelect from '../../../components/routes/selects/native/NativeSelect';
import MultipleSelect from '../../../components/routes/selects/multi/MultipleSelect';
import DialogSelect from '../../../components/routes/selects/dialog/DialogSelect';


import CircularIndeterminate from '../../../components/routes/progressbar/circular/indeterminate/CircularIndeterminate';
import CircularFab from '../../../components/routes/progressbar/circular/interactive/CircularFab';
import CircularDeterminate from '../../../components/routes/progressbar/circular/determinate/CircularDeterminate';
import LinearIndeterminate from '../../../components/routes/progressbar/linear/indeterminate/LinearIndeterminate';
import LinearDeterminate from '../../../components/routes/progressbar/linear/determinate/LinearDeterminate';
import LinearBuffer from '../../../components/routes/progressbar/linear/buffer/LinearBuffer';
import LinearQuery from '../../../components/routes/progressbar/linear/query/LinearQuery';


// import DatePickers from '../../../components/routes/pickers/date/DatePickers';
// import DateAndTimePickers from '../../../components/routes/pickers/dateTime/DateAndTimePickers';
// import TimePickers from '../../../components/routes/pickers/time/TimePickers';
// import CustomDateTimePicker from '../../../components/routes/pickers/customDateTimePicker/CustomDateTimePicker';
// import WeekPicker from '../../../components/routes/pickers/weekPicker/WeekPicker';


import SimpleDialogDemo from '../../../components/routes/dialogs/simple/SimpleDialogDemo';
import AlertDialog from '../../../components/routes/dialogs/alerts/AlertDialog';
import AlertDialogSlide from '../../../components/routes/dialogs/slideAlerts/AlertDialogSlide';
import ConfirmationDialogDemo from '../../../components/routes/dialogs/confirmation/ConfirmationDialogDemo';
import FullScreenDialog from '../../../components/routes/dialogs/fullScreen/FullScreenDialog';
import FormDialog from '../../../components/routes/dialogs/formAlerts/FormDialog';

import Chip from '../../../components/routes/chips/simpleChip/Chips';
import ChipsArray from '../../../components/routes/chips/chipArray/ChipsArray';
import IntlMessages from 'util/IntlMessages';

const Form = ({match}) => {
    return (

        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.forms.components"/>} match={match}/>

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
