import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { messages, reducer } from './ducks';
import Container from './containers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(messages.load());

render(
  <Container store={store} />, 
  document.getElementById('root')
);
registerServiceWorker();
