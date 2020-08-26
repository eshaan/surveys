import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigate as navigateAction } from '../actions/routerActions';

const mapStateToProps = state => {
  return {
    location: state.router.location
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      navigate: navigateAction
    },
    dispatch
  );
};

export const routerConnector = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);
