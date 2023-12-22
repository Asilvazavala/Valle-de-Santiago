import { Marker, Popup, useMap } from 'react-leaflet';
import type { MarkerHouseProps } from './MarkerHouse.types';
import { icon } from 'leaflet';
import { locationsData } from './MarkerHouse.data';
import { FaMapMarkedAlt } from 'react-icons/fa';

export function MarkerHouse(props: MarkerHouseProps) {
  const  { selectMarker } = props;
  const fnMap = useMap();
  const customIcon = icon({
    iconUrl: '/images/general/marker.svg',
    iconSize: [40, 40]
  })

  return (
    locationsData.map(({id, name, position, image}) => (
      <Marker 
        key={id} 
        position={position} 
        icon={customIcon} 
        eventHandlers={{click: () => { selectMarker(position, fnMap)}}}
      >
        <Popup>
          <article className='flex items-center mb-2'>
            <span className='mr-4 text-secondary'>
              <FaMapMarkedAlt />
            </span>
            <h5 className='text-md text-secondary max-w-[150px]'>{name}</h5>
          </article>

          <img 
            src={`/images/inicio/gallery/${image}`}
            alt={name}
            className='w-full h-[130px] mb-4 object-cover rounded'
          />

          <a 
            href={`/properties/${id}`}
            style={{ color: 'white' }}
            className='px-3 py-2 text-white rounded-lg bg-secondary transition hover:bg-secondary/80
            w-full flex justify-center items-center'>
            Ver lugar
          </a>
          
        </Popup>
      </Marker>
    ))
  )
}
