import React from 'react';
import { ThemeProvider, THEME_ID } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './index';

interface Props {
  children: React.ReactNode;
}

const AppThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={{ [THEME_ID]: theme }}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
