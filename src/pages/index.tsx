import { graphql, Link } from 'gatsby';
import React from 'react';

import { FluidObject } from 'gatsby-image';
import BackerCard from '../components/backer-card/BackerCard';
import SEO from '../components/meta/Seo';
import { useTheme } from '../config/theme/theme';
import useThemeUpdater from '../config/theme/update-theme/useThemeUpdater';

interface IPageProps {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject,
      },
    }
    site: {
      siteMetadata: {
        title: string,
      },
    },
  };
}

const IndexPage: React.FC<IPageProps> = ({ data }) => {
  const theme = useTheme();
  const jonathanImage = data.file.childImageSharp.fluid;
  const title = data.site.siteMetadata.title;

  const newTheme: any = {
    colors: { background: { 500: '#000' }, on: { background: '#fff' } },
  };
  useThemeUpdater(newTheme);

  return (
    <>
      <SEO title='Home' />
      <h1>{title}</h1>
      <section>
        <h2>You can do great stuff with this combo!</h2>
        <p>There is also set up a theme with colors, spacing, sizes etc</p>
        <p>Modify the defaults to your liking!</p>
        <p>Theme bgColor: {theme.colors.background[500]} </p>
      </section>
      <section>
        <h2>Project backers</h2>
        <ul>
          <li>
            <BackerCard
              fluidImage={jonathanImage}
              name='Jonathan Sparvath'
              profession='Programmer'
              email='smth@smth.com'
              onClick={() => console.log('clicked')}
            />
          </li>
        </ul>
      </section>
      <Link to='/about/'>Go to about</Link>
    </>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "me-face.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
