import React from 'react';
import { Provider } from 'react-redux';


import { Layout, Search } from '../components';
import Messages from './messages';
import People from './people';

export default ({ store }) => ( 
  <Provider store={store}>
    <Layout 
      people={<People />}
      search={<Search placeholder="Search messages" />}
      messages={<Messages />} 
    />
  </Provider>
);