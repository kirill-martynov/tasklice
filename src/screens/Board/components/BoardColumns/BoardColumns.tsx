import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { getStatusesColumns } from '@core/store/statuses/statusesSelectors';

import { BoardColumn } from '../BoardColumn/BoardColumn';

import s from './BoardColumns.module.scss';
import { Task } from '@core/types/task';
import { statusesActions } from '@core/store/statuses/statusesSlice';
import { tasksActions } from '@tasks/store/tasks/tasksSlice';

export const BoardColumns = () => {
  const dispatch = useDispatch();

  const columns = useSelector(getStatusesColumns);

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const { source, destination, draggableId } = result;

    let data = {};

    const currentColumn = columns[source.droppableId];
    const { items: currentItems } = currentColumn;
    const destinationColumn = columns[destination.droppableId];
    const { items: destinationItems } = destinationColumn;

    const currentItem = currentItems.find(
      (item: Task) => item.id === draggableId
    );
    const filteredItems = currentItems.filter(
      (item: Task) => item.id !== currentItem.id
    );

    const isSameColumn = source.droppableId === destination.droppableId;

    if (!isSameColumn) {
      const destinationColumnItems = [...destinationItems];

      destinationColumnItems.splice(destination.index, 0, currentItem);

      data = {
        ...columns,
        [source.droppableId]: { ...currentColumn, items: filteredItems },
        [destination.droppableId]: {
          ...destinationColumn,
          items: destinationColumnItems,
        },
      };

      dispatch(
        tasksActions.updateTask({
          id: currentItem.id,
          status: destination.droppableId,
        })
      );
    }

    if (isSameColumn) {
      // Place item
      filteredItems.splice(destination.index, 0, currentItem);

      data = {
        ...columns,
        [source.droppableId]: {
          ...currentColumn,
          items: filteredItems,
        },
      };
    }

    dispatch(statusesActions.moveTask({ columns: data }));
  };

  return (
    <div className={s.root}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {Object.entries(columns).map(([columnName, column]) => (
          <BoardColumn
            key={`BOARD-${columnName}`}
            status={columnName}
            tasks={column.items}
          />
        ))}
      </DragDropContext>
    </div>
  );
};
