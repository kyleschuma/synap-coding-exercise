import React from 'react';

import { Layout } from '../components';
import Messages from './messages';
import People from './people';

export default () => (
  <Layout>
    <People />
    <Messages />
  </Layout>
);