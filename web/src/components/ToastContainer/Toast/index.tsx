import React, { useEffect } from 'react';
import { FiXCircle, FiAlertTriangle, FiCheck, FiInfo } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast'

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertTriangle size={24} />,
  success: <FiCheck size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);
  return (
    <Container
      style={style}
      type={message.type}
      hasdescription={Number(!!message.description)}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
