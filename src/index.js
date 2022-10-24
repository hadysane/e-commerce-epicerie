import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/views/App';
import { Provider } from 'react-redux';
import { store } from './app/lib/store'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);


