import React from 'react';
import cn from 'classnames';

import s from './Title.module.scss';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TitleProps) => {
  return <h1 className={cn(s.root, className)}>{children}</h1>;
};
