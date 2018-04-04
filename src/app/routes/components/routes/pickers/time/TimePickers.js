import React, {Component} from 'react';
import moment from 'moment';
import {TimePicker} from 'material-ui-pickers';

export default class TimePickers extends Component {
    state = {
        selectedDate: moment(),
    };

    handleDateChange = (date) => {
        this.setState({selectedDate: date});
    };

    render() {
        const {selectedDate} = this.state;
        return (<div key="basic_time" className="picker">

            <TimePicker
                fullWidth
                value={selectedDate}
                onChange={this.handleDateChange}
            />
        </div>)
    }
}