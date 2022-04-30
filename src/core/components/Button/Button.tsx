import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;

  className?: string;
  type?: 'button' | 'submit' | 'reset';
  theme?: 'primary' | 'secondary';

  onClick: () => void;
}
export const Button = ({
  children,
  className,
  type = 'button',
  theme = 'primary',
  onClick,
}: ButtonProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      type={type}
      className={cn(s.root, s[theme], className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
