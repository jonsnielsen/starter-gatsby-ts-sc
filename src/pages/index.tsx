import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout/Layout';
import SEO from '../components/meta/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Bokamoso frontpage</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorem,
      deserunt ipsam quis mollitia facere maiores,
      voluptatibus delectus corporis laborum earum eligendi distinctio expedita eaque ut labore! Quis, eum. Autem?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorem,
      deserunt ipsam quis mollitia facere maiores,
      voluptatibus delectus corporis laborum earum eligendi distinctio expedita eaque ut labore! Quis, eum. Autem?</p>
    <Link to='/about/'>Go to about</Link>
  </Layout>
);

export default IndexPage;
