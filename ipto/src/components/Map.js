import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import '../App.css';
import Details from './Details'
import Search from './Search'
import Header from './Header'
import Form from './Form'
import AddBusiness from './AddBusiness';



export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: null,
      selectedPlace: null,
      lastClickedPlace: null,
      locationName: '',
      locationCoordinates: '',
      locationAddress: '',
      locationZip: 90210,
      locationState: '',
      formDisplay: false,


    };
    // geo = navigator.geolocation
  
   
    onMarkerClick = (props, marker, e) =>
      
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        formDisplay: true,
      });
   
    onMapClick = (_,__,event) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          // activeMarker: null
        })
      }
      else {
        this.setState({
          lastClickedPlace: event.latLng
        })
      }
    };

    handleNameChange = (event) => {
      this.setState({
        locationName: event.target.value
      })
    }
    hideForm = (event) => {
    }
    // onInfoWindowSubmit = ()
    render() {
      return (
        <div className="App">
          <Header/>
          <Map className="Map" google={this.props.google}
              onClick={this.onMapClick}>

            <Marker
              onClick = { this.onMarkerClick }
              title = { 'Changing Colors Garage' }
              position = {this.state.lastClickedPlace}
              name = { 'Changing Colors Garage' }
            />
            <InfoWindow className='Infowindow'
              marker = { this.state.activeMarker }
              // visible = { this.state.showingInfoWindow }
              onClick={this.newBusiness}
              >
            </InfoWindow>
          </Map>
          <Details/>
          <Search/>
          {
            this.state.showingInfoWindow ? <Form />
            :
            <div/>
          }
        </div>
      )
    }
  }
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD5FH9dQSHxtOSn4rzKNe2iNXCvSMJ6rMU')
})(MapContainer)