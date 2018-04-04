import React, {Component} from 'react';
import {GoogleMap, InfoWindow, Marker, withGoogleMap} from 'react-google-maps';

const PopUpInfoWindowExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={15}
        center={props.center}
    >
        {props.markers.map((marker, index) => (
            <Marker
                defaultIcon="assets/images/marker.png"
                key={index}
                position={marker.position}
                onClick={() => props.onMarkerClick(marker)}
            >
                {/*
          Show info window only if the 'showInfo' key of the marker is true.
          That is, when the Marker pin has been clicked and 'onCloseClick' has been
          Successfully fired.
        */}
                {marker.showInfo && (
                    <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
                        <div>{marker.infoContent}
                        </div>
                    </InfoWindow>
                )}
            </Marker>
        ))}
    </GoogleMap>
));

/*
 *
 *  Add <script src="https://maps.googleapis.com/maps/api/js"></script>
 *  to your HTML to provide google.maps reference
 *
 *  @author: @chiwoojo
 */
export default class MapPopupInfo extends Component {

    state = {
        center: {
            lat: 47.646935, lng: -122.303763,
        },

        // array of objects of markers
        markers: [
            {
                position: new google.maps.LatLng(47.646145, -122.303763),
                showInfo: false,
                infoContent: (
                    <div className="d-flex">
                        <div>
                            <svg
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M3.5 0c-1.7 0-3 1.6-3 3.5 0 1.7 1 3 2.3 3.4l-.5 8c0
              .6.4 1 1 1h.5c.5 0 1-.4 1-1L4 7C5.5 6.4 6.5 5 6.5
              3.4c0-2-1.3-3.5-3-3.5zm10 0l-.8 5h-.6l-.3-5h-.4L11
              5H10l-.8-5H9v6.5c0 .3.2.5.5.5h1.3l-.5 8c0 .6.4 1 1 1h.4c.6 0
              1-.4 1-1l-.5-8h1.3c.3 0 .5-.2.5-.5V0h-.4z"
                                />
                            </svg>
                        </div>
                        <div className="ml-1">
                            <p>UW Medical Center</p>
                            <p>1959 NE Pacific St</p>
                            <p>Seattle, WA 98195</p>
                        </div>

                    </div>
                ),
            },
            {
                position: new google.maps.LatLng(47.647935, -122.303763),
                showInfo: false,
                infoContent: (
                    <div className="d-flex">
                        <div>
                            <svg
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M6 14.5c0 .828-.672 1.5-1.5 1.5S3 15.328 3 14.5 3.672
              13 4.5 13s1.5.672 1.5 1.5zM16 14.5c0 .828-.672 1.5-1.5
              1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM16
              8V2H4c0-.552-.448-1-1-1H0v1h2l.75 6.438C2.294 8.805 2 9.368
              2 10c0 1.105.895 2 2 2h12v-1H4c-.552 0-1-.448-1-1v-.01L16 8z"
                                />
                            </svg>
                        </div>
                        <div className="ml-1">
                            <p>University of Washington Intramural Activities (IMA) Building</p>
                            <p>3924 Montlake Blvd NE</p>
                            <p>Seattle, WA 98195</p>
                        </div>

                    </div>
                ),
            },
        ],
    };

    handleMarkerClick = this.handleMarkerClick.bind(this);
    handleMarkerClose = this.handleMarkerClose.bind(this);

    // Toggle to 'true' to show InfoWindow and re-renders simple
    handleMarkerClick(targetMarker) {
        this.setState({
            markers: this.state.markers.map(marker => {
                if (marker === targetMarker) {
                    return {
                        ...marker,
                        showInfo: true,
                    };
                }
                return marker;
            }),
        });
    }

    handleMarkerClose(targetMarker) {
        this.setState({
            markers: this.state.markers.map(marker => {
                if (marker === targetMarker) {
                    return {
                        ...marker,
                        showInfo: false,
                    };
                }
                return marker;
            }),
        });
    }

    render() {
        return (
            <PopUpInfoWindowExampleGoogleMap
                containerElement={
                    <div className="embed-responsive embed-responsive-21by9"/>
                }
                mapElement={<div className="embed-responsive-item"/>}
                center={this.state.center}
                markers={this.state.markers}
                onMarkerClick={this.handleMarkerClick}
                onMarkerClose={this.handleMarkerClose}
            />
        );
    }
}