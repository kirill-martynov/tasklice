import { Title } from '@core/components/Title';
import React from 'react';

import s from './Tasks.module.scss';

export const Tasks = () => {
  return (
    <div className={s.root}>
      <Title>Tasks</Title>
    </div>
  );
};
