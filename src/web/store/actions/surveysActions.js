import axios from 'axios';
import config from '../../../config/global.config';
import data from '../../../data/surveys.json';
import {
  SET_SURVEYS,
  SET_SURVEYS_FAILED,
  GET_SURVEYS_IN_PROGRESS,
  GET_SURVEYS_SUCCESS
} from '../actionTypes';
import get from 'lodash.get';

const fetchSurveys = () => {
  return axios
    .get(`${config.ROOT_URL}/surveys`)
    .then(response => {
      return data;
      // returning a static response, but if it would have been an actual API, we would use the following
      // return response.data;
    })
    .catch(err => {
      // TODO: log error
      console.log({ message: err.message });
      return Promise.reject(err);
    });
};

const setSurveys = surveys => {
  return {
    type: SET_SURVEYS,
    surveys
  };
};

const getSurveysInProgress = () => {
  return {
    type: GET_SURVEYS_IN_PROGRESS
  };
};

const getSurveysSuccess = () => {
  return {
    type: GET_SURVEYS_SUCCESS
  };
};

const setSurveysFailed = () => {
  return {
    type: SET_SURVEYS_FAILED
  };
};

export const getSurveys = () => {
  return dispatch => {
    dispatch(getSurveysInProgress());
    return fetchSurveys()
      .then(data => {
        dispatch(getSurveysSuccess());
        const surveyResults = get(data, 'survey_results', []);
        return dispatch(setSurveys(surveyResults));
      })
      .catch(error => {
        return dispatch(setSurveysFailed());
      });
  };
};
