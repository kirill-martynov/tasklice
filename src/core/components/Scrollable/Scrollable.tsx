import React from 'react';
import cn from 'classnames';

import s from './Scrollable.module.scss';

interface ScrollableProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollableWrapper = ({ children, className }: ScrollableProps) => {
  return <div className={cn(s.root, className)}>{children}</div>;
};
