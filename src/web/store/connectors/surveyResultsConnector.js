import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';
import { getSurveyResultDetails } from '../actions/surveyResultsActions';

const mapStateToProps = state => {
  const surveyResultDetails = get(state, 'surveyResultDetailsData.surveyDetails', []);

  const themes = get(surveyResultDetails, 'themes', []);
  const surveyName = get(surveyResultDetails, 'name', '');
  const responseRate = get(surveyResultDetails, 'response_rate', '');

  return {
    surveyName,
    responseRate,
    themes,
    isSurveyDataLoaded: themes.length > 0
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSurveyResultDetails
    },
    dispatch
  );
};

export const surveyResultsConnector = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);
