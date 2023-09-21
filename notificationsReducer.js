// notificationsReducer.js
const initialState = {
    notifications: [],
  };
  
  const notificationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTIFICATION':
        return {
          ...state,
          notifications: [...state.notifications, action.payload],
        };
      // Add more cases as needed
      default:
        return state;
    }
  };
  
  export default notificationsReducer;
  