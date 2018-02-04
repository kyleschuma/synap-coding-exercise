import React from 'react';
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose';

import { people, messages } from '../ducks';
import { Message } from '../components';

const withConnect = compose(
  connect(
    ({ people }) => ({ people: people.results }),
    dispatch => ({ 
      load: emails => dispatch(people.load(emails)),
      setFocus: id => dispatch(messages.setFocus(id)),
    })
  ), 
  lifecycle({
    componentDidMount() { 
      const { from, to, cc, load } = this.props; 
      load([ ...cc, from, to ]);
    }
  })
);

export default withConnect(({ id, body, from, focused, people, subject, to, setFocus }) => {
  
  const props = { 
    id,
    body, 
    from: people[from] || { name: from },
    focused,
    subject,
    to: people[to] || { name: to },

    setFocus,
  };
  console.log(props);
  return <Message { ...props } />
});