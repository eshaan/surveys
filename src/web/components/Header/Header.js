import React, { Fragment } from 'react';
import Logo from '../Logo';
import styled from 'styled-components';
import theme from '../../constants/theme';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;

  height: ${theme.space.header}
  background: #fff;
  box-shadow: 1px 1px ${theme.space.oneX} 1px ${theme.colors.shadow};
`;

const HeaderText = styled.div`
  color: ${theme.colors.peach};
`;

const SpacerPanel = styled.div`
  width: 100%;
  height: ${theme.space.large};
  @media ${theme.mediaSize.mediumMax} {
    height: 70px;
  }
  @media ${theme.mediaSize.smallMax} {
    height: ${theme.space.header};
  }
`;

const Header = () => {
  return (
    <Fragment>
      <Link to={'/'}>
        <StyledHeader>
          <HeaderText>Surveys</HeaderText>
        </StyledHeader>
      </Link>
      <SpacerPanel />
    </Fragment>
  );
};

export default Header;
