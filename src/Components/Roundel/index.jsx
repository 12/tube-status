import React from 'react';
import { RoundelStyled } from '../../Helpers/styles';

const Roundel = () => {
  return (
    <RoundelStyled width="40" viewBox="0 0 500 410" preserveAspectRatio="xMinYMin meet">
      <circle cx="250" cy="202" r="167" />
      <path d="m 0,202 h 500" />
    </RoundelStyled>
  );
};

export default Roundel;
