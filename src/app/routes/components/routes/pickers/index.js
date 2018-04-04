import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

import DatePickers from './date/DatePickers';
import TimePickers from './time/TimePickers';
import DateAndTimePickers from './dateTime/DateAndTimePickers';
import CustomDateTimePicker from './customDateTimePicker/CustomDateTimePicker';
import WeekPicker from './weekPicker/WeekPicker';
import IntlMessages from 'util/IntlMessages';

const Pickers = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.pickers"/>} match={match}/>
            <div className="row">
                <CardBox styleName="col-lg-4 col-sm-6" heading={<IntlMessages id="picker.date.date"/>}>
                    <DatePickers />
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" heading={<IntlMessages id="picker.date.time"/>}>
                    <TimePickers />
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" heading={<IntlMessages id="picker.date.week"/>}>
                    <WeekPicker />
                </CardBox>
                <CardBox styleName="col-lg-6 col-sm-6" heading={<IntlMessages id="picker.date.dateNTime"/>}>
                    <DateAndTimePickers />
                </CardBox>
                <CardBox styleName="col-lg-6 col-12" heading={<IntlMessages id="picker.date.customDate"/>}>
                    <CustomDateTimePicker />
                </CardBox>
            </div>
        </div>
    );
};

export default Pickers;

