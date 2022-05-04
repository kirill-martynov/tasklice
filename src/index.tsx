import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, reduxHistory, store } from '@core/redux/store';

import App from './App';

import './assets/css/variables.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={reduxHistory}>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);
