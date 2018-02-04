import React from 'react';
import { Provider } from 'react-redux';


import { Layout, Search } from '../components';
import Error from './error';
import Messages from './messages';
import People from './people';

export default ({ store }) => ( 
  <Provider store={store}>
    <Layout 
      error={<Error />}
      people={<People />}
      search={<Search placeholder="Search messages" />}
      messages={<Messages />} 
    />
  </Provider>
);