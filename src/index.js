import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider, createStoreHook } from 'react-redux';
import { store } from './store';
import "./index.css"









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />

</Provider>);

