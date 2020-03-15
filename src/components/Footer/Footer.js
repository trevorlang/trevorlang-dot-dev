import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './Footer.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      siteData: site {
        siteMetadata {
          shortTitle
          shoutout
        }
      }
    }
  `);

  const { siteData } = data;
  const { siteMetadata } = siteData;
  const { shortTitle, shoutout = null } = siteMetadata;

  return (
    <footer className="footer">
      <p className="footer__copyright">
        Copyright &copy; {new Date().getFullYear()}, {shortTitle}
      </p>
      {shoutout && <p className="footer__shoutout">{shoutout}</p>}
    </footer>
  );
};

export default Footer;
