import config from '../config/global.config';
import Surveys from './views/Surveys';
import SurveyResults from './views/SurveyResults';
import NotFound from './views/NotFound';

export default [
  {
    path: config.SURVEY_RESULTS,
    component: SurveyResults
  },
  {
    path: config.APP_PATH,
    exact: true,
    component: Surveys
  },
  {
    path: '*',
    exact: true,
    component: NotFound
  }
];
