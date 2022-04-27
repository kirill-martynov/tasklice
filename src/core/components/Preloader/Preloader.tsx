import React from 'react';

import s from './Preloader.module.scss';

export const Preloader = () => {
  const isActive = false;

  if (!isActive) return null;

  return <div className={s.root}></div>;
};
