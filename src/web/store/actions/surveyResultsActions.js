import axios from 'axios';
import config from '../../../config/global.config';
import surveyOneData from '../../../data/survey-1-details.json';
import surveyTwoData from '../../../data/survey-2-details.json';
import {
  GET_SURVEY_DETAILS_IN_PROGRESS,
  GET_SURVEY_DETAILS_SUCCESS,
  SET_SURVEY_DETAILS,
  SET_SURVEY_DETAILS_FAILED
} from '../actionTypes';
import { computeParticipationRateForSurveys } from '../transforms/surveysTransform';
import { computeAverageRatingForQuestions } from '../helper/surveyResponsesHelper';
import get from 'lodash.get';

const fetchSurveyDetails = surveyLink => {
  return axios
    .get(`${config.ROOT_URL}/${surveyLink}`)
    .then(response => {
      // return response.data;
      if (surveyLink.includes('1')){
        return surveyOneData;
      } else if (surveyLink.includes('2')){
        return surveyTwoData;
      }
    })
    .catch(err => {
      // TODO: log error
      return Promise.reject(err);
    });
};

const setSurveyDetails = surveyDetails => {
  return {
    type: SET_SURVEY_DETAILS,
    surveyDetails
  };
};

const setSurveyDetailsFailed = surveys => {
  return {
    type: SET_SURVEY_DETAILS_FAILED
  };
};

const getSurveyDetailsInProgress = surveys => {
  return {
    type: GET_SURVEY_DETAILS_IN_PROGRESS
  };
};

const getSurveyDetailsSuccess = surveys => {
  return {
    type: GET_SURVEY_DETAILS_SUCCESS
  };
};

export const getSurveyResultDetails = surveyLink => {
  return dispatch => {
    dispatch(getSurveyDetailsInProgress());
    return fetchSurveyDetails(surveyLink)
      .then(data => {
        dispatch(getSurveyDetailsSuccess());
        const surveyResultDetails = get(data, 'survey_result_detail', {});
        const surveyResultsWithParticipationRate = computeParticipationRateForSurveys({
          surveyResultDetails
        });
        const surveyResultsWithAvgRating = computeAverageRatingForQuestions({
          surveyResults: surveyResultsWithParticipationRate
        });
        return dispatch(setSurveyDetails(surveyResultsWithAvgRating));
      })
      .catch(error => {
        return dispatch(setSurveyDetailsFailed());
      });
  };
};
