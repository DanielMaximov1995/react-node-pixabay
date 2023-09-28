const initialState = {
  loading : false,
  images : [],
  pages : 0
}; 

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_SUCCESS':
      return {
        ...state,
          images : action.payload.result,
          pages : action.payload.pages
      }
    case 'LOADING_IMAGES':
      return{...state ,loading: !state.loading}
    default:
      return state;
  }
};

export default imagesReducer;
