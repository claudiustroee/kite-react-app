import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'
import '../style/Map.css'
import { getLocations } from '../../services/locations';

export function Map () {
    const lat =  44.4268,
      lng = 26.1025,
      zoom =  4

    const [locations, setList] = useState([]);

    useEffect(() => {
    let mounted = true;
    getLocations()
        .then(items => {
        if(mounted) {
            setList(items)
        }
        })
    return () => mounted = false;
    }, [])
      
    // const markerPosition = []
    //   locations.map((item) => (
    //     markerPosition = [item.lat, item.long]
        
    //   ))
    
  
    const cameraPosition = [lat, lng];
    return (
    
      <MapContainer style={{ height: "450px", width: "100%" }} center={cameraPosition} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={cameraPosition}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </MapContainer>
    );
  
}

export default Map;
