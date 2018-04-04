import React, {Component} from 'react'
import {weatherData} from './weatherData';
import WeatherList from './WeatherList';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

class WeatherDetail extends Component {


    render() {
        const {city, list} = weatherData;
        if (!city) {
            return <div>Loading...</div>
        }

        // TODO: refactoring this code...

        let bgColorClass = 'detail-weather-widget ';
        // Set the background colour based on the temperature
        if (list[0].main.temp.toFixed(1) >= 30) {
            bgColorClass += 'very-warm';
        }
        else if (list[0].main.temp.toFixed(1) > 20 && list[0].main.temp.toFixed(1) < 30) {
            bgColorClass += 'warm';
        }
        else if (list[0].main.temp.toFixed(1) > 10 && list[0].main.temp.toFixed(1) < 20) {
            bgColorClass += 'normal';
        }
        else if (list[0].main.temp.toFixed(1) > 0 && list[0].main.temp.toFixed(1) < 10) {
            bgColorClass += 'cold';
        }
        else if (list[0].main.temp.toFixed(1) <= 0) {
            bgColorClass += 'very-cold';
        }

        return (
            <div className={bgColorClass}>
                <div className="row">
                    <div className="col-12">
                        <div className="jr-card-header d-flex">
                            <div className="mr-auto">
                                <h3 className="card-heading">{city.name}</h3>
                                <p className="sub-heading">{city.dateTime}</p>
                            </div>

                            <IconButton className="size-30">
                                <i className="zmdi zmdi-chevron-down zmdi-hc-fw" />
                            </IconButton>
                        </div>
                        <div className="temp-section py-sm-5 d-flex justify-content-between align-items-center">
                            <h2 className="temp-point text-muted">{list[0].main.temp.toFixed(1)}
                                <small><sup>°C</sup></small>
                            </h2>
                            <div className="px-md-4">
                                <i className={"detail-icon text-blue-grey wi wi-owm-" + list[0].weather[0].id} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <WeatherList weather={list} />
                <Button variant="raised" color="primary" className="jr-btn text-uppercase text-white">full
                    report</Button>
            </div>
        )
    }
}

export default WeatherDetail;
