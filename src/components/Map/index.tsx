import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';

// Исправляем проблему с иконками маркеров в Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  latitude, 
  longitude, 
  title = "Our Location",
  description = "Visit us at this location"
}) => {
  useEffect(() => {
    // Импортируем CSS для Leaflet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '400px',
        borderRadius: 3,
        overflow: 'hidden',
        border: '2px solid rgba(233, 187, 90, 0.3)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        '& .leaflet-container': {
          backgroundColor: '#1a1a1a',
        },
        '& .leaflet-popup-content-wrapper': {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          color: 'white',
          border: '1px solid rgba(233, 187, 90, 0.3)',
          borderRadius: 8,
        },
        '& .leaflet-popup-tip': {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
        },
        '& .leaflet-popup-content': {
          margin: '12px 16px',
          fontSize: '14px',
        },
        '& .leaflet-popup-content h3': {
          color: 'rgb(233, 187, 90)',
          margin: '0 0 8px 0',
          fontSize: '16px',
          fontWeight: 600,
        },
        '& .leaflet-popup-content p': {
          margin: 0,
          color: 'rgba(255, 255, 255, 0.8)',
        },
      }}
    >
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapComponent;
