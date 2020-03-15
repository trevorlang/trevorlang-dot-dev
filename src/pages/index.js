import React from 'react';
import PropTypes from 'prop-types';
import { FaRocket } from 'react-icons/fa';
import { graphql } from 'gatsby';

import Layout from 'components/Layout/Layout';
import PostList from 'components/PostList/PostList'

const IndexPage = () => {
  return (
    <Layout pageName="home">
      Hello world <FaRocket />
      <PostList />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
      posts: nodes {
        frontmatter {
          path
          title
        }
      }
    }
  }
`;
