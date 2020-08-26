import React, { Component, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import theme from './web/constants/theme';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './index';
import routes from './web/routes';
import Header from './web/components/Header';
import { ErrorBoundary } from './web/components/ErrorBoundary/ErrorBoundary';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.colors.defaultBackgound};
    font-family: ${theme.fonts.default};
  }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <ErrorBoundary>
          <Header />
          <ConnectedRouter history={history}>
            <Switch>
              {routes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
            </Switch>
          </ConnectedRouter>
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default App;
