import * as React from 'react';
import ReactDOM from 'react-dom';
import SVG from 'react-inlinesvg';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';

import s from './Modal.module.scss';

interface ModalProps {
  isShowing: boolean;
  children: React.ReactNode;
  className?: string;
  options?: {
    hasCloseButton: boolean;
  };

  onConfirm?: () => void;
  onClose: () => void;
}
export const Modal = ({
  isShowing,
  children,
  className,
  onClose,
  options = {
    hasCloseButton: true,
  },
}: ModalProps) => {
  return ReactDOM.createPortal(
    <CSSTransition in={isShowing} timeout={300} classNames={{ ...s }} unmountOnExit>
      <div className={s.overlay} onClick={onClose}>
        <div className={s.wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className={cn(s.modal, className)} onClick={(event) => event.stopPropagation()}>
            {options.hasCloseButton && (
              <button className={s.close} data-dismiss="modal" aria-label="Close" onClick={onClose}>
                <SVG src="icons/close.svg" width={24} height={24} />
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};
