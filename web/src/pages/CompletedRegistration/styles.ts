import styled from 'styled-components'
import ebaImage from '../../images/eba.png';
import {Link} from 'react-router-dom';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: #37C77F;
  overflow: hidden;

`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  background: url(${ebaImage}) no-repeat 80% center;

  > main {
    max-width: 400px;
  }

  > main h1 {
    color: #FFFFFF;
    font-size: 80px;
    font-weight: 800;
    margin-top: 300px;
    padding-left: 50px;

  }

  > main p {
    color: #FFFFFF;
    margin-top: 10px;
    font-size: 24px;
    line-height: 34px;


  }

  /* height: 100%;
  max-height: 680px; */



`;

export const GoBackButton = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 243px;
  height: 64px;
  background: #31B272;
  color: #FFFFFF;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 800;
  line-height: 25px;
  border: none;
  margin-top: 30px;
  margin-left: 50px;
  cursor: pointer;
  text-decoration: none;

  transition: background-color 0.2s;
  &:hover {
    background: #3BD689;
  }
`;
