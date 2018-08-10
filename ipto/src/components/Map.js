import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import '../App.css';
import Details from './Details'
import Search from './Search'
 
export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    geo = navigator.geolocation

   
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
        <div className="App">
          <Details/>
          <Search/>
          <Map className="Map" google={this.props.google}
              onClick={this.onMapClicked}>
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
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
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD5FH9dQSHxtOSn4rzKNe2iNXCvSMJ6rMU')
})(MapContainer)