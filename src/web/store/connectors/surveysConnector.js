import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';
import { getSurveys } from '../actions/surveysActions';

const mapStateToProps = state => {
  const surveys = get(state, 'surveysData.surveys', []);
  const isLoading = get(state, 'surveysData.isLoading', false);

  return {
    surveys,
    isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSurveys
    },
    dispatch
  );
};

export const surveysConnector = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);
