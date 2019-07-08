import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import SEO from '../components/meta/Seo';
import { PartialTheme } from '../config/theme/theme';
import useThemeUpdater from '../config/theme/update-theme/useThemeUpdater';

const IndexPage = () => {
  const newTheme: PartialTheme = {
    colors: { background: { 500: '#abba' }, on: { background: '#fff' } },
  };
  console.log(newTheme);
  useThemeUpdater(newTheme);

  return (
    <>
      <SEO title='Home' />
      <h1>About</h1>
      <Card />
    </>
  );
};

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface[500]};
`;

export default IndexPage;
