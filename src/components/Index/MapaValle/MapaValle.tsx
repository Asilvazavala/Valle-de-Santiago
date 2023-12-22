import { Map } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MarkerHouse } from "./MarcadorUbicacion";
import Title from '../../Shared/Title';

export default function MapaValle() {
  const coordinatePoint = {
    lat: 20.3928,
    lng: -101.1914 
  }

  const centerMarker = (position: {lat: number, lng: number}, fnMap: Map) => {
    fnMap.flyTo({
      lat: position.lat,
      lng: position.lng
    })
  }

  return (
    <div className="containerSpace ">
      <div className='flex justify-center items-center'>
        <Title 
          title='MAPA' 
          image={<i className='bx bx-map-alt'></i>}
        />
      </div>
      <MapContainer 
        center={coordinatePoint}
        zoom={11}
        scrollWheelZoom={false}
        className="h-[400px] lg:h-[500px]"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png" />
        <div className='-z-50'>
          <MarkerHouse selectMarker={centerMarker} />
        </div>
      </MapContainer>
    </div>
  )
}
