import cn from 'classnames';

import { Input } from '@core/components/Input';
import { Svg } from '@core/components/Svg';
import { Task } from '@core/types/task';

import { TaskEditorOption } from '../TaskEditorOption';

import s from './TaskEditorHeader.module.scss';

interface TaskEditorProps {
  task: Task;

  onChange: (fieldName: string, value: string) => void;
}

export const TaskEditorHeader = ({ task, onChange }) => {
  return (
    <div className={s.root}>
      <div className={cn(s.field, s.fieldName)}>
        <div className={s.labelField}>
          <Svg src="icons/envelope.svg" width={14} height={14} />
          <span>Task Name</span>
        </div>
        <Input
          className={s.inputField}
          name="name"
          value={task.name}
          placeholder="Enter task name"
          autoFocus
          onChange={onChange}
        />
      </div>
      <div className={s.options}>
        <TaskEditorOption type="status" name="Status" value={task.status} onClick={onChange} />
        <TaskEditorOption type="type" name="Type" value={task.type} onClick={onChange} />
        <TaskEditorOption
          type="priority"
          name="Priority"
          value={task.priority}
          onClick={onChange}
        />
        <TaskEditorOption type="users" name="Assignee" value={task.type} onClick={onChange} />
        {/* <div className={s.option}> */}
        {/*   <span className={s.optionLabel}>Participants:</span> */}
        {/*   <span className={cn(s.optionValue, s.optionValueList)}> */}
        {/*     <div className={s.participant}> */}
        {/*       <img src={`icons/avatars/female-2.svg`} alt="avatar" /> */}
        {/*     </div> */}
        {/*     <span>Christina M.</span> */}
        {/*   </span> */}
        {/* </div> */}
      </div>
    </div>
  );
};
