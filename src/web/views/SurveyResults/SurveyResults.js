import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';
import Question from '../../components/Question';
import RatingBar from '../../components/RatingBar';
import SurveyTitle from '../../components/SurveyTitle';

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(ColumnWrapper)`
  min-height: 400px;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 150px;
  width: 90%;
  box-shadow: 0px 0px 3px 2px ${theme.colors.shadow};
  background: ${theme.colors.panel};

  flex-direction: column;
  justify-content: space-between;
  border-top: 3px solid ${theme.colors.peach};

  @media ${theme.mediaSize.smallMax} {
    width: 100%;
  }
`;

const ThemeName = styled.div`
  padding: ${theme.space.oneX};
  color: ${theme.colors.peach};
  font-weight: bold;
`;

const Divider = styled.div`
  height: 1px;
  background: ${theme.colors.shadow};
`;

const QuestionsWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: ${theme.space.oneX};
`;

const RatingsWrapper = styled.div`
  display: flex;
  flex: 0.5;
  padding: ${theme.space.oneX};
`;

const ThemeWrapper = styled.div`
  background: ${theme.colors.titleBackground};
  padding: ${theme.space.fourX};
  margin: ${theme.space.twoX};
`;

const QuestionsAndResultsWrapper = styled.div`
  display: flex;
  padding: ${theme.space.twoX} 0px;
  @media ${theme.mediaSize.mediumMax} {
    flex-direction: column;
  }
`;

const SurveyDetailsContainer = styled.div`
  margin: ${theme.space.twoX} 0px;
`;

class SurveyResults extends Component {
  componentDidMount() {
    const { getSurveyResultDetails } = this.props;
    getSurveyResultDetails(location.pathname);
  }

  render() {
    const { surveyName, themes, responseRate, isSurveyDataLoaded } = this.props;
    return (
      (isSurveyDataLoaded && (
        <Container>
          <Wrapper>
            {<SurveyTitle title={surveyName} responseRate={responseRate} />}
            {themes.map((theme, index) => {
              return (
                <ThemeWrapper key={index}>
                  <ThemeName>{`${theme.name}`}</ThemeName>
                  <Divider />
                  <SurveyDetailsContainer>
                    {theme.questions &&
                      theme.questions.map((question, index) => {
                        return (
                          <QuestionsAndResultsWrapper key={index}>
                            <QuestionsWrapper>
                              <Question
                                questionDesc={question.description}
                                questionType={question.question_type}
                              />
                            </QuestionsWrapper>
                            <RatingsWrapper>
                              <RatingBar avgRating={question.avgRating} />
                            </RatingsWrapper>
                          </QuestionsAndResultsWrapper>
                        );
                      })}
                  </SurveyDetailsContainer>
                </ThemeWrapper>
              );
            })}
          </Wrapper>
        </Container>
      )) ||
      null
    );
  }
}

SurveyResults.propTypes = {
  surveyName: PropTypes.string,
  isSurveyDataLoaded: PropTypes.bool,
  responseRate: PropTypes.string,
  themes: PropTypes.array.isRequired
};

SurveyResults.defaultProps = {
  themes: [],
  isSurveyDataLoaded: false
};

export default SurveyResults;
