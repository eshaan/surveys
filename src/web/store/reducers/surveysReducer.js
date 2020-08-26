import get from 'lodash.get';
import { GET_SURVEYS_IN_PROGRESS, SET_SURVEYS, GET_SURVEYS_SUCCESS } from '../actionTypes';

const INITIAL_STATE = {
  surveys: [],
  isLoading: false
};

const surveysReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SURVEYS:
      return {
        ...state,
        surveys: get(action, 'surveys', [])
      };

    case GET_SURVEYS_IN_PROGRESS:
      return {
        ...state,
        surveys: [],
        isLoading: true
      };

    case GET_SURVEYS_SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};

export default surveysReducer;
