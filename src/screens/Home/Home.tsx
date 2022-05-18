import React from 'react';

import { Title } from '@core/components/Title';

import s from './Home.module.scss';

export const Home = () => {
  return (
    <div className={s.root}>
      <Title>Dashboard</Title>
    </div>
  );
};
