import get from 'lodash.get';
import {
  GET_SURVEY_DETAILS_SUCCESS,
  GET_SURVEY_DETAILS_IN_PROGRESS,
  SET_SURVEY_DETAILS
} from '../actionTypes';

const INITIAL_STATE = {
  surveyDetails: [],
  isLoading: false,
  isLoaded: false
};

const surveyDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SURVEY_DETAILS:
      return {
        ...state,
        surveyDetails: get(action, 'surveyDetails', [])
      };
    case GET_SURVEY_DETAILS_IN_PROGRESS:
      return {
        ...state,
        surveyDetails: [],
        isLoading: true
      };
    case GET_SURVEY_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true
      };
    default:
      return state;
  }
};

export default surveyDetailsReducer;
