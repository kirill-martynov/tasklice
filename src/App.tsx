import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import { reduxHistory, store } from './core/redux/store';

import { Home } from './screens/Home';

function App() {
  return (
    <Provider store={store}>
      <Router history={reduxHistory}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
