import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  type?: string;
  isFocused: boolean;
  isFilled: boolean;
  hasValueInProps: boolean;
  hasError: boolean;
}

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const appearFromBottom = keyframes`
  0% {
    opacity: 0;
    top: -20px;
  }

  100% {
    opacity: 0.9;
  }
`;


export const Container = styled.label<ContainerProps>`
  position: relative;
  display: flex;
  cursor: text;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  width: 350px;
  height: 72px;
  padding: 4px 12px;
  border: 1px solid;
  background: #D3E2E5;

  ${props =>
    props.hasError &&
    css`
      border-color: ${props => props.theme.redDelete};
      animation: ${shake} 0.82s ease-out;
    `}

  ${props =>
    props.hasValueInProps &&
    css`
      cursor: not-allowed;
    `};


  > label {
    position: absolute;
    cursor: text;
    font-size: 14px;
    top: 50%;
    font-family: 'Nunito';
    transform: translateY(-50%);
    transition: top 0.3s ease-out;
    color: #808080;

    ${props =>
      (props.isFocused || props.isFilled) &&
      css`
        top: 20%;
      `};
  }

  & + div {
    border-top: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -2px;
    top: 20%;
    width: 2px;
    height: 60%;
    background: #37C77F;
    transform: scale(0, 0);
    transition: transform 0.3s ease-out;

    ${props =>
      props.hasError &&
      css`
        background: ${props => props.theme.redDelete};
      `}

    ${props =>
      (props.isFilled || props.isFocused) &&
      css`
        transform: scale(1, 1);
      `}
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin-top: 15px;
    > input {
      flex: 1;
      background: transparent;
      border: 0;
      outline: none;
      margin-bottom: 4px;


      ${props =>
        props.hasValueInProps &&
        css`
          color: ${props => props.theme.complementTextColor};
        `};
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 130px;
`;

export const ToggleView = styled.button`
  background: transparent;
  border: 0;
  width: 24px;
  height: 24px;
  margin-right: 5px;
  outline: none;

  > svg {
    color: #37C77F;
  }
`;

interface ErrorMessageProps {
  hasError: boolean;
  isHovered: boolean;
}

export const ErrorMessage = styled.div<ErrorMessageProps>`
  position: absolute;
  display: none;
  height: fit-content !important;

  > div {
    display: none;
  }

  ${props =>
    props.isHovered &&
    props.hasError &&
    css`
      display: block;
      > div {
        position: relative;
        display: block;
        padding: 4px;
        top: -50px;
        background: ${props => props.theme.redDelete};
        color: #fff;
        border-radius: 4px;
        transition: opacity 0.19s ease-out;
        animation: ${appearFromBottom} 0.2s ease-out;
        opacity: 0.9;
        &::before {
          position: absolute;
          bottom: -10px;
          content: '';
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-top: 20px solid ${props => props.theme.redDelete};
        }
      }
    `}
`;

