import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import './Header.scss';

const Header = React.memo(() => {
  const data = useStaticQuery(graphql`
    query {
      navigationData: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "page" } } }
      ) {
        items: nodes {
          frontmatter {
            path
            title
          }
        }
      }
      siteData: site {
        siteMetadata {
          shortTitle
          siteUrl
        }
      }
    }
  `);

  const { navigationData, siteData } = data;

  const navigationOrder = ['Portfolio', 'About', 'Contact'];

  const navigationItems = navigationOrder.map(title => {
    return navigationData.items.filter(({ frontmatter }) => {
      return frontmatter.title === title;
    })[0];
  })

  return (
    <header className="header">
      <Link className="header__masthead" to="/">
        {siteData.siteMetadata.shortTitle}
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          {navigationItems.map(({ id, frontmatter }) => (
            <li key={id} className="header__list-item">
              <Link className="header__link" to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
});

export default Header;
