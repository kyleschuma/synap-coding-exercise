import { combineReducers } from 'redux';

import messagesReducer, * as messages from './messages';
import peopleReducer, * as people from './people';

export { messages, people };

export const reducer = combineReducers({
  messages: messagesReducer,
  people: peopleReducer,
});