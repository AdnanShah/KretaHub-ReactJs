import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../events';

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);
const Basic = (props) => {
    return (
        <div className="app-calendar animated slideInUpTiny animation-duration-3">
            <BigCalendar
                {...props}
                events={events}
                views={allViews}
                step={60}
                defaultDate={new Date(2015, 3, 1)}/>
        </div>
    )
};

export default Basic;