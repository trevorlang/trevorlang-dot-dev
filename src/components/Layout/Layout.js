import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import 'assets/stylesheets/application.scss';

import { usePageMeta } from 'hooks';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = ({ children, pageName, className }) => {
  const componentClass = classNames(
    `layout`,
    {
      [`page-${pageName}`]: pageName,
      className
    }
  );

  const { meta } = usePageMeta();

  const helmetSettings = {
    ...meta,
    bodyAttributes: {
      ...meta.bodyAttributes,
      class: componentClass.string
    }
  };

  return (
    <>
      <Helmet {...helmetSettings} />
      <div className="wrapper">
        <Header />
        <main>{ children }</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf( PropTypes.node ),
    PropTypes.node
  ]).isRequired,
  pageName: PropTypes.string,
  className: PropTypes.string
};

export default Layout;
