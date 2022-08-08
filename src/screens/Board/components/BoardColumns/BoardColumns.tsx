import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { Task } from '@core/types/task';
import { getStatusesColumns } from '@core/store/statuses/statusesSelectors';
import { statusesActions } from '@core/store/statuses/statusesSlice';

import { getTasksDataSelector } from '@tasks/store/tasks/tasksSelectors';
import { updateTask } from '@tasks/store/tasks/tasksThunks';

import { BoardColumn } from '../BoardColumn/BoardColumn';

import s from './BoardColumns.module.scss';

export const BoardColumns = () => {
  const dispatch = useDispatch();

  const columns = useSelector(getStatusesColumns);
  const tasks = useSelector(getTasksDataSelector);

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination, draggableId } = result;
    const data = {
      sourceData: { id: source.droppableId, index: source.index },
      destinationData: { id: destination.droppableId, index: destination.index },
      id: draggableId,
    };

    const currentTask = tasks.find((item: Task) => item._id === data.id);
    const task = { ...currentTask, status: data.destinationData.id };

    dispatch(statusesActions.moveTask(data));
    dispatch(updateTask(task));
  };

  return (
    <div className={s.root}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {Object.entries(columns).map(([columnName, column]) => (
          <BoardColumn key={`BOARD-${columnName}`} status={columnName} tasks={column.items} />
        ))}
      </DragDropContext>
    </div>
  );
};
