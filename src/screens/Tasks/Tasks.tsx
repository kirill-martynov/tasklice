import { useSelector } from 'react-redux';

import { Task } from '@core/types/task';

import { Title } from '@core/components/Title';
import { ScrollableWrapper } from '@core/components/Scrollable';
import { TaskItem } from '@core/components/TaskItem';

import { getTasksDataSelector } from '@tasks/store/tasks/tasksSelectors';

import s from './Tasks.module.scss';

export const Tasks = () => {
  const tasks = useSelector(getTasksDataSelector);

  return (
    <div className={s.root}>
      <ScrollableWrapper>
        <div className={s.content}>
          {tasks.map((item: Task) => (
            <TaskItem key={item._id} task={item} />
          ))}
        </div>
      </ScrollableWrapper>
    </div>
  );
};
