// reducers.js
import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';
import notificationsReducer from './notificationsReducer';

const rootReducer = combineReducers({
  messages: messagesReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
