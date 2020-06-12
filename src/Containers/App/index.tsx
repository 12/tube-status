import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/core';
import Line, { LineProps } from '../../Components/Line/index';
import dataBroker from '../../Helpers/dataBroker';
import sortData from '../../Helpers/sortData';
import { globalStyles, WrapperStyled, GithubLinkStyled } from '../../Helpers/styles';

const endpoint =
  'https://api.tfl.gov.uk/line/mode/tube%2Cdlr%2Coverground%2Ctflrail%2Ctram%2Ccable-car/status';

const App = () => {
  const [lines, setLines] = useState([]);
  const updateData = () => {
    dataBroker(endpoint).then(sortData).then(setLines);
  };

  useEffect(() => {
    if (!lines.length) {
      updateData();
    }

    setInterval(() => updateData(), 30000);
  }, []);

  return (
    <>
      <Global styles={globalStyles} />
      <WrapperStyled>
        {lines && lines.map((line: LineProps) => <Line key={line.name} {...line} />)}
      </WrapperStyled>
      {!!lines.length && (
        <GithubLinkStyled href="https://github.com/12/tube-status">
          Open source on Github!
        </GithubLinkStyled>
      )}
    </>
  );
};

export default App;
