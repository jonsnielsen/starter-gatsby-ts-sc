import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <StyledHeader>
    <HeaderContent style={{}}>
      <Link to="/">
        <HeaderTitle>{siteTitle}</HeaderTitle>
      </Link>
    </HeaderContent>
  </StyledHeader>
)

const StyledHeader = styled.header`
  background: rebeccapurple;
`
const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
const HeaderTitle = styled.h1`
  color: white;
  text-decoration: none;
`

export default Header
