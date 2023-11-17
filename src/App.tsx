import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './app-routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import config from './store/config';

const { store, persistor } = config;

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoute />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
