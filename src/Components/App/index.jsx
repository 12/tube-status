import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Container from '../Container';
import Line from '../Line';
import dataBroker from '../../Helpers/dataBroker';

const endpoint = 'https://api.tfl.gov.uk/line/mode/tube%2Cdlr%2Coverground%2Ctflrail%2Ctram%2Ccable-car/status';
 
const Global = createGlobalStyle`
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
    flex-wrap: wrap;
    justify-content: center;
`

const App = () => {
    const [lines, setLines] = useState([]);
    const [statuses, setStatuses] = useState([]);

    const updateData = () => {
        dataBroker(endpoint)
            .then(setLines)
    };

    useEffect(() => {
        let newArr = [];

        lines.map(({ lineStatuses: [{ statusSeverity }] }) => {
            if (newArr.indexOf(statusSeverity) < 0) {
                statusSeverity === 10 ? newArr.push(statusSeverity) : newArr.unshift(statusSeverity);
            }
        })

        setStatuses(newArr);
    }, [lines])

    useEffect(() => {
        if (!lines.length) {
            return updateData();
        } else {
            var dataBroker = setInterval(() => updateData(), 30000);

            const cleanup = () => {
                clearInterval(dataBroker);
            };

            return cleanup;
        }
    }, [lines]);

    return(
        <React.Fragment>
            <Global></Global>
            <Wrapper>
                {
                    statuses.map((status) => {
                        return (
                            <Container key={status} status={status}>
                                {
                                    lines.filter(line => line.lineStatuses[0].statusSeverity === status)
                                        .map(line => {
                                            return <Line key={line.name} line={line} />
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
