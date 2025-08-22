import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

export interface ButtonProps extends AntButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  type,
  ...props 
}) => {
  const getButtonType = () => {
    switch (variant) {
      case 'primary':
        return 'primary';
      case 'danger':
        return 'primary';
      case 'success':
        return 'primary';
      case 'secondary':
      default:
        return 'default';
    }
  };

  const getButtonDanger = () => {
    return variant === 'danger';
  };

  const getButtonStyle = () => {
    if (variant === 'success') {
      return {
        backgroundColor: '#52c41a',
        borderColor: '#52c41a',
        ...props.style
      };
    }
    return props.style;
  };

  return (
    <AntButton
      type={type || getButtonType()}
      danger={getButtonDanger()}
      style={getButtonStyle()}
      {...props}
    >
      {children}
    </AntButton>
  );
};
