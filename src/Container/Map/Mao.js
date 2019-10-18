import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


class Map extends React.Component {
    componentDidMount=()=>{

        navigator.geolocation.getCurrentPosition((position) => {
            let location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            this.setState({
                location: location
            })
            console.log(location)
            console.log(position)
        });
       }
    render() {
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: this.state.location.latitude, lng:  this.state.location.longitude }}
            >
                {props.isMarkerShown && <Marker position={{ lat: this.state.location.latitude, lng:this.state.location.longitude }} draggable={true}/>}
            </GoogleMap>
        ))
        return (
            <div>

            <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
                </div>
        )
    }
}

export default Map