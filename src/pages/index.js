import React from 'react';
import { FaRocket } from 'react-icons/fa';

import Layout from 'components/Layout/Layout';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      Hello world <FaRocket />
    </Layout>
  );
};

export default IndexPage;
