import { graphql, StaticQuery } from "gatsby"
import React from "react"

import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import theme from "../../config/theme"
// https://github.com/kyleamathews/typefaces
require("typeface-anton")

const GlobalStyle = createGlobalStyle`
  // @import url("https://fonts.googleapis.com/css?family=Anton&display=swap");

  @font-face {
    font-family: "airbus";
    src: url("/airbus.woff2"),
         url("/airbus.woff");
  }
  

  h1, h2, h3, body, div, p, li, button, a {
    color: ${theme.colors.on.background}
  }
  h1,h2,h3 {
    
    font-family: 'Anton', sans-serif;
    font-weight: 900;
  }
  h1 {
    font-size: ${theme.fontSize.h1};
  }
  h2 {
    font-size: ${theme.fontSize.h2};
  }
  h3 {
    font-size: ${theme.fontSize.h3};
  }
  body, div, p, li, button, a {
    font-size: ${theme.fontSize.body1};
    font-family: "airbus";

  }
`
interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <GlobalStyle></GlobalStyle>
    <ThemeProvider theme={theme}>
      <FlexWrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </FlexWrapper>
    </ThemeProvider>
  </>
)

// Styles
const FlexWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  max-width: ${({ theme }) => theme.extra.contentMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.extra.contentPadding};
  width: 100%;
`

export default Layout
