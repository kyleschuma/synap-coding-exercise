import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { messages, reducer } from './ducks';
import Container from './containers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(messages.load());

render(
  <Provider store={store}>
    <Container />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
