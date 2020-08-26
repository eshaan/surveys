import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';
import { mapToColor } from '../../utils/style-utils';

const computeFillColour = (value, maxRating) => mapToColor({ value, maxRating });
const computeFillWidth = (value, maxRating) => {
  if (maxRating <= 0 || Number(value) <= 0) return 0;
  return Math.floor((Number(value) / maxRating) * 100);
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RatingBarWrapper = styled.div`
  width: 100%;
  padding: 1px;
  border: 1px solid #eee;
  border-radius: ${theme.radii.standard};
  text-align: center;
`;

const RatingBarLabelsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fontSizes.small};
`;

const RatingBarFill = styled.div`
  width: ${props => computeFillWidth(props.avgRating, props.maxRating)}%;
  height: ${theme.space.fiveX};
  background: ${props => {
    return `linear-gradient(90deg, ${computeFillColour(props.avgRating, props.maxRating)})`;
  }};
`;

const AverageRating = styled.span`
  position: absolute;
  margin: ${theme.space.oneX};
  font-size: ${theme.fontSizes.default};
`;

const RatingBar = ({ avgRating, maxRating }) => {
  return (
    <Wrapper>
      <RatingBarWrapper>
        <RatingBarFill avgRating={avgRating} maxRating={maxRating}>
          <AverageRating>{`Rating: ${avgRating}/ ${maxRating}`}</AverageRating>
        </RatingBarFill>
      </RatingBarWrapper>
      <RatingBarLabelsWrapper>
        <div>Strongly disagree</div>
        <div>Strongly agree</div>
      </RatingBarLabelsWrapper>
    </Wrapper>
  );
};

RatingBar.propTypes = {
  avgRating: PropTypes.string,
  maxRating: PropTypes.number
};

RatingBar.defaultProps = {
  maxRating: 5
};

export default RatingBar;
