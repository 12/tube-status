import React from 'react';
import styled from '@emotion/styled';

const RoundelStyled = styled.svg`
  position: absolute;

  circle {
    fill: none;
    stroke: #fefefe;
    stroke-width: 70;
  }

  path {
    fill: none;
    stroke: #fefefe;
    stroke-width: 77;
  }
`;

const Roundel = () => {
  return (
    <RoundelStyled width="40" viewBox="0 0 500 410" preserveAspectRatio="xMinYMin meet">
      <circle cx="250" cy="202" r="167" />
      <path d="m 0,202 h 500" />
    </RoundelStyled>
  );
};

export default Roundel;
