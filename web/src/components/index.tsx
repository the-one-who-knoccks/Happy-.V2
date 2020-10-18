import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';

import './Styles.css';

export default function Sidebar() {
  const history = useHistory();

  const goBack = () => {
    history.push('/app');
  };
  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}
