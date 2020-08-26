import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SurveyStasticsWrapper = styled(Wrapper)`
  padding: ${theme.space.fourX};
  align-items: center;

  @media ${theme.mediaSize.smallMax} {
    flex-direction: column;
  }
`;

const SurveyName = styled.div`
  flex: 1;
  font-size: ${theme.fontSizes.itemHeading};
  color: ${theme.colors.peach};

  @media ${theme.mediaSize.smallMax} {
    margin-bottom: ${theme.space.threeX};
  }
`;

const StatisticsData = styled(Wrapper)`
  flex: 0.5;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 1px;
  background: ${theme.colors.shadow};
`;

const ViewDetails = styled.div`
  padding: ${theme.space.threeX}
  text-align: center;

  :hover{
    background-color: ${theme.colors.peach};
    color: ${theme.colors.defaultBackgound};
    cursor: pointer;
  }
`;

const StatisticsDataText = styled.div`
  font-size: ${theme.fontSizes.default};
`;

class SurveyStastics extends Component {
  navigateToDetails = surveyDetailsLink => {
    this.props.gotoDetails(surveyDetailsLink);
  };

  render() {
    const {
      surveyName,
      participationCount,
      submittedResponseCount,
      surveyDetailsLink
    } = this.props;
    return (
      <Fragment>
        <SurveyStasticsWrapper>
          <SurveyName>{surveyName}</SurveyName>
          <StatisticsData>
            <StatisticsDataText>NO OF PARTICIPANTS: {participationCount}</StatisticsDataText>
            <StatisticsDataText>NO OF RESPONSES: {submittedResponseCount}</StatisticsDataText>
          </StatisticsData>
        </SurveyStasticsWrapper>
        <Divider />
        <ViewDetails onClick={() => this.navigateToDetails(surveyDetailsLink)}>
          View details
        </ViewDetails>
      </Fragment>
    );
  }
}

SurveyStastics.propTypes = {
  surveyName: PropTypes.string,
  participationCount: PropTypes.number,
  submittedResponseCount: PropTypes.number,
  surveyDetailsLink: PropTypes.string,
  gotoDetails: PropTypes.func
};

export default SurveyStastics;
