import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import _ from 'lodash';

console.log(_.join(['Index', 'module', 'loaded!'], ' '));
console.log('indexjs works fine');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);