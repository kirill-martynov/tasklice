import React from 'react';
import cn from 'classnames';

import s from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  gender?: string;
}

export const Avatar = ({ className, src, gender }: AvatarProps) => {
  return (
    <div className={cn(s.root, className)}>
      <img className={s.avatar} src={src || `icons/avatars/${gender}-5.svg`} alt="avatar" />
    </div>
  );
};
