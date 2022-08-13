import * as React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';

import s from './Sidebar.module.scss';

interface SidebarProps {
  isShowing: boolean;
  children: React.ReactNode;
  className?: string;

  onConfirm?: () => void;
  onClose: () => void;
}

export const Sidebar = ({ isShowing, children, className, onClose }: SidebarProps) => {
  return ReactDOM.createPortal(
    <CSSTransition in={isShowing} timeout={300} classNames={{ ...s }} unmountOnExit>
      <div className={s.overlay} onClick={onClose}>
        <div className={s.wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className={cn(s.sidebar, className)} onClick={(event) => event.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};
