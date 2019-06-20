import { Link, graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/meta/Seo"
import Img from "gatsby-image"
import styled from "styled-components"

interface IPageProps {
  data: {
    file: {
      childImageSharp: {
        fluid: any
      }
    }
  }
}

const IndexPage = ({ data }: IPageProps) => {
  const jonathanImage = data.file.childImageSharp.fluid
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Gatsby Starter with TypeScript and Styled Components</h1>
      <section>
        <h2>You can do great stuff with this combo!</h2>
        <p>There is also set up a theme with colors, spacing, sizes etc</p>
        <p>Modify the defaults to your liking!</p>
      </section>
      <section>
        <h2>Project backers</h2>
        <ul>
          <li>
            <BackerCard
              fluidImage={jonathanImage}
              name="Jonathan Sparvath"
              profession="Programmer"
              email="smth@smth.com"
            ></BackerCard>
          </li>
        </ul>
      </section>
      <Link to="/about/">Go to about</Link>
    </Layout>
  )
}

interface IBackerCardProps {
  fluidImage: any
  name: string
  profession: string
  email: string
}
const BackerCard = ({
  fluidImage,
  name,
  profession,
  email,
}: IBackerCardProps) => {
  return (
    <Card>
      <PersonImg fluid={fluidImage}></PersonImg>
      <div>
        <h2>{name}</h2>
        <p>{profession}</p>
        <p>{email}</p>
      </div>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[6]};
  background-color: ${({ theme }) => theme.colors.surface[500]};
`
const PersonImg = styled(Img)`
  width: 100%;
  max-width: 200px;
  margin-right: ${({ theme }) => theme.spacing[6]};
`

export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "me-face.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
