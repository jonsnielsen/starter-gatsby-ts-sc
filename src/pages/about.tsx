import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/meta/Seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About</h1>
    <Card>
       
    </Card>
  </Layout>
)

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface[500]};
`

export default IndexPage
