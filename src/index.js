import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import _ from 'lodash';

console.log(_.join(['Another', 'module', 'loaded!'], ' '));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);