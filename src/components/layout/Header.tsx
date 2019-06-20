import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import logo from "../../assets/images/boka-fav.png"

import styled from "styled-components"

const Header = () => {
  const query: IQuery = useStaticQuery(headerQuery)
  const title = query.site.siteMetadata.title
  // const logo: any = query.file.childImageSharp.fluid
  console.log(logo)

  return (
    <StyledHeader>
      <Link to="/">
        <LogoImg src={logo} alt="logo" />
        <HeaderTitle>{title}</HeaderTitle>
      </Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary[500]};
`
const LogoImg = styled.img`
  width: 50px;
`
const HeaderTitle = styled.h1`
  color: white;
  text-decoration: none;
`

interface IQuery {
  file: { childImageSharp: { fluid: any } }
  site: { siteMetadata: { title: string } }
}

const headerQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Header
