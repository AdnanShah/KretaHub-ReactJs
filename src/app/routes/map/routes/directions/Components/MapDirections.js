import React, {Component} from "react";
import {DirectionsRenderer, GoogleMap, withGoogleMap} from "react-google-maps";


const DirectionsExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={7}
        defaultCenter={props.center}
    >
        {props.directions && <DirectionsRenderer directions={props.directions}/>}
    </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class MapDirections extends Component {

    constructor() {
        super();
        this.state = {
            origin: new google.maps.LatLng(41.8507300, -87.6512600),
            destination: new google.maps.LatLng(41.8525800, -87.6514100),
            directions: null,
        };
    }

    componentDidMount() {
        const DirectionsService = new google.maps.DirectionsService();

        DirectionsService.route({
            origin: this.state.origin,
            destination: this.state.destination,
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                    directions: result,
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    }

    render() {
        return (
            <DirectionsExampleGoogleMap
                containerElement={
                    <div className="embed-responsive embed-responsive-21by9"/>
                }
                mapElement={<div className="embed-responsive-item"/>}
                center={this.state.origin}
                directions={this.state.directions}
            />
        );
    }
}