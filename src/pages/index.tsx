import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/meta/Seo"

const IndexPage = () => (
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
          <p>pal</p>
        </li>
      </ul>
    </section>
    <Link to="/about/">Go to about</Link>
  </Layout>
)

export default IndexPage
