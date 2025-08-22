import React from 'react';
import { Modal as AntModal } from 'antd';
import type { ModalProps as AntModalProps } from 'antd';

export interface ModalProps extends AntModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  return (
    <AntModal {...props}>
      {children}
    </AntModal>
  );
};

export const { confirm } = AntModal;
