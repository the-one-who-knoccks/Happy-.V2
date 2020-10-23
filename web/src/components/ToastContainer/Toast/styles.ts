import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: number;
}

const toastTypeVariation = {
  info: css`
    background: #ebf9ff;
    color: #3172b7;

    div {
      strong {
        color: #3172b7;
      }
    }
  `,
  success: css`
    background: #e6fffa;
    color: #2e655a;

    div {
      strong {
        color: #2e655a;
      }
    }
  `,
  error: css`
    background: #fddede;
    color: #000;

    div {
      strong {
        color: #000;
      }
    }
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  & + div {
    margin-top: 7px;
  }
  ${props => toastTypeVariation[props.type || 'info']}
  > svg {
    margin: 4px 12px 0 0;
  }
  div {
    flex: 1;
    padding: 0 4px;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.8;
    border: 0;
    background: transparent;
    color: inherit;
  }
  ${props =>
    !props.hasdescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
      button {
      }
    `}
`;
