import styled from 'styled-components';

interface ContainerProps {
  type?: string;
  isFocused: boolean;
  isFilled: boolean;
  hasValueInProps: boolean;
  hasError: boolean;
}

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

  > label {
    position: absolute;
    cursor: text;
    font-size: 14px;
    top: 50%;
    margin-left: 8px;
    font-family: 'Nunito';
    transform: translateY(-50%);
    transition: top 0.3s ease-out;
    color: #000;
    border-radius: 50%;
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
    background: #7159c1;
    transform: scale(0, 0);
    transition: transform 0.3s ease-out;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin-top: 15px;

    > input {
      flex: 1;
      background: #D3E2E5;
      border: 0;
      border-radius: 8px;
      margin-bottom: 4px;
      height: 64px;

    }
  }
`;
