import React, {Component} from "react";

import fetch from "isomorphic-fetch";
import {GoogleMap, Marker, withGoogleMap} from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const MarkerClustererExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={3}
        defaultCenter={{lat: 25.0391667, lng: 121.525}}
    >
        <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.map(marker => (
                <Marker
                    position={{lat: marker.latitude, lng: marker.longitude}}
                    key={marker.photo_id}
                />
            ))}
        </MarkerClusterer>
    </GoogleMap>
));

export default class MarkerClustererExample extends Component {
    constructor() {
        super();
        this.state = {
            markers: [],
        };
    }

    componentDidMount() {
        fetch(`https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`)
            .then(res => res.json())
            .then(data => {
                this.setState({markers: data.photos});
            });
    }

    render() {
        return (
            <MarkerClustererExampleGoogleMap
                containerElement={
                    <div className="embed-responsive embed-responsive-21by9"/>
                }
                mapElement={<div className="embed-responsive-item"/>}
                markers={this.state.markers}
            />
        );
    }
}