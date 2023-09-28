const initialState = null;

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return action.payload;
    case 'HIDE_MODAL':
      return null;
    default:
      return state;
  }
};

export default modalReducer;
