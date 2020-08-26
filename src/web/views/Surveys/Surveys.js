import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';
import SurveyStastics from '../../components/SurveyStatistics';
import SurveyTitle from '../../components/SurveyTitle';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${theme.space.twoX};

  @media ${theme.mediaSize.smallMax} {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  width: 60%;
  box-shadow: 0px 0px 3px 2px ${theme.colors.shadow};
  background: ${theme.colors.panel};

  justify-content: space-between;
  border-top: 3px solid ${theme.colors.peach};

  @media ${theme.mediaSize.mediumMax} {
    width: 80%;
  }

  @media ${theme.mediaSize.smallMax} {
    width: 100%;
  }
`;

const SurveysTable = styled.div`
  background: ${theme.colors.titleBackground};
  margin: ${theme.space.twoX};
`;

class Surveys extends Component {
  componentDidMount() {
    this.props.getSurveys();
  }

  gotoSurveyDetails = surveyDetailsLink => {
    this.props.history.push(surveyDetailsLink);
  };

  render() {
    const { surveys } = this.props;
    return (
      <FlexWrapper>
        <Wrapper>
          <SurveyTitle title={'SURVEYS'} />
          {surveys.map((survey, index) => {
            return (
              <SurveysTable key={index}>
                <SurveyStastics
                  surveyName={survey.name}
                  participationCount={survey.participant_count}
                  responseRate={survey.response_rate}
                  submittedResponseCount={survey.submitted_response_count}
                  surveyDetailsLink={survey.url}
                  gotoDetails={this.gotoSurveyDetails}
                />
              </SurveysTable>
            );
          })}
        </Wrapper>
      </FlexWrapper>
    );
  }
}

Surveys.propTypes = {
  surveys: PropTypes.array.isRequired
};

Surveys.defaultProps = {
  surveys: []
};

export default Surveys;
