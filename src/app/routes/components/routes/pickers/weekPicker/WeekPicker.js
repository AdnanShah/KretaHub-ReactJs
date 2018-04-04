import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {IconButton, withStyles} from 'material-ui';
import {DatePicker} from 'material-ui-pickers';

const styles = theme => ({
    dayWrapper: {
        position: 'relative',
    },
    day: {
        width: 36,
        height: 36,
        fontSize: 14,
        margin: '0 2px',
        color: theme.palette.text.primary,
    },
    customDayHighlight: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '2px',
        right: '2px',
        border: '2px solid #6270bf',
        borderRadius: '50%',
    },
    nonCurrentMonthDay: {
        color: '#BCBCBC',
    },
    highlightNonCurrentMonthDay: {
        color: '#676767',
    },
    highlight: {
        background: '#9fa8da',
    },
    firstHighlight: {
        extend: 'highlight',
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
    },
    endHighlight: {
        extend: 'highlight',
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
    },
});

class WeekPicker extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    state = {
        selectedDate: new Date(),
    };

    handleDateChange = (date) => {
        this.setState({selectedDate: date});
    };


    formatWeekSelectLabel = (date, invalidLabel) => (date && date.isValid()
        ? `Week of ${date.clone().startOf('week').format('MMM Do')}`
        : invalidLabel);


    renderWrappedDefaultDay = (date, selectedDate, dayInCurrentMonth) => {
        const {classes} = this.props;

        const startDate = selectedDate.clone().day(0).startOf('day');
        const endDate = selectedDate.clone().day(6).endOf('day');

        const dayIsBetween = (
            date.isSame(startDate) ||
            date.isSame(endDate) ||
            (date.isAfter(startDate) && date.isBefore(endDate))
        );

        const firstDay = date.isSame(startDate, 'day');
        const lastDay = date.isSame(endDate, 'day');

        const wrapperClassName = [
            dayIsBetween ? classes.highlight : null,
            firstDay ? classes.firstHighlight : null,
            lastDay ? classes.endHighlight : null,
        ].join(' ');

        const dayClassName = [
            classes.day,
            (!dayInCurrentMonth) && classes.nonCurrentMonthDay,
            (!dayInCurrentMonth && dayIsBetween) && classes.highlightNonCurrentMonthDay,
        ].join(' ');

        return (
            <div className={wrapperClassName}>
                <IconButton className={dayClassName}>
                    <span> {date.format('DD')} </span>
                </IconButton>
            </div>
        );
    };

    render() {
        const {selectedDate} = this.state;

        return (
            <div key="custom_week" className="picker">

                <DatePicker
                    fullWidth
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    renderDay={this.renderWrappedDefaultDay}
                    labelFunc={this.formatWeekSelectLabel}
                    leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                    rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                />
            </div>
        )
    }
}

export default withStyles(styles)(WeekPicker);