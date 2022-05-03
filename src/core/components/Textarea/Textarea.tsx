import * as React from 'react';
import cn from 'classnames';

import s from './Textarea.module.scss';

interface TextareaProps {
  name: string;
  label: string;
  value: any;

  className?: string;
  classNames?: {
    label?: string;
    textarea?: string;
  };

  onChange: (name: string, value: any) => void;
}
export const Textarea = ({
  name,
  label,
  value,
  className,
  classNames,
  onChange,
}: TextareaProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;

    onChange(name, value);
  };
  return (
    <div className={cn(s.root, className)}>
      <label className={cn(s.label, classNames?.label)}>{label}</label>
      <textarea
        className={cn(s.textarea, classNames?.textarea)}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
