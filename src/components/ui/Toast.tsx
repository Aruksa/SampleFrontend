import { message } from 'antd';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastOptions {
  duration?: number;
  onClose?: () => void;
}

export const Toast = {
  success: (content: string, options?: ToastOptions) => {
    message.success(content, options?.duration, options?.onClose);
  },
  
  error: (content: string, options?: ToastOptions) => {
    message.error(content, options?.duration, options?.onClose);
  },
  
  warning: (content: string, options?: ToastOptions) => {
    message.warning(content, options?.duration, options?.onClose);
  },
  
  info: (content: string, options?: ToastOptions) => {
    message.info(content, options?.duration, options?.onClose);
  },
  
  loading: (content: string, duration?: number) => {
    return message.loading(content, duration);
  },
  
  destroy: () => {
    message.destroy();
  }
};
