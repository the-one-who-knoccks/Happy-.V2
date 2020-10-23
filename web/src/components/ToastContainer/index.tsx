import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: {
        right: '-120%',
        opacity: 0.5,
      },
      enter: {
        right: '0%',
        opacity: 1,
      },
      leave: {
        right: '-120%',
        opacity: 0.5,
      },
    },
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
