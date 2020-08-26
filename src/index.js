import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import surveysReducer from './web/store/reducers/surveysReducer';
import surveyDetailsReducer from './web/store/reducers/surveyDetailsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  surveysData: surveysReducer,
  surveyResultDetailsData: surveyDetailsReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

render(app, document.getElementById('root'));
