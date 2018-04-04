import React, {Component} from 'react';
import moment from 'moment';
import {DatePicker} from 'material-ui-pickers';

export default class DatePickers extends Component {
    state = {
        selectedDate: moment(),
    };

    handleDateChange = (date) => {
        this.setState({selectedDate: date});
    };

    render() {
        const {selectedDate} = this.state;

        return (
            <div key="basic_day" className="picker">
                <DatePicker
                    fullWidth
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    animateYearScrolling={false}
                    leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                    rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                />
            </div>
        )

    }
}