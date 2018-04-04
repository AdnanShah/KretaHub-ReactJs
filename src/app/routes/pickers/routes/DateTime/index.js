import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import DatePickers from 'app/routes/components/routes/pickers/date/DatePickers';
import TimePickers from 'app/routes/components/routes/pickers/time/TimePickers';
import DateAndTimePickers from 'app/routes/components/routes/pickers/dateTime/DateAndTimePickers';
import CustomDateTimePicker from 'app/routes/components/routes/pickers/customDateTimePicker/CustomDateTimePicker';
import WeekPicker from 'app/routes/components/routes/pickers/weekPicker/WeekPicker';
import IntlMessages from 'util/IntlMessages';


const DateTime = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="picker.date.pickers"/>} match={match}/>
            <div className="row">
                <CardBox styleName="col-lg-4 col-sm-6" heading={<IntlMessages id="picker.date.date"/>}>
                    <DatePickers/>
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" heading={<IntlMessages id="picker.date.time"/>}>
                    <TimePickers/>
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" heading={<IntlMessages id="picker.date.week"/>}>
                    <WeekPicker/>
                </CardBox>
                <CardBox styleName="col-lg-6 col-sm-6" heading={<IntlMessages id="picker.date.dateNTime"/>}>
                    <DateAndTimePickers/>
                </CardBox>
                <CardBox styleName="col-lg-6 col-12" heading={<IntlMessages id="picker.date.customDate"/>}>
                    <CustomDateTimePicker/>
                </CardBox>
            </div>
        </div>
    );
};

export default DateTime;

