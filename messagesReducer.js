// messagesReducer.js
const initialState = {
    messages: [],
  };
  
  const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      // Add more cases as needed
      default:
        return state;
    }
  };
  
  export default messagesReducer;
  