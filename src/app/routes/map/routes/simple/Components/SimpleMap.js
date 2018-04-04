import React, {Component} from 'react';
import {GoogleMap, withGoogleMap,} from 'react-google-maps';

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: 47.646935, lng: -122.303763}}
    />
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleMap extends Component {

    render() {
        let styleName = this.props.styleName;
        if (!styleName) {
            styleName = 'embed-responsive-21by9'
        }
        return (
            <div>
                <SimpleMapExampleGoogleMap
                    containerElement={
                        <div className={`embed-responsive ${styleName}`}/>
                    }
                    mapElement={<div className="embed-responsive-item"/>}
                />
            </div>
        );
    }
}