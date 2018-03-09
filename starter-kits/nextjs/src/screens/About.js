import React, { Fragment } from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/header';

const ScreensAbout = () => (
  <Fragment>
    <Header />
    <Layout>
      <p>Next.js starter kit, using: </p>
      <p>React, Redux, Immutable.js, styled-components, express</p>
    </Layout>
  </Fragment>
);

export default ScreensAbout;
