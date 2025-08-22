import React from 'react';
import { 
  Form as AntForm, 
  Input, 
  InputNumber, 
  Select 
} from 'antd';
import type { FormProps as AntFormProps } from 'antd';

export interface FormProps extends AntFormProps {
  children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <AntForm layout="vertical" {...props}>
      {children}
    </AntForm>
  );
};

export const FormItem = AntForm.Item;

// Form field components
export const FormInput: React.FC<React.ComponentProps<typeof Input>> = (props) => {
  return <Input {...props} />;
};

export const FormTextArea: React.FC<React.ComponentProps<typeof Input.TextArea>> = (props) => {
  return <Input.TextArea {...props} />;
};

export const FormInputNumber: React.FC<React.ComponentProps<typeof InputNumber>> = (props) => {
  return <InputNumber style={{ width: '100%' }} {...props} />;
};

export const FormSelect: React.FC<React.ComponentProps<typeof Select>> = (props) => {
  return <Select {...props} />;
};

export const FormSelectOption = Select.Option;
