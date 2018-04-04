import React, {Component} from 'react';
import {DateTimePicker} from 'material-ui-pickers';
import {InputAdornment} from 'material-ui';

export default class CustomDateTimePicker extends Component {
    state = {
        selectedDate: new Date(),
    };

    handleDateChange = (date) => {
        this.setState({selectedDate: date});
    };

    render() {
        const {selectedDate} = this.state;

        return (<div key="datetime_custom" className="picker">

            <DateTimePicker
                fullWidth
                error
                autoOk
                showTabs={false}
                autoSubmit={false}
                disableFuture
                value={selectedDate}
                onChange={this.handleDateChange}
                helperText="Required"
                leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <i className="zmdi zmdi-alarm" />
                        </InputAdornment>
                    ),
                }}
            />
        </div>)

    }
}