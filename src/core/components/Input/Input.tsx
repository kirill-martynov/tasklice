import * as React from 'react';
import cn from 'classnames';

import s from './Input.module.scss';
import { Svg } from '../Svg';

interface InputProps {
  name: string;
  value: string;

  label?: string;
  className?: string;
  classNames?: {
    label?: string;
    input?: string;
    icon?: string;
  };
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  autoComplete?: 'on' | 'off';
  autoFocus?: boolean;
  icon?: {
    name?: string;
    width?: number;
    height?: number;
  };

  onChange: (name: string, value: string) => void;
}
export const Input = ({
  name,
  label,
  value,
  className,
  classNames,
  placeholder,
  type = 'text',
  autoComplete = 'off',
  autoFocus,
  icon = {},
  onChange,
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    onChange(name, value);
  };

  const hasIcon = Boolean(Object.keys(icon)?.length);

  return (
    <div className={cn(s.root, className)}>
      {label && <label className={cn(s.label, classNames?.label)}>{label}</label>}
      <div>
        {hasIcon && (
          <Svg
            className={cn(s.icon)}
            src={`icons/${icon.name}.svg`}
            width={icon.width}
            height={icon.height}
          />
        )}
        <input
          type={type}
          className={cn(s.input, classNames?.input, {
            [s.withIcon]: hasIcon,
          })}
          name={name}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
