import { compose } from 'recompose';
import SurveyResults from './SurveyResults';
import { surveyResultsConnector as withSurveyResultsConnector } from '../../store/connectors/surveyResultsConnector';

export default compose(withSurveyResultsConnector)(SurveyResults);
