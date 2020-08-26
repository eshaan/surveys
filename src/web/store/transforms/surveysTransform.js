import get from 'lodash.get';
import { convertToPercentageString } from '../../utils/surveyUtils';

export const computeParticipationRateForSurveys = ({ surveyResultDetails }) => {
  return {
    ...surveyResultDetails,
    response_rate: convertToPercentageString(get(surveyResultDetails, 'response_rate', 0))
  };
};
