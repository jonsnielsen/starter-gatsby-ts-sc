import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/meta/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/about/">Go to about</Link>
  </Layout>
)

export default IndexPage
