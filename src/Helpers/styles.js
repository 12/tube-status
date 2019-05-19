import styled, { createGlobalStyle } from 'styled-components';

const PAGE_COLOUR = '#273c75';
const WHITE = '#fefefe';
const DEVICE_BREAKPOINT_PX = 768;
const LINE_COLOURS = {
  bakerloo: '#996633',
  central: '#CC3333',
  circle: '#FFCC00',
  district: '#006633',
  hammersmith: '#CC9999',
  jubilee: '#868F98',
  metropolitan: '#660066',
  northern: '#000000',
  piccadilly: '#000099',
  victoria: '#0099CC',
  waterloo: '#66CCCC',
  dlr: '#009999',
  london: '#FF6600',
  emirates: '#E21836',
  tram: '#66CC00',
  tfl: '#0007ab'
};

const lineBackgroundColour = ({ name }) => {
  const convertedName = name.split(' ')[0];

  return LINE_COLOURS[convertedName.toLowerCase()] || WHITE;
};

export const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');

  body {
    background: ${PAGE_COLOUR};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: none;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
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
  color: ${WHITE};
  height: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background: ${props => lineBackgroundColour(props)};

  @media only screen and (max-width: ${DEVICE_BREAKPOINT_PX}px) {
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

  @media only screen and (max-width: ${DEVICE_BREAKPOINT_PX}px) {
    font-size: 4vw;
  }
`;

export const Details = styled.div`
  background: ${WHITE};
  padding: 15px 10px;
`;

export const RoundelStyled = styled.svg`
  circle {
    fill: none;
    stroke: ${WHITE};
    stroke-width: 70;
  }

  path {
    fill: none;
    stroke: ${WHITE};
    stroke-width: 77;
  }
`;
