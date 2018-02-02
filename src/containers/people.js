import { connect } from 'react-redux'

import { People } from '../components';


const withConnection = connect(
  ({ people, messages: { focus, results } }) => { 

    if (focus === undefined) return {};

    const { cc, from, to } = results[focus] || {};

    return { 
      cc: cc.map(email => people[email]),
      from: people[from],
      to: people[to],
    };
  }
);

export default withConnection(People);