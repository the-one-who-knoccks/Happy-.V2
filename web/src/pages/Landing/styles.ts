import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ImageBackground from '../../images/landing.svg'

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #7159c1 10%, #00C7C7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${ImageBackground}) no-repeat 80% center;

  main {
    max-width: 350px;
    animation: mainAnimation 5s linear 0s infinite alternate;
  }

  main h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  main p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }

  img {
    transition: transform 0.2s;
    animation: myFirst 0.8s linear 0s infinite alternate;
  }

`

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
`

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;
  transition: transform 0.2s;
  animation: scaleButton 1s infinite alternate;
  &:hover {
    background: #96feff;
  }
`
