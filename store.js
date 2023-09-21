import {combineReducers } from 'redux';
import { createStore } from 'redux';
import messagesReducer from './messagesReducer'; // Import your messages reducer
import notificationsReducer from './notificationsReducer'; // Import your notifications reducer

// Combine your reducers into a root reducer
const rootReducer = combineReducers({
  messages: messagesReducer,
  notifications: notificationsReducer,
  // Add more reducers here if needed
});

// Create the Redux store
const store = createStore(rootReducer);
export default store;
