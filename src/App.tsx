import * as React from 'react';
import { Routes, Route } from 'react-router';

import { Sidebar } from '@core/components/Sidebar';
import { Header } from '@core/components/Header';
import { Preloader } from '@core/components/Preloader';
import { TaskModal } from '@core/components/TaskModal';

import s from './App.module.scss';

const ROUTES = [
  { element: React.lazy(() => import('@screens/Home')), path: '/' },
  { element: React.lazy(() => import('@screens/Dashboard')), path: '/dashboard' },
  { element: React.lazy(() => import('@screens/Board')), path: '/projects' },
  { element: React.lazy(() => import('@screens/Tasks')), path: '/tasks' },
  { element: React.lazy(() => import('@screens/Settings')), path: '/settings' },
];

function App() {
  return (
    <div className={s.root}>
      <Sidebar />
      <main className={s.main}>
        <Header />
        <div className={s.content}>
          <Preloader />
          <React.Suspense fallback="Loading...">
            <Routes>
              {ROUTES.map((route) => {
                const Screen = route.element;

                return <Route key={route.path} path={route.path} element={<Screen />} />;
              })}
            </Routes>
          </React.Suspense>
        </div>
      </main>

      <TaskModal />
    </div>
  );
}

export default App;
