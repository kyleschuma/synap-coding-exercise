import React from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';

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

const Wrapper = Styled.div`
  flex: 1; 
  display: flex; 

  > div { 
    flex: 1;
  }
`;

export default withConnection(({ className, focus, messages, next }) => (
  <Wrapper>
    <InfiniteScroll next={next} hasMore={true} loader={<Loading />}>
      {messages.map(message => 
        <Message key={message.id} focused={focus === message.id} { ...message } />
      )}
    </InfiniteScroll>
  </Wrapper>
));