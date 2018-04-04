import React, {Component} from 'react';
import Button from 'material-ui/Button'
import {GoogleMap, OverlayView, withGoogleMap} from 'react-google-maps';


const STYLES = {
    mapContainer: {
        height: 500,
    },
    overlayView: {
        background: '#fff',
        border: '1px solid #ccc',
        padding: 15,
    },
};

function getPixelPositionOffset(width, height) {
    return {x: -(width / 2), y: -(height / 2)};
}

const OverlayViewExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: 47.646935, lng: -122.303763}}
    >
        <OverlayView
            position={{lat: 47.646935, lng: -122.303763}}
            /*
             * An alternative to specifying position is specifying bounds.
             * bounds can either be an instance of google.maps.LatLngBounds
             * or an object in the following format:
             * bounds={{
             *    ne: { lat: 62.400471, lng: -150.005608 },
             *    sw: { lat: 62.281819, lng: -150.287132 }
             * }}
             */
            /*
             * 1. Specify the pane the OverlayView will be rendered to. For
             *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
             *    Defaults to `OverlayView.OVERLAY_LAYER`.
             */
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            /*
             * 2. Tweak the OverlayView's pixel position. In this case, we're
             *    centering the content.
             */
            getPixelPositionOffset={getPixelPositionOffset}
            /*
             * 3. Create OverlayView content using standard React components.
             */
        >
            <div style={STYLES.overlayView}>
                <h1>OverlayView</h1>
                <Button variant="raised" color="primary" onClick={props.onClick}>
                    I have been clicked {props.count} time{props.count === 1 ? `` : `s`}
                </Button>
            </div>
        </OverlayView>
    </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class MapOverlay extends Component {
    state = {
        count: 0,
    };

    handleClick = this.handleClick.bind(this);

    handleClick() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <OverlayViewExampleGoogleMap
                containerElement={
                    <div className="embed-responsive embed-responsive-21by9"/>
                }
                mapElement={<div className="embed-responsive-item"/>}
                count={this.state.count}
                onClick={this.handleClick}
            />
        );
    }
}