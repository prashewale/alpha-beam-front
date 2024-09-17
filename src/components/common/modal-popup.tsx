import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

interface ModalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  closeButtonPosition?: 'left' | 'right';
  closeButtonStyle?: React.CSSProperties;
  closeButtonClassName?: string;
  className?: string;
}

const ModalPopup: React.FC<ModalPopupProps> = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton,
  closeButtonStyle,
  closeButtonPosition = 'right',
  className,
  closeButtonClassName,
}) => {
  useEffect(() => {
    // Bootstrap modal-specific clean up when component unmounts
    return () => {
      if (isOpen) {
        onClose();
      }
    };
  }, [isOpen, onClose]);

  return (
    <BootstrapModal
      show={isOpen}
      onHide={onClose}
      centered
      className={className}
      dialogClassName="modal-lg"
    >
      <BootstrapModal.Header className="border-0">
        {title ?? <BootstrapModal.Title>{title}</BootstrapModal.Title>}
        <button
          type="button"
          className={cn('close', closeButtonClassName)}
          aria-label="Close"
          onClick={onClose}
          style={closeButtonStyle}
        >
          <span aria-hidden="true">×</span>
        </button>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{children}</BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default ModalPopup;
