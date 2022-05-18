import cn from 'classnames';

import s from './Label.module.scss';

interface LabelProps {
  className?: string;

  type: 'status' | 'priority' | 'type';
  value: string;
}

export const Label = (props: LabelProps) => {
  return (
    <div className={cn(s.root, s[props.type], s[props.value], props.className)}>{props.value}</div>
  );
};
