import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import '../App.css';
import Details from './Details'
import Search from './Search'
import Header from './Header'
import Form from './Form'

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


    };
    // geo = navigator.geolocation

   
    onMarkerClick = (props, marker, e) =>
      
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
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
              visible = { this.state.showingInfoWindow }>
              <form action="">
                Name<input type="text" value={this.state.locationName} onChange={this.handleNameChange}/>
                Address<input type="text" onChange = {this.handleAddressChange}/>
                Zip Code<input type="text" onChange = {this.handleZipChange}/>
                State<input type="text" onChange = {this.handleStateChange}/>
                <br/>
                <button onClick = { this.onInfoWindowSubmit } >Submit</button>
              </form>
            </InfoWindow>
          </Map>
          <Details/>
          <Search/>
          <Form/>
        </div>
      )
    }
  }
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD5FH9dQSHxtOSn4rzKNe2iNXCvSMJ6rMU')
})(MapContainer)