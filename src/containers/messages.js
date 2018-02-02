import React from 'react';
import { connect } from 'react-redux'
import Infinite from 'react-infinite-scroll-component';

import { messages } from '../ducks';
import { Loading } from '../components';
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

const height = window.innerHeight;

export default withConnection(({ className, focus, messages, next }) => 
  <Infinite height={height} next={next} hasMore={true} loader={<Loading />}>
    {messages.map(message => 
      <Message key={message.id} focused={focus === message.id} { ...message } />
    )}
  </Infinite>
);