import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationPin from './components/LocationPin'
import './map.css'

const Map = ({ data, defaultCenter, zoomLevel }) => {

    
    return (
    <div style={{ width: '100%', height: '60vh' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
            defaultCenter={{lng: defaultCenter.longitude, lat: defaultCenter.latitude}}
            defaultZoom={zoomLevel}
        >
            {Object.keys(data?.robots).map(key => <LocationPin
                lat={data.robots[key].location.latitude}
                lng={data.robots[key].location.longitude}
                text={key}
            />)}


        </GoogleMapReact>
    </div>
)}

export default Map
