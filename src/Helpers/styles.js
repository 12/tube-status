import styled, { createGlobalStyle } from 'styled-components';
import lineColours from './lineColours';

const DEVICE_BREAKPOINT_PX = 768;

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins');

    body {
        background: #273c75;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: none;
        font-family: 'Poppins', sans-serif;
    }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  background: #ffffff;
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media only screen and (max-width: ${DEVICE_BREAKPOINT_PX}px) {
    width: 100%;
  }
`;

export const LineStyle = styled.div`
  width: 100%;
`;
export const Heading = styled.div`
  padding: 10px;
  color: white;
  height: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background: ${props => {
    const convertedName = props.name.split(' ')[0];

    return lineColours[convertedName.toLowerCase()];
  }};

  @media only screen and (max-width: 768px) {
    span {
      font-size: 4vw;
    }
  }
`;

export const Title = styled.div`
  font-weight: 600;
  margin-left: 15px;
  font-size: 18px;
  display: inline-block;

  @media only screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;

export const Details = styled.div`
  background: #fefefe;
  padding: 15px 10px;
`;
