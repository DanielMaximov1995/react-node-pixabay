import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import imagesReducer from './reducers/imagesReducer';
import modalReducer from './reducers/modalReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './reducers/categoriesReducer';

// combine reducers to create the root reducer
const rootReducer = combineReducers({
  images: imagesReducer,
  categories: categoriesReducer, // Added categories reducer
  showModal: modalReducer,
});

// apply middleware and DevTools extension
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

// create the Redux store with the root reducer and middleware
const appStore = createStore(rootReducer, composedEnhancer);

export default appStore;
