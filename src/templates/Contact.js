import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from 'components/Layout/Layout';

const ContactPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, date } = frontmatter;
  return (
    <Layout pageName="contact-page">
      <Helmet>
        <title>{ title }</title>
      </Helmet>
      <h1>{ title }</h1>
      <p>{ date }</p>
      Woop
      <div
        className="contact-page__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
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

export default ContactPage;
