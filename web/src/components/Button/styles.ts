import styled from 'styled-components';

export const Container = styled.button`
  width: 360px;
  height: 64px;
  border: 0;
  border-radius: 15px;
  cursor: pointer;


  font-weight: 600;
  background: #37C77F;
  color: #FFF;

  transition: background-color 0.2s;
  &:hover {
    background: #3BD689;
  }
`;

export const LoadingContainer = styled.div`
  margin: auto;
  width: fit-content;
  height: fit-content;
`;
