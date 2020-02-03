import React from 'react';
import PropTypes from 'prop-types';
import Roundel from '../Roundel';
import {
  LineStyled,
  HeadingStyled,
  TitleStyled,
  DetailsStyled,
  LineNameStyled
} from '../../Helpers/styles';
import {
  SPECIAL_SERVICE,
  CLOSED,
  PART_SUSPENDED,
  PLANNED_CLOSURE,
  PART_CLOSURE,
  REDUCED_SERVICE,
  PART_CLOSED,
  SERVICE_CLOSED
} from '../../Helpers/modes';

const article = status => {
  switch (status) {
    default:
      return 'has';
    case SPECIAL_SERVICE:
    case PLANNED_CLOSURE:
    case PART_CLOSURE:
    case REDUCED_SERVICE:
      return 'has a';
    case CLOSED:
    case PART_SUSPENDED:
    case PART_CLOSED:
    case 16:
      return 'is';
    case SERVICE_CLOSED:
      return '-';
  }
};

const Line = ({ line }) => {
  const { name, lineStatuses } = line;
  const [{ statusSeverity, statusSeverityDescription, reason }] = lineStatuses;
  const description = ` ${article(statusSeverity)} ${statusSeverityDescription.toLowerCase()}`;

  return (
    <LineStyled key={name} name={name}>
      <HeadingStyled key={name} name={name}>
        <Roundel />
        <TitleStyled>
          <LineNameStyled>{name}</LineNameStyled>
          {description}
        </TitleStyled>
      </HeadingStyled>
      {statusSeverity !== 10 ? <DetailsStyled>{reason}</DetailsStyled> : ''}
    </LineStyled>
  );
};

Line.propTypes = {
  line: PropTypes.shape().isRequired
};

export default Line;
