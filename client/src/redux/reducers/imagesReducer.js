const initialState = {
  loading : false,
  images : [],
  pages : 0
}; 

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_SUCCESS':
      // update the state with images and the number of pages
      return {
        ...state,
          images : action.payload.result,
          pages : action.payload.pages
      }
    case 'CLEAR_IMAGES':
      // reset the state
      return initialState
    case 'LOADING_IMAGES':
      // toggle the loading state when loading images
      return{...state ,loading: !state.loading}
    default:
      return state;
  }
};

export default imagesReducer;
