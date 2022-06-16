import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './styles/index.scss';
import App from './App';

const node = document.getElementById('root') || document.createElement('div');
const root = ReactDOM.createRoot(node);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
