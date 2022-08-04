import { useDispatch } from 'react-redux';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import ReactMarkdown from 'react-markdown';
import cn from 'classnames';

import { Svg } from '@core/components/Svg';
import { Task } from '@core/types/task';

import { taskViewActions } from '@tasks/store/task/taskView/taskViewSlice';

import { TaskCardHeader } from './components/TaskCardHeader';

import s from './TaskCard.module.scss';

interface TaskCardProps {
  task: Task;
  index: number;
}

export const TaskCard = ({ task, index }: TaskCardProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(taskViewActions.setTask(task));
  };

  return (
    <Draggable draggableId={task._id} index={index} key={task._id}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          className={cn(s.root, {
            [s.dragging]: snapshot.isDragging,
          })}
          onClick={handleClick}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskCardHeader task={task} />
          <div className={s.content}>
            <div className={s.descriptionWrapper}>
              <ReactMarkdown className={s.description}>{task.description}</ReactMarkdown>
            </div>
            <div className={s.info}>
              <div>
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
              <div className={s.metaItem}>
                <Svg src="icons/message-square.svg" width={12} height={12} />
                <span>15</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
