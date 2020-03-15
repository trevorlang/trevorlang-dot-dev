import React from 'react';

import './Welcome.scss';

const Welcome = () => {
  return (
    <section className="welcome">
      <p className="welcome__intro">
        <span className="welcome__intro-spacing--well">
          <span className="welcome__intro-kerning--w">W</span>ell...
        </span>
        this is embarassing.
      </p>
      <p className="welcome__plea">
        You seem to have caught me off guard. If you're looking for the
        portfolio of{' '}
        <strong>Front End Designer &amp; Developer, Trevor Lang,</strong> find
        that at{' '}
        <a className="welcome__plea-link" href="http://www.trevorsaynever.com/">
          www.trevorsaynever.com
        </a>
        . Check back here soon!
      </p>
      <p className="welcome__plea">
        If you want to get in touch, email me at{' '}
        <a className="welcome__plea-link" href="mailto:hello@trevorlang.dev">
          hello@trevorlang.dev
        </a>
        .
      </p>
    </section>
  );
};

export default Welcome;
