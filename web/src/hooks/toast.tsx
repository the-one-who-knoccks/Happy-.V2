import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/ToastContainer'

interface ToastContextData {
  addToast(message: toastWithoutId): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

type toastWithoutId = Omit<ToastMessage, 'id'>;

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const addToast = useCallback(
    ({ type, title, description }: toastWithoutId) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(previousMessages => [toast, ...previousMessages]);
    },
    [],
  );
  const removeToast = useCallback((id: string): void => {
    setMessages(previous => previous.filter(message => message.id !== id));
  }, []);
  return (
    <>
      <ToastContext.Provider value={{ addToast, removeToast }}>
        {children}
        <ToastContainer messages={messages} />
      </ToastContext.Provider>
    </>
  );
};

export const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('Use toast must be used within a toast provider');
  }
  return context;
};

export default ToastProvider;
