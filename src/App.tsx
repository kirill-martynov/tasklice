import { Routes, Route } from 'react-router';

import { Sidebar } from '@core/components/Sidebar';
import { Header } from '@core/components/Header';

import { Home } from '@screens/Home';
import { Tasks } from '@screens/Tasks';
import { Board } from '@screens/Board';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.root}>
      <Sidebar />
      <main className={s.main}>
        <Header />
        <div className={s.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/board" element={<Board />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
