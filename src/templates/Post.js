import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'components/Layout/Layout';

const PortfolioPostPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, date } = frontmatter;
  return (
    <Layout pageName="portfolio-post-page">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>{title}</h1>
      <p>{date}</p>
      <div
        className="portfolio-post-page__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

PortfolioPostPage.propTypes = {
  data: PropTypes.any
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default PortfolioPostPage;
