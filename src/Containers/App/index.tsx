import React, { useState } from 'react';
import { Global } from '@emotion/core';
import useFetch from '../../Helpers/useFetch';
import Line, { LineProps } from '../../Components/Line/index';
import sortData from '../../Helpers/sortData'; // @TODO: Re-enable sorting of lines by status
import { globalStyles, WrapperStyled, GithubLinkStyled } from '../../Helpers/styles';

const endpoint =
  'https://api.tfl.gov.uk/line/mode/tube%2Cdlr%2Coverground%2Ctflrail%2Ctram%2Ccable-car/status';

type ResponseType = {
  response: Array<object> | null;
  error: object | null;
};

const App = () => {
  const res: ResponseType = useFetch(endpoint);

  if (!res.response) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Global styles={globalStyles} />
      <WrapperStyled>
        {res.response && res.response.map((line: LineProps) => <Line key={line.name} {...line} />)}
      </WrapperStyled>
      {!!res.response && (
        <GithubLinkStyled href="https://github.com/12/tube-status">
          Open source on Github!
        </GithubLinkStyled>
      )}
    </>
  );
};

export default App;
