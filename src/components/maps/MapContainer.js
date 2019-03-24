import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  position: "relative",
  height: "calc(100vh - 20px)"
  
};

export class MapContainer extends Component {
    
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
      <div style={mapStyles}>
        <Map google={this.props.google}
        centerAroundCurrentLocation={false}
          initialCenter={{
              lat: 6.270968,
              lng: -75.5753486
          }}
          zoom={13}
          >
          <Marker
              onClick={this.onMarkerClick}
              name={'Transito de Medellín'}
              position={{lat: 6.270968, lng: -75.5753486}} />
          <Marker
              onClick={this.onMarkerClick}
              name={'Premium Plaza'}
              position={{lat: 6.2297793, lng: -75.5719467}} />

          <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                  <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
      )
    }
  }
 
export default((GoogleApiWrapper({
  apiKey: ('AIzaSyDkv9yDNJBShQBqX6xCo1ZX27LskwqOX8U')
})(MapContainer)))
