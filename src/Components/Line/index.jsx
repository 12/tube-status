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

    @media only screen and (max-width: 768px) {
        span {
            font-size: 4vw;
        }
    }
`

const Title = styled.div`
    font-weight: 600;
    margin-left: 15px;
    font-size: 18px;
    display:inline-block;

    @media only screen and (max-width: 768px) {
        font-size: 4vw
    }
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
