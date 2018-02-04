import { connect } from 'react-redux'

import { people } from '../ducks';
import { People } from '../components';


const withConnection = connect(
  ({ people, messages }) => { 

    if (messages.focus === undefined) return {};

    const { cc, from, to } = messages.results[messages.focus] || {};

    return { 
      cc: cc.map(email => people.results[email]),
      from: people.results[from],
      to: people.results[to],
    };
  }, 
  dispatch => ({ 
    setFocus: email => dispatch(people.setFocus(email)),
  })
);

export default withConnection(People);