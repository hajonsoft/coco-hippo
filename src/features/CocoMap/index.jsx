import GoogleMapReact from 'google-map-react';
import React from 'react';
import { useSelector } from 'react-redux';
import LocationPin from './components/LocationPin';

const CocoMap = ({ zoomLevel }) => {

    const data = useSelector(state => state);
    const selectedRobot = data.robots[data.selectedRobot];

    return (
        <div style={{ width: '100%', height: '60vh' }}>
            <GoogleMapReact key={data.selectedRobot}
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
                defaultCenter={{ lng: selectedRobot?.location?.longitude, lat: selectedRobot?.location?.latitude }}
                defaultZoom={zoomLevel}
            >
                {Object.keys(data?.robots).map(key => <LocationPin
                    lat={data.robots[key].location.latitude}
                    lng={data.robots[key].location.longitude}
                    text={key}
                    robotData={data?.robots[key]}
                    orderData={data?.orders[data?.robots[key]?.assignedOrderId]}
                />)}
            </GoogleMapReact>
        </div>
    )
}

export default CocoMap
