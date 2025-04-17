import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const GeoMap = ({ users, myLocation }) => {
  const [center, setCenter] = useState([51.505, -0.09]);
  const [zoom, setZoom] = useState(2);

  const myLocationIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -30]
  });

  const userIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149059.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -30]
  });

  useEffect(() => {
    if (users && users.length > 0) {
      const lat = parseFloat(users[0].address?.geo?.lat);
      const lng = parseFloat(users[0].address?.geo?.lng);
      if (!isNaN(lat) && !isNaN(lng)) {
        setCenter([lat, lng]);
        setZoom(6);
      }
    } else if (myLocation) {
      setCenter(myLocation);
      setZoom(10);
    }
  }, [users, myLocation]);

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© OpenStreetMap contributors'
      />

      {users.map(user => {
        const lat = parseFloat(user.address?.geo?.lat);
        const lng = parseFloat(user.address?.geo?.lng);
        if (isNaN(lat) || isNaN(lng)) return null;

        return (
          <Marker key={user.id} position={[lat, lng]} icon={userIcon}>
            <Popup>
              <strong>{user.name}</strong><br />
              {user.email}
            </Popup>
          </Marker>
        );
      })}

      {myLocation && (
        <Marker position={myLocation} icon={myLocationIcon}>
          <Popup>Locația mea</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};
export default GeoMap
