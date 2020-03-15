import React from 'react';
// import { graphql } from 'gatsby';

import Layout from 'components/Layout/Layout';
import Welcome from 'components/Welcome/Welcome';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Welcome />
    </Layout>
  );
};

export default IndexPage;

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
//       posts: nodes {
//         frontmatter {
//           path
//           title
//         }
//       }
//     }
//   }
// `;
