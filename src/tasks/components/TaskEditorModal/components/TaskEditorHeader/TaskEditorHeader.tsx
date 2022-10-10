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

export const TaskEditorHeader = ({ task, onChange }: TaskEditorProps) => {
  return <div className={s.root}>TaskEditorHeader</div>;
};
