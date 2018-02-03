import React from 'react';
import { connect } from 'react-redux'

import { messages } from '../ducks';
import { Messages } from '../components';
import Message from './message';

const withConnection = connect(
  ({ messages: { focus, results } }) => ({
    focus,  
    messages: Object.values(results),
  }), 
  dispatch => ({
    next: () => dispatch(messages.load())
  }) 
);

export default withConnection(({ focus, messages, next }) => 
  <Messages next={next}>
    {messages.map(message => 
      <Message key={message.id} focused={focus === message.id} { ...message } />
    )}
  </Messages>
);