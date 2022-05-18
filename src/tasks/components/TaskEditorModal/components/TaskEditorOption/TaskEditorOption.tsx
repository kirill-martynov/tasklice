import * as React from 'react';
import { usePopper } from 'react-popper';
import cn from 'classnames';

import { Svg } from '@core/components/Svg';
import { Label } from '@core/components/Label';

import s from './TaskEditorOption.module.scss';

const OPTIONS_TITLE = {
  priority: 'priorities',
  status: 'statuses',
  type: 'types',
};
const OPTIONS = {
  priority: ['low', 'normal', 'high'],
  status: ['todo', 'progress', 'review', 'done'],
  type: ['task', 'feature', 'improvement', 'bug'],
};

interface TaskEditorOptionProps {
  className?: string;

  type: 'priority' | 'status' | 'type' | 'users';
  name: string;
  value: string;
  icon?: string;

  onClick: (field: string, value: string) => void;
}

export const TaskEditorOption = (props: TaskEditorOptionProps) => {
  const { className, type, name, value, icon, onClick } = props;

  const [show, setShow] = React.useState(false);

  const referenceRef = React.useRef(null);
  const popperRef = React.useRef(null);

  const { styles, attributes } = usePopper(referenceRef.current, popperRef.current, {
    placement: 'bottom-start',
    modifiers: [{ name: 'offset', options: { offset: [0, 0] } }],
  });

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsidePopoverClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsidePopoverClick);
    };
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  const handleClick = (option: string) => {
    onClick(type, option);
  };

  const handleOutsidePopoverClick = (event) => {
    if (referenceRef.current.contains(event.target)) {
      return;
    }

    setShow(false);
  };

  return (
    <div className={cn(s.root, className)}>
      <div className={s.name}>
        <Svg src={`icons/${type}.svg`} width={16} height={16} />
        {name}:
      </div>
      <div
        className={cn(s.value, {
          [s.active]: show,
        })}
        ref={referenceRef}
        onClick={handleShow}
      >
        {type !== 'users' && <Label type={type} value={value} />}
        <div
          ref={popperRef}
          className={cn(s.popper, { [s.popperShow]: show })}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className={s.popperHeader}>
            <h5 className={s.popperTitle}>{OPTIONS_TITLE[type]}</h5>
          </div>
          <div className={s.popperContent}>
            {OPTIONS[type]?.map((option: string) => (
              <div
                key={`TASK_EDITOR_OPTION_${option}`}
                className={s.popperItem}
                onClick={() => handleClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
