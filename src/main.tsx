import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { PersistGate } from 'redux-persist/integration/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
      <DndProvider backend={HTML5Backend}>
        <Router history={reduxHistory}>
          <App />
        </Router>
      </DndProvider>
    </PersistGate>
  </Provider>
);
