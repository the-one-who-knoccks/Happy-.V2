import styled from 'styled-components';
import { Form as UnformForm } from '@unform/web';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const BackgroundImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  background: linear-gradient(329.54deg, #7159c1 0%, #00c7c7 100%);
  background-size: contain;
  background-position: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 672px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: '#D3E2E5'
`;

export const Form = styled(UnformForm)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: auto;

  > h1 {
    color: #5C8599;
    margin-bottom: 15px;
    font-family: 'Nunito';
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 25px;
  color: #000;
  font-size: 14px;

  > a {
    color: #8FA7B2;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const BottomItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 0 30px;
  width: 50%;

  > p {
    color: #000;
    width: fit-content;

    > a {
      display: block;
      width: fit-content;
      transition: color 0.3s ease;
      color: #000;

      &:hover {
        color: #000;
      }
    }
  }

  > span {
    color: #000;
    font-size: 14px;
  }
`;
