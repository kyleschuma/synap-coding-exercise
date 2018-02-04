import React from 'react';
import { connect } from 'react-redux'

import { people } from '../ducks';
import { Layout, Person } from '../components';
import Messages from './messages';
import People from './people';


const withConnection = connect(
  ({ people }) => ({ 
    person: people.results[people.focus]
  }),
  dispatch => ({
    clearFocus: () => dispatch(people.setFocus(undefined)), 
  })
);

export default withConnection(({ person, clearFocus }) => 
  <Layout>
    <People />
    { 
      person ? 
        <Person { ...person } onClose={() => clearFocus()} /> : 
        <Messages /> 
    }
  </Layout>
);