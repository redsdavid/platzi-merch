import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({data}) => {

    const API_KEY = process.env.GOOGLE_API_KEY.toString();

    const MapStyles = {
        height: "50vh",
        width:"100%"
    }
    // const defaultCenter = {
    //     lat: data.lat,
    //     lng: data.lng
    // }

    const defaultCenter ={
        lat: data.lat,
        lng: data.lng
    }
    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap 
                mapContainerStyle={MapStyles}
                zoom={15}
                center={defaultCenter}>
                    <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map
