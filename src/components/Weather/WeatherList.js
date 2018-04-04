import React, {Component} from 'react'
import Moment from 'moment';


class WeatherList extends Component {


    render() {
        return (
            <div className="text-muted my-4">
                {
                    this.props.weather.map((data, index) => <DayWeather dayData={data} key={index} />)
                }
            </div>
        )
    }
}

const DayWeather = ({dayData}) => {
    const temp = dayData.main.temp;
    const day = dayData.dt_txt;
    const iconId = dayData.weather[0].id;
    Moment.locale('en');

    let bgColorClass = 'list-weather-widget ';
    // Set the background colour based on the temperature
    if (temp >= 30) {
        bgColorClass += 'very-warm';
    }
    else if (temp > 20 && temp < 30) {
        bgColorClass += 'warm';
    }
    else if (temp > 10 && temp < 20) {
        bgColorClass += 'normal';
    }
    else if (temp > 0 && temp < 10) {
        bgColorClass += 'cold';
    }
    else if (temp <= 0) {
        bgColorClass += 'very-cold';
    }

    return (
        <div className={bgColorClass + " mb-2 row"}>
            <div className="col-5">
                <h4>{Moment(day).format('ddd d MMM')}</h4>
            </div>
            <div className="list-icon col-3">
                <h3><i className={" wi wi-owm-" + iconId} /></h3>
            </div>
            <div className="col-4">
                <h4>{temp.toFixed(1)} °C</h4>
            </div>

        </div>
    )
};

export default WeatherList
