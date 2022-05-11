import * as React from 'react';
import { useDrag } from 'react-dnd';
import cn from 'classnames';

import { Task } from '@core/types/task';

import s from './TaskCard.module.scss';
import { Svg } from '@core/components/Svg';

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'taskCard',
    item: { task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className={cn(s.root, {
        [s.dragging]: isDragging,
      })}
      ref={drag}
    >
      <div className={s.header}>
        <div className={s.priorityWrapper}>
          <span className={cn(s.priority, s[task.priority])}>
            {task.priority}
          </span>
        </div>
        <h5 className={s.title}>{task.name}</h5>
        <button className={cn(s.button, s.more)}>
          <Svg src="icons/more-horizontal.svg" width={24} height={24} />
        </button>
      </div>
      <div className={s.content}>
        <div className={s.descriptionWrapper}>
          <p className={s.description}>{task.description}</p>
        </div>
        <div className={s.info}>
          <div className={s.typeWrapper}>
            <span className={cn(s.type, s[task.type])}>{task.type}</span>
          </div>
          <div className={s.participant}>
            <img src={`icons/avatars/female-4.svg`} alt="avatar" />
          </div>
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.meta}>
          <div className={cn(s.metaItem, s.attachment)}>
            <Svg src="icons/attachment.svg" width={12} height={12} />
            <span>2</span>
          </div>
          <div className={cn(s.metaItem, s.messages)}>
            <Svg src="icons/message-square.svg" width={12} height={12} />
            <span>15</span>
          </div>
        </div>
      </div>
    </div>
  );
};
