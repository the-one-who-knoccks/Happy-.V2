import styled from 'styled-components';
import { Form as UnformForm } from '@unform/web';

import ImageBackground from '../../images/landing.svg';


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  /* background: linear-gradient(329.54deg, #7159c1 0%, #00c7c7 100%); */
`;


export const BackgroundImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100vh;
  background: url(${ImageBackground}) #7159f1 no-repeat center;
  background-size: initial;
  background-position: 60rem;



  > .logoimg {
    margin-bottom: 550px;
    padding-left: 350px;
    margin-right: -240px;
  }

  main {
    max-width: 350px;
    animation: mainAnimation 5s linear 0s infinite alternate;
  }

  > main h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
    margin-top: 300px;
  }

  > main p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }

  > img {
    transition: transform 0.2s;
    animation: myFirst 0.8s linear 0s infinite alternate;
  }
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

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }

  strong {
    font-weight: 800;
  }
`;

export const Form = styled(UnformForm)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: auto;

  > h1 {
    color: #5c8599;
    margin-bottom: 15px;
    font-family: 'Nunito';
  }
  > p {
    color: #5c8599;
    margin-bottom: 15px;
    font-family: 'Nunito'
  }
`;

/* export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 25px;
  color: #8fa7b2;
  font-size: 14px;

  > a {
    color: #8fa7b2;
    font-size: 14px;
    font-weight: bold;
  }
`; */

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
      color: #7159c1;

      &:hover {
        color: #715990;
      }
    }
  }

  > span {
    color: #000;
    font-size: 14px;
  }
`;
