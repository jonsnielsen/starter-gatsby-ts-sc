import React from 'react';
import styled from 'styled-components';
import SEO from '../components/meta/Seo';
import useThemeUpdater, {
  IUpdatedTheme,
} from '../config/theme/update-theme/useThemeUpdater';

const IndexPage = () => {
  const newTheme: IUpdatedTheme = {
    colors: { background: { 500: '#abba' }, on: { background: '#fff' } },
  };
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
