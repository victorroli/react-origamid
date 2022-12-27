import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Event from './Events';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Event />
    <App />
  </React.StrictMode>
);
