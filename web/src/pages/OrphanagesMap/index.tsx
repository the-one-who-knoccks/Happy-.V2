/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPlus, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { PageMap, CreateOrphanage } from './styles';

import mapIcon from '../../utils/mapIcon';
import mapMarkerImg from '../../images/map-marker.svg';
import api from '../../services/api';



interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const  OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  const history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  return (
    <PageMap>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Marker" />
          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando a sua visita. 😁</p>
        </header>
        <footer>
          <strong>Volta Grande</strong>
          <span>Minas Gerais</span>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <Map
        center={[-21.7713191, -42.5404258]}
        zoom={17}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map(orphanage => (
          <Marker
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
            key={orphanage.id}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="FFF" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <CreateOrphanage to="/orphanages/create" >
        <FiPlus />
      </CreateOrphanage>
    </PageMap>
  );
}

export default OrphanagesMap;
