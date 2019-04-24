import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Roundel from '../Roundel';
import lineColours from '../../Helpers/lineColours';

const LineStyle = styled.div`
  width: 100%;
`;
const Heading = styled.div`
  padding: 10px;
  color: white;
  height: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background: ${props => {
    const convertedName = props.name.split(' ')[0];

    return lineColours[convertedName.toLowerCase()];
  }};

  @media only screen and (max-width: 768px) {
    span {
      font-size: 4vw;
    }
  }
`;

const Title = styled.div`
  font-weight: 600;
  margin-left: 15px;
  font-size: 18px;
  display: inline-block;

  @media only screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;

const Details = styled.div`
  background: #fefefe;
  padding: 15px 10px;
`;

const article = status => {
  switch (status) {
    default:
      return 'has';
    case 0:
    case 4:
    case 5:
    case 7:
      return 'has a';
    case 1:
    case 3:
    case 11:
    case 16:
      return 'is';
    case 20:
      return '-';
  }
};

const Line = ({
  line: {
    name,
    lineStatuses: [{ statusSeverity, statusSeverityDescription, reason }]
  }
}) => {
  const description = ` ${article(statusSeverity)} ${statusSeverityDescription.toLowerCase()}`;

  return (
    <LineStyle key={name} name={name}>
      <Heading key={name} name={name}>
        <Roundel />
        <span>
          <Title>{name}</Title>
          {description}
        </span>
      </Heading>
      {statusSeverity !== 10 ? <Details>{reason}</Details> : ''}
    </LineStyle>
  );
};

Line.propTypes = {
  line: PropTypes.shape().isRequired
};

export default Line;
