import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { getStatusesColumns } from '@core/store/statuses/statusesSelectors';
import { statusesActions } from '@core/store/statuses/statusesSlice';

import { BoardColumn } from '../BoardColumn/BoardColumn';

import s from './BoardColumns.module.scss';

export const BoardColumns = () => {
  const dispatch = useDispatch();

  const columns = useSelector(getStatusesColumns);

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

    dispatch(statusesActions.moveTask(data));
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
