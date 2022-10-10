import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { Svg } from '@core/components/Svg';
import { Textarea } from '@core/components/Textarea';
import { Button } from '@core/components/Button';
import { statusesActions } from '@core/store/statuses/statusesSlice';

import { taskEditorActions } from '@tasks/store/task/taskEditor/taskEditorSlice';
import { getTaskEditorDataSelector } from '@tasks/store/task/taskEditor/taskEditorSelectors';

import { TaskEditorHeader } from '../TaskEditorHeader';

import s from './TaskEditor.module.scss';
import { createTask } from '@tasks/store/tasks/tasksThunks';
import { Input } from '@core/components/Input';

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
        ...formData,
      };

      dispatch(createTask(item));
    }

    dispatch(taskEditorActions.toggleEditor({}));
  };

  const isButtonDisabled = !formData.name || !formData.description;

  return (
    <div className={s.root}>
      <div className={s.row}>
        <div className={cn(s.column, s.leftColumn)}>
          <div className={s.header}>
            <h4>Taskline / Create a task</h4>
          </div>
          <div className={s.content}>
            <div className={cn(s.field, s.fieldName)}>
              <Input
                placeholder="Enter name"
                name="name"
                value={formData.name}
                autoFocus
                onChange={handleFieldChange}
              />
            </div>
            <div className={s.description}>
              <div className={s.switches}>
                <span className={s.active}>Description</span>
                <span>Preview</span>
              </div>
              <div className={cn(s.field, s.fieldDescription)}>
                <Textarea
                  placeholder="Enter description"
                  onChange={handleFieldChange}
                  name="description"
                  value={formData.description}
                />
                <div className={s.info}>
                  <div className={s.infoActions}>
                    <div className={cn(s.infoAction, s.attachment)}>
                      <Svg name="attachment" width={16} height={16} />
                    </div>
                    <div className={cn(s.infoAction, s.emoji)}>
                      <Svg name="emoji" width={16} height={16} />
                    </div>
                  </div>
                  <code>
                    <span>`code`</span>
                    <span>*italicized*</span>
                    <span>**strong**</span>
                  </code>
                  <span>Markdown</span>
                </div>
              </div>
            </div>
          </div>
          <div className={s.footer}>
            <div className={s.tabs}>
              <span className={s.active}>Comments</span>
              <span>Attachments</span>
            </div>
          </div>
        </div>
        <div className={cn(s.column, s.rightColumn)}>
          <div className={s.header}>
            <Svg name="attributes" width={14} height={14} />
            <h4>Attributes</h4>
          </div>
          <div className={s.actions}>
            <Button
              className={s.cancelButton}
              theme="secondary"
              onClick={() => dispatch(taskEditorActions.toggleEditor({}))}
            >
              Cancel
            </Button>
            <Button className={s.createButton} onClick={handleClick}>
              <Svg name="plus" width={12} height={12} />
              <span>Create</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
