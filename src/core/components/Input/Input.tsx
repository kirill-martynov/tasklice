import * as React from 'react';
import cn from 'classnames';

import s from './Input.module.scss';
import { Svg } from '../Svg';

interface InputProps {
  name: string;
  label: string;
  value: any;

  className?: string;
  classNames?: {
    label?: string;
    input?: string;
    icon?: string;
  };
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  autocomplete?: 'on' | 'off';
  icon?: {
    name?: string;
    width?: number;
    height?: number;
  };

  onChange: (name: string, value: any) => void;
}
export const Input = ({
  name,
  label,
  value,
  className,
  classNames,
  placeholder,
  type = 'text',
  icon,
  onChange,
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    onChange(name, value);
  };

  const hasIcon = Boolean(Object.keys(icon).length);

  return (
    <div className={cn(s.root, className)}>
      <label className={cn(s.label, classNames?.label)}>{label}</label>
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
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
