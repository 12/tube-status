import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/core';
import useFetch from '../../Helpers/useFetch';
import Line, { LineProps } from '../../Components/Line/index';
import sortData from '../../Helpers/sortData'; // @TODO: Re-enable sorting of lines by status
import { globalStyles, WrapperStyled, GithubLinkStyled } from '../../Helpers/styles';

const endpoint =
  'https://api.tfl.gov.uk/line/mode/tube%2Cdlr%2Coverground%2Ctflrail%2Ctram%2Ccable-car/status';

interface ResponseType {
  response: Array<LineProps> | null;
  error: object | null;
}

const App = () => {
  const [data, setData] = useState<LineProps[] | null>(null);
  const res: ResponseType = useFetch(endpoint);

  useEffect(() => {
    if (!res.response) return;

    // Filter what's needed. Should be easier to compare against and prevent re-renders.
    const filteredResponse: LineProps[] = res.response.map(({ name, lineStatuses }) => ({
      name,
      key: name,
      lineStatuses,
    }));

    setData(filteredResponse);
  }, [res.response]);

  if (!res.response) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Global styles={globalStyles} />
      <WrapperStyled>
        {data &&
          data.map(({ name, lineStatuses }: LineProps) => (
            <Line key={name} name={name} lineStatuses={lineStatuses} />
          ))}
      </WrapperStyled>
      {!!data && (
        <GithubLinkStyled href="https://github.com/12/tube-status">
          Open source on Github!
        </GithubLinkStyled>
      )}
    </>
  );
};

export default App;
