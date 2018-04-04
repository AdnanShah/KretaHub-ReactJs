import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';
import moment from 'moment';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);
const Selectable = () => {
    return (
        <div className="app-calendar app-cul-calendar animated slideInUpTiny animation-duration-3">
            <h3 className="callout">
                Click an event to see more info, or
                drag the mouse over the calendar to select a date/time range.
            </h3>
            <BigCalendar
                selectable
                events={events}
                defaultView='week'
                scrollToTime={new Date(1970, 1, 1, 6)}
                defaultDate={new Date(2015, 3, 12)}
                onSelectEvent={event => alert(event.title)}
                onSelectSlot={(slotInfo) => alert(
                    `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                    `\nend: ${slotInfo.end.toLocaleString()}` +
                    `\naction: ${slotInfo.action}`
                )}
            />
        </div>
    )
};

export default Selectable;