import { compose } from 'recompose';
import ErrorBoundary from './ErrorBoundary';
import { routerConnector as withRouter } from '../../store/connectors/routerConnector';

export default compose(withRouter)(ErrorBoundary);
