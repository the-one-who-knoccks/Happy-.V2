import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import Routes from './routes'; 
import RootProvider from './hooks';

import GlobalStyle from './styles/global';

import 'leaflet/dist/leaflet.css';
import './styles/animation.css';

const App: React.FC = () => {
  return (
    <RootProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </RootProvider>
  );
};

export default App;
