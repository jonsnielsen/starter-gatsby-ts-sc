import { graphql, StaticQuery } from "gatsby"
import React from "react"

import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import theme from "../../config/theme"

console.log(theme)
const GlobalStyle = createGlobalStyle`
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
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

export default Layout
