import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Logo from '../../assets/images/logo.svg';

import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLink to='/'>
        <Logo />
      </StyledLink>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary[500]};
  display: flex;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  max-width: ${({ theme }) => theme.extra.contentMaxWidth};
  margin: 0 auto;
`;

const LogoImg = styled.img`
  width: 50px;
  margin: ${({ theme }) => theme.extra.contentPadding};
`;

export default Header;
