import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import clsx from 'clsx';

interface ModalItemProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnBackdropClick?: boolean;
  closeOnEsc?: boolean;
  className?: string;
}

const ModalItem = ({
  isOpen,
  onClose,
  children,
  closeOnBackdropClick = true,
  closeOnEsc = true,
  className,
}: ModalItemProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.backdrop}
      onClick={closeOnBackdropClick ? onClose : undefined}
    >
      <div
        className={clsx(styles.modal, className)}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalItem;
