import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import './PostList.scss';

const PostList = () => {
  const data = useStaticQuery(graphql`
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
  `);

  const { allMarkdownRemark } = data;

  const { posts } = allMarkdownRemark;

  return (
    <ul className="post-list">
      {posts.map(({ id, frontmatter }) => {
        return (
          <li key={id} className="post-list__item">
            <Link className="post-list__item-link" to={frontmatter.path}>
              <h3 className="post-list__item-title">{frontmatter.title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
