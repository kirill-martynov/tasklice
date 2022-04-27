import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import { reduxHistory, store } from '@core/redux/store';

import App from './App';

import './assets/css/variables.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <Router history={reduxHistory}>
      <App />
    </Router>
  </Provider>
);
