import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GenresProvider } from './contexts/GenresContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-movie-finder">
      <ThemeProvider theme={theme}>
        <GenresProvider>
          <App />
        </GenresProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
