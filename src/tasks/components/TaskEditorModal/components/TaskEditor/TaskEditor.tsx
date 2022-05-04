import * as React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

import { Input } from '@core/components/Input';
import { Svg } from '@core/components/Svg';
import { Textarea } from '@core/components/Textarea';
import { Button } from '@core/components/Button';

import { tasksActions } from '@tasks/store/tasks/tasksSlice';

import s from './TaskEditor.module.scss';
import { taskEditorActions } from '@tasks/store/task/taskEditor/taskEditorSlice';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
    status: 'todo',
    type: 'feature',
    priority: 'normal',
  });

  const handleFieldChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreate = () => {
    const task = {
      id: uuidv4(),
      ...formData,
    };

    dispatch(tasksActions.addTask(task));
    dispatch(taskEditorActions.toggleEditor());
  };

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2 className={s.title}>Create task</h2>
      </div>
      <div className={s.content}>
        <div className={cn(s.field, s.fieldName)}>
          <div className={s.labelField}>
            <Svg src="icons/envelope.svg" width={18} height={18} />
            <span>Task Name</span>
          </div>
          <Input
            className={s.inputField}
            name="name"
            value={formData.name}
            placeholder="Enter task name"
            onChange={handleFieldChange}
          />
        </div>

        <div className={cn(s.field, s.fieldDescription)}>
          <div className={s.labelField}>
            <Svg src="icons/text.svg" width={18} height={18} />
            <span>Description</span>
          </div>
          <Textarea
            className={s.textField}
            name="description"
            value={formData.description}
            placeholder="Enter task description"
            onChange={handleFieldChange}
          />
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.actions}>
          <Button onClick={handleCreate}>Create</Button>
        </div>
      </div>
    </div>
  );
};
