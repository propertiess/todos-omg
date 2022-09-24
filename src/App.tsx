import { Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { routes } from './routes';
import { ThemeContext } from './context/ThemeContext';

export const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Routes>
      </ThemeProvider>
    </>
  );
};
