import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 400px;
  align-items: center;
  justify-content: center;
`;

const NotFound = () => (
  <Container>
    <h1>404 page not found</h1>
  </Container>
);
export default NotFound;
