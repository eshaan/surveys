import { compose } from 'recompose';
import Surveys from './Surveys';
import { surveysConnector as withSurveysConnector } from '../../store/connectors/surveysConnector';
import { routerConnector as withRouter } from '../../store/connectors/routerConnector';

export default compose(
  withSurveysConnector,
  withRouter
)(Surveys);
