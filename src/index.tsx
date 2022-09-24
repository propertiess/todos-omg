import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { createTheme } from '@mui/material';
import { ThemeContextProvider } from './context/ThemeContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContextProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
