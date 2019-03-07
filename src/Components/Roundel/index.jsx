import React from 'react'
import styled from 'styled-components';

const RoundelStyle = styled.svg`
    circle {
        fill: none;
        stroke: #ffffff;
        stroke-width:70;
    }

    path {
        fill: none;
        stroke: #ffffff;
        stroke-width: 77;
    }
`

const Roundel = () => {
    return (
        <RoundelStyle width="40" viewBox="0 0 500 410" preserveAspectRatio="xMinYMin meet">
            <circle cx="250" cy="202" r="167" />
            <path d="m 0,202 h 500" />
        </RoundelStyle>

    );
}

export default Roundel;
