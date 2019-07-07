import React, { useReducer } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// https://github.com/kyleamathews/typefaces
import themeObject from '../../config/theme/theme';
import UpdateThemeContext from '../../config/theme/update-theme/UpdateThemeContext';
import updateThemeReducer from '../../config/theme/update-theme/updateThemeReducer';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [theme, updateTheme] = useReducer(updateThemeReducer, themeObject);
  return (
    <>
      <ThemeProvider theme={theme}>
        <FlexWrapper>
          <GlobalStyles />
          <Header />
          <Main>
            <UpdateThemeContext.Provider value={updateTheme}>
              {children}
            </UpdateThemeContext.Provider>
          </Main>
          <Footer />
        </FlexWrapper>
      </ThemeProvider>
    </>
  );
};

// Styles
const FlexWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  max-width: ${({ theme }) => theme.extra.contentMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.extra.contentPadding};
  width: 100%;
`;

export default Layout;
