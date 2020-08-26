import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.space.twoX} ${theme.space.threeX};
  background: ${theme.colors.titleBackground};
  box-shadow: ${theme.colors.shadow} 0px 1px;
`;

const TitleSpan = styled.span`
  font-weight: bold;
`;

const Title = styled(TitleSpan)`
  font-size: ${theme.fontSizes.itemHeading};
  font-weight: bold;
  padding: 0px ${theme.space.threeX} 0px 0px;
`;

const ResponseRateText = styled.span`
  color: ${theme.colors.peach};
`;

const ResponseRateValue = styled.div`
  display: flex;
  padding: ${theme.space.twoX};
  width: ${theme.space.sixX};
  height: ${theme.space.sixX};
  background: ${theme.colors.peach};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

const ResponseRateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SurveyTitle = ({ title, responseRate }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {responseRate && (
        <ResponseRateWrapper>
          <ResponseRateValue>{responseRate}</ResponseRateValue>
          <ResponseRateText>{'Participation'}</ResponseRateText>
        </ResponseRateWrapper>
      )}
    </Wrapper>
  );
};
// Could use a render prop here for different type of Titles
SurveyTitle.propTypes = {
  title: PropTypes.string,
  responseRate: PropTypes.string
};

export default SurveyTitle;
