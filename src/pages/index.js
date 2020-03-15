import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { graphql } from 'gatsby';

import Layout from 'components/Layout/Layout';

const IndexPage = ({ data }) => {
  console.log('data', data);
  return (
    <Layout pageName="home">
      Hello world <FaRocket />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
