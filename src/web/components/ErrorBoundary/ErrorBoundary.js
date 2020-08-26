import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../constants/theme';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 400px;
  padding-top: ${theme.space.fourX};
`;

const StyledLink = styled.a`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;

const INITIAL_STATE = { hasError: false, error: {}, info: {}, errorRoute: null };

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  static getDerivedStateFromProps(props, state) {
    if (state.hasError && props.location && props.location.pathname !== state.errorRoute) {
      return INITIAL_STATE;
    }
    return null;
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error,
      info: info,
      errorRoute: this.props.location && this.props.location.pathname
    });
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      // can log error here
    }
  }

  reloadPage = e => {
    e.preventDefault();
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h1>Something went wrong.</h1>
          <p>
            An unexpected error occurred. Please{' '}
            <StyledLink onClick={this.reloadPage}>reload</StyledLink> to try again.
          </p>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

export default ErrorBoundary;
