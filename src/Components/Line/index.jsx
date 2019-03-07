import React from 'react';
import styled from 'styled-components';

const lineColours = {
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
}

const LineStyle = styled.div`
    padding: 10px;
    color: white;
    width: 100%;
    height: 35px;
    background: ${
        props => {
            const convertedName = props.name.split(" ")[0];
            
            return lineColours[convertedName.toLowerCase()];
        }
    };
`

const Line = ({ line }) => {
    return(
        <LineStyle key={line.name} name={line.name}>
            {line.name} line
        </LineStyle>
    );
}

export default Line;
