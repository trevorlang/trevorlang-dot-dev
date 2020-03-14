import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">Copyright &copy; { new Date().getFullYear() }, Hoegel Media Productions</p>
      <p className="footer__shoutout">Designed and developed by Trevor Lang</p>
    </footer>
  );
};

export default Footer;
