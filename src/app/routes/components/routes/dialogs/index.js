import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'

import SimpleDialogDemo from './simple/SimpleDialogDemo';
import AlertDialog from './alerts/AlertDialog';
import AlertDialogSlide from './slideAlerts/AlertDialogSlide';
import ConfirmationDialogDemo from './confirmation/ConfirmationDialogDemo';
import FullScreenDialog from './fullScreen/FullScreenDialog';
import FormDialog from './formAlerts/FormDialog';
import IntlMessages from 'util/IntlMessages';

const Dialogs = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.dialogs"/>} match={match}/>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">
                    <AlertDialog/>
                </CardBox>
                <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">
                    <AlertDialogSlide/>
                </CardBox>
                <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">
                    <FullScreenDialog/>
                </CardBox>
                <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">
                    <FormDialog/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-md-6" childrenStyle="text-center">
                    <SimpleDialogDemo/>
                </CardBox>
                <CardBox styleName="col-lg-3 col-md-6" cardStyle="p-0" childrenStyle="text-center">
                    <ConfirmationDialogDemo/>
                </CardBox>
            </div>
        </div>
    );
};

export default Dialogs;

