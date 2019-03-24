import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {withStyles } from '@material-ui/core/styles'
 
const styles = {
        height: '76%',
        width:'76%',
}
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
            <Map google={this.props.google}
            style={{width: '76%', height: '76%', position: 'relative'}}
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
      )
    }
  }
 
export default(GoogleApiWrapper({
  apiKey: ('AIzaSyDkv9yDNJBShQBqX6xCo1ZX27LskwqOX8U')
})(MapContainer))