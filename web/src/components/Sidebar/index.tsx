import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../../images/map-marker.svg';

import { SidebarApp} from './styles'

const Sidebar: React.FC  = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('/app');
  };
  return (
    <SidebarApp>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </SidebarApp>
  );
}

export default Sidebar;
