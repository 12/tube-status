import React from 'react';
import styled from 'styled-components';
import Roundel from '../Roundel';
import lineColours from '../../Helpers/lineColours';

const LineStyle = styled.div`
    width: 100%;
`
const Heading = styled.div`
    padding: 10px;
    color: white;
    height: 35px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    background: ${
        props => {
            const convertedName = props.name.split(" ")[0];

            return lineColours[convertedName.toLowerCase()];
        }
    };
`

const Title = styled.div`
    font-weight: 600;
    font-size: 18px;
    margin-left: 15px;
    display:inline-block;
`

const Details = styled.div`
    background: #fefefe;
    padding: 15px 10px;
`

const Line = ({ 
    line: {
        name,
        modified,
        lineStatuses: [
            {
                statusSeverity,
                statusSeverityDescription,
                reason
            }
        ]
    }
}) => {
    return(
        <LineStyle key={name} name={name}>
            <Heading key={name} name={name}>
                <Roundel />
                <span>
                    <Title>{name}</Title> has {statusSeverityDescription}
                </span>
            </Heading>
            {
                statusSeverity !== 10 ? 
                    <Details>
                        {reason}
                    </Details>
                : ''
            }
        </LineStyle>
    );
}

export default Line;
