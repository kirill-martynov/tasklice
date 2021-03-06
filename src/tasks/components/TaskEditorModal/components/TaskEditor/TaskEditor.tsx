import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

import { Input } from '@core/components/Input';
import { Svg } from '@core/components/Svg';
import { Textarea } from '@core/components/Textarea';
import { Button } from '@core/components/Button';
import { statusesActions } from '@core/store/statuses/statusesSlice';

import { taskEditorActions } from '@tasks/store/task/taskEditor/taskEditorSlice';
import { getTaskEditorDataSelector } from '@tasks/store/task/taskEditor/taskEditorSelectors';

import { TaskEditorOption } from '../TaskEditorOption';
import { TaskEditorHeader } from '../TaskEditorHeader';

import s from './TaskEditor.module.scss';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const task = useSelector(getTaskEditorDataSelector);

  const [formData, setFormData] = React.useState<any>(task);

  const handleFieldChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (formData?.id) {
      dispatch(statusesActions.updateTask({ item: formData }));
    }

    if (!formData?.id) {
      const item = {
        id: uuidv4(),
        ...formData,
      };

      dispatch(statusesActions.addTask({ task: item }));
    }

    dispatch(taskEditorActions.toggleEditor({}));
  };

  const isButtonDisabled = !formData.name || !formData.description;

  return (
    <div className={s.root}>
      <TaskEditorHeader task={formData} onChange={handleFieldChange} />
      <div className={s.content}>
        <div className={cn(s.field, s.fieldDescription)}>
          <div className={s.labelField}>
            <Svg src="icons/text.svg" width={14} height={14} />
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
          <Button onClick={handleClick} disabled={isButtonDisabled}>
            {formData?.id ? 'Save' : 'Create'}
          </Button>
        </div>
      </div>
    </div>
  );
};
