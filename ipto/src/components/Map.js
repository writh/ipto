import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import '../App.css';
import Details from './Details'
import Search from './Search'
import Header from './Header'

export class MapContainer extends Component {
    state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {},
    };
    // geo = navigator.geolocation

   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClick = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          // showingInfoWindow: false,
          activeMarker: null
        })
      }
      else {
        this.setState({
          activeMarker: {}
        })
      }
    };
   
    render() {
      return (
        <div className="App">
          <Header/>
          <Details/>
          <Search/>
          <Map className="Map" google={this.props.google}
              onClick={this.onMapClick}>

            <Marker
              onClick = { this.onMarkerClick }
              title = { 'Changing Colors Garage' }
              position = {{ lat: 39.648209, lng: -75.711185 }}
              name = { 'Changing Colors Garage' }
            />
            <InfoWindow
              marker = { this.state.activeMarker }
              visible = { this.state.showingInfoWindow }/>
          </Map>
        </div>
      )
    }
  }
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD5FH9dQSHxtOSn4rzKNe2iNXCvSMJ6rMU')
})(MapContainer)