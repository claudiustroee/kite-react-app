import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../style/Map.css";
import { getLocations } from "../../services/locations";
import { popupContent, popupHead, popupSubtitle, popupData , popupInfo } from './popupStyle';

export function Map() {
  const lat = 44.4268,
    lng = 26.1025,
    zoom = 3;

  const [locations, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getLocations().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  // const filter = locations.filter(loc => loc.country ==="" ).filter(loc => loc.probability ==="" );
  const cameraPosition = [lat, lng];
  return (
    <MapContainer
      style={{ height: "450px", width: "100%" }}
      center={cameraPosition}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.long]}>
          <Popup position={[loc.lat, loc.long]}>
            <div style={popupContent}>
              <h3 style={popupHead}>{loc.name}</h3>
              <p style={popupSubtitle}>{loc.country}</p>
              <p style={popupInfo}>WIND PROBABILITY</p>
              <p style={popupData}>{loc.probability}%</p>
              <p style={popupInfo}>LATITUDE</p>
              <p style={popupData}>{loc.lat}° N</p>
              <p style={popupInfo}>LONGITUDE</p>
              <p style={popupData}>{loc.long}° E</p>
              <p style={popupInfo}>WHEN TO GO</p>
              <p style={popupData}>{loc.month}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
