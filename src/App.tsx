import * as React from 'react';
import { Routes, Route } from 'react-router';

import { Sidebar } from '@core/components/Sidebar';
import { Header } from '@core/components/Header';
import { Preloader } from '@core/components/Preloader';

import s from './App.module.scss';

const ROUTES = [
  { element: React.lazy(() => import('@screens/Home')), path: '/' },
  { element: React.lazy(() => import('@screens/Tasks')), path: '/tasks' },
  { element: React.lazy(() => import('@screens/Board')), path: '/board' },
  { element: React.lazy(() => import('@screens/Settings')), path: '/settings' },
  { element: React.lazy(() => import('@screens/CreateTask')), path: '/create' },
  {
    element: React.lazy(() => import('@screens/TaskEditor')),
    path: '/edit/:id',
  },
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

                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Screen />}
                  />
                );
              })}
            </Routes>
          </React.Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
