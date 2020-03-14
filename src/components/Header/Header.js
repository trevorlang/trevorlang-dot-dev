import React from 'react';
import { Link } from 'gatsby';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link className="header__masthead" to="/">Hoegel Media Productions</Link>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link className="header__link" to="/">Home</Link>
          </li>
          <li className="header__list-item">
            <Link className="header__link" to="/page-2/">Page 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
