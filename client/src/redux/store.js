import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import imagesReducer from './reducers/imagesReducer';
import modalReducer from './reducers/modalReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './reducers/categoriesReducer';

const rootReducer = combineReducers({
  images: imagesReducer,
  categories: categoriesReducer,
  showModal: modalReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const appStore = createStore(rootReducer,composedEnhancer)


export default appStore;

