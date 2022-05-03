import * as React from 'react';

import { Title } from '@core/components/Title';
import { Input } from '@core/components/Input';
import { Textarea } from '@core/components/Textarea';

import s from './CreateTask.module.scss';

export const CreateTask = () => {
  const [formData, setFormData] = React.useState({
    taskName: '',
    taskDescription: '',
  });

  const handleFieldChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={s.root}>
      <div className={s.header}>
        <Title>Create Task</Title>
      </div>

      <div className={s.content}>
        <div className={s.fields}>
          <Input
            className={s.field}
            name="taskName"
            label="Task name:"
            value={formData.taskName}
            onChange={handleFieldChange}
            icon={{ name: 'envelope', width: 18, height: 18 }}
          />
          <Textarea
            className={s.field}
            name="taskDescription"
            label="Task description:"
            value={formData.taskDescription}
            onChange={handleFieldChange}
          />
        </div>
      </div>
    </div>
  );
};
