import get from 'lodash.get';

export const calculateAvgResponseRating = ({ questionsWithResponses }) => {
  return questionsWithResponses.map(question => {
    const noOfNonSkippedResponses = get(question, 'survey_responses', []).filter(
      response => response.response_content
    );
    const combinedRatingForQuestion = noOfNonSkippedResponses.reduce(
      (curr, acct) => Number(curr) + (Number(acct['response_content']) || 0),
      0
    );
    const avgRating = Number(combinedRatingForQuestion / noOfNonSkippedResponses.length).toFixed(1);
    return {
      ...question,
      avgRating
    };
  });
};

export const computeAverageRatingForQuestions = ({ surveyResults }) => {
  const sureveyResultsWithAvgResponses = get(surveyResults, 'themes', []).map(theme => {
    const questionsWithResponses = get(theme, 'questions', []).filter(
      ques => ques.survey_responses
    );
    return {
      ...theme,
      questions: calculateAvgResponseRating({ questionsWithResponses })
    };
  });
  return {
    ...surveyResults,
    themes: sureveyResultsWithAvgResponses
  };
};
