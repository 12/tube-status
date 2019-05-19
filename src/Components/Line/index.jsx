import React from 'react';
import PropTypes from 'prop-types';
import Roundel from '../Roundel';
import { LineStyle, Heading, Title, Details } from '../../Helpers/styles';

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
