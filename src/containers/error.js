import React from 'react';
import { connect } from 'react-redux';

import { messages } from '../ducks';
import { Alert } from '../components';


const withConnect = connect(
  ({ messages }) => ({ error: messages.error }),
  dispatch => ({ 
    reload: () => dispatch(messages.load()),
  })
);

export default withConnect(({ error, reload }) =>
  error ? 
    <Alert onClick={reload}>
      A problem ocurred loading data. Click here to retry.
    </Alert> :
    null
);