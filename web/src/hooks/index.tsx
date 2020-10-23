import React from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../styles/themes/defaultTheme';
import AuthProvider from './auth';
import ToastProvider from './toast';

const RootProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
