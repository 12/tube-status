import styled from '@emotion/styled';
import { css } from '@emotion/core';

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

export const globalStyles = css`
  body {
    background: ${PAGE_COLOUR};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;

    @media only screen and (max-width: ${DEVICE_BREAKPOINT_PX}px) {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;

type HeadingProps = {
  name: string
}

function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj
}

const lineBackgroundColour = ({ name }: HeadingProps) => {
  const convertedName = name.split(' ')[0].toLowerCase();

  return hasKey(LINE_COLOURS, convertedName) ? LINE_COLOURS[convertedName] : WHITE;
};

export const WrapperStyled = styled.div` 
  margin: 0 auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media only screen and (max-width: ${DEVICE_BREAKPOINT_PX}px) {
    width: 100%;
  }
`;

export const LineStyled = styled.div`
  width: 100%;
`;

export const HeadingStyled = styled.div`
  padding: 10px;
  color: ${WHITE};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1rem;
  background: ${(props: HeadingProps) => lineBackgroundColour(props)};

  @media only screen and (max-width: ${DEVICE_BREAKPOINT_PX}px) {
    font-size: 0.875rem;
  }
`;

export const LineNameStyled = styled.div`
  font-weight: 600;
  display: inline-block;
`;

export const TitleStyled = styled.span`
  margin-left: 50px;
`;

export const DetailsStyled = styled.div`
  background: ${WHITE};
  padding: 15px 10px;
`;

export const GithubLinkStyled = styled.a`
  color: ${WHITE};
  padding: 10px 0;
  display: inline-block;
  width: 100%;
  text-align: center;
`;
