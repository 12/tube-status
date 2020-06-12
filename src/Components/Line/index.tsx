import React from 'react';
import Roundel from '../Roundel';
import {
  LineStyled,
  HeadingStyled,
  TitleStyled,
  DetailsStyled,
  LineNameStyled
} from '../../Helpers/styles';
import MODES from '../../Helpers/modes';

const article = (status: Number) => {
  switch (status) {
    default:
      return 'has';
    case MODES.SPECIAL_SERVICE:
    case MODES.PLANNED_CLOSURE:
    case MODES.PART_CLOSURE:
    case MODES.REDUCED_SERVICE:
      return 'has a';
    case MODES.CLOSED:
    case MODES.PART_SUSPENDED:
    case MODES.PART_CLOSED:
    case MODES.NOT_RUNNING:
      return 'is';
    case MODES.SERVICE_CLOSED:
      return '-';
  }
};

type Line = {
  name: String,
  lineStatuses: [{
    statusSeverity: Number,
    statusSeverityDescription: String,
    reason: String
  }]
}

const Line: React.FunctionComponent<Line> = (line) => {
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

export default Line;
