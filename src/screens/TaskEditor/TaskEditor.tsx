import * as React from 'react';
import { useParams } from 'react-router-dom';

import s from './TaskEditor.module.scss';

export const TaskEditor = () => {
  const params = useParams();

  return <div className={s.root}></div>;
};
