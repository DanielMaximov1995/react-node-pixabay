const initialState = null;

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MODAL_STATUS':
      return state ? null : action.payload
    default:
      return state;
  }
};

export default modalReducer;
