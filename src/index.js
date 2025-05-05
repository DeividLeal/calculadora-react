import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyles from './global';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />

  </React.StrictMode>,
  root
);

