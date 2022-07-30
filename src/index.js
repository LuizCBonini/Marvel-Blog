import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import RouteNavigation from './route'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteNavigation />
    <App />
  </React.StrictMode>
);
