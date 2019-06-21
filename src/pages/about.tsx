import React from 'react';

import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import SEO from '../components/meta/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>About</h1>
    <Card />
  </Layout>
);

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface[500]};
`;

export default IndexPage;
