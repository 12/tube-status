import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Container from '../Container';
import Line from '../Line';
import dataBroker from '../../Helpers/dataBroker';

const endpoint = 'https://api.tfl.gov.uk/line/mode/tube%2Cdlr%2Coverground%2Ctflrail%2Ctram%2Ccable-car/status';
 
const PageStyle = createGlobalStyle`
    @font-face {
        font-family: tfl;
        font-display: auto;
        src: url('/Johnston100-Regular.woff2');
    }

    body {
        background: #273c75;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: none;
        font-family:'tfl', PT-Sans, sans-serif;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    width: 100%;
`

const App = () => {
    const [lines, setLines] = useState({});
    const [statuses, setStatuses] = useState([]);

    const updateData = () => {
        dataBroker(endpoint)
            .then(setLines)
            .catch(console.log);
    };

    const buildModes = () => {
        if (!lines.length) {
            return;
        }

        lines.map(({ lineStatuses: [{ statusSeverity }] }) => {
            if (statuses.indexOf(statusSeverity) < 0) {
                if (statusSeverity === 10) {
                    setStatuses([...statuses, statusSeverity]);
                } else {
                    setStatuses([statusSeverity, ...statuses]);
                }
            }
        })
    }

    useEffect(() => {
        var dataBroker = setInterval(() => updateData(), 5000);

        const cleanup = () => {
            buildModes();
            clearInterval(dataBroker);
        };

        return cleanup;
    });

    return(
        <React.Fragment>
            <PageStyle></PageStyle>
            <Wrapper>
                {
                    statuses.map((status) => {
                        return (
                            <Container key={status} status={status}>
                                {
                                    lines.filter(line => line.lineStatuses[0].statusSeverity === status)
                                        .map(line => {
                                            return <Line line={line} />
                                        })
                                }
                            </Container>
                        )
                    })
                }
            </Wrapper>
        </React.Fragment>
    );
}

export default App;
