import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import RouteNavigation from './route';
import './globalStyle.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteNavigation >
    <App />
    </RouteNavigation>
  </React.StrictMode>
);
