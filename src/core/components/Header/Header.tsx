import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUserSelector } from '@core/store/user/userSelectors';

import { Title } from '../Title';
import { Button } from '../Button';
import { Profile } from '../Profile';
import { Svg } from '../Svg';

import { PAGE_TITLES } from '@core/constants/pageTitles';

import { taskEditorActions } from '@tasks/store/task/taskEditor/taskEditorSlice';
import { TaskEditorModal } from '@tasks/components/TaskEditorModal';

import s from './Header.module.scss';

const DEFAULT_FORM_DATA = {
  name: '',
  description: '',
  status: 'todo',
  type: 'task',
  priority: 'normal',
};

export const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const user = useSelector(getUserSelector);

  const pageTitle = location.pathname.replace(/\//, '') || PAGE_TITLES[location.pathname];

  const handleAdd = () => {
    dispatch(taskEditorActions.toggleEditor(DEFAULT_FORM_DATA));
  };

  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.left}>
          <Title>{pageTitle}</Title>
        </div>
        <div className={s.right}>
          <Button theme="secondary" className={s.addButton} onClick={handleAdd}>
            <Svg src="icons/plus.svg" width={16} height={16} />
            Add
          </Button>
          <Profile user={user} className={s.headerProfile} />

          <TaskEditorModal />
        </div>
      </div>
    </div>
  );
};
