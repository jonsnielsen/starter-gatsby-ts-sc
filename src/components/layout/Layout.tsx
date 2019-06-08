/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <FlexWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
            <Main>{children}</Main>
          <Footer />
        </FlexWrapper>
      </>
    )}
  />
);

interface Props {
  children: React.ReactNode;
}

// Styles
const FlexWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

export default Layout;
