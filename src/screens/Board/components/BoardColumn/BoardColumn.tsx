import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import cn from 'classnames';

import { Task } from '@core/types/task';
import { TaskCard } from '@tasks/components/TaskCard';

import { STATUS_LABELS } from '@screens/Board/boardConstants';

import s from './BoardColumn.module.scss';

interface BoardColumnProps {
  status: string;
  tasks: Task[];
}

export const BoardColumn = ({ status, tasks }: BoardColumnProps) => {
  const title = STATUS_LABELS[status];

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h4 className={s.title}>
          {title}
          <span className={s.tasksCounter}>({tasks.length})</span>
        </h4>
      </div>
      <Droppable droppableId={status} key={status}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={cn(s.content, {
              [s.droppable]: snapshot.isDraggingOver,
            })}
          >
            {tasks.map((task: Task, index: number) => (
              <TaskCard key={task.id} index={index} task={task} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
