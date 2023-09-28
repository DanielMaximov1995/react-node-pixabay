import axios from 'axios';
import { apiURL } from './../api';

export const fetchImages = (category, page, sortBy) => async (dispatch) => {
  // Dispatch a loading action to true
  dispatch({ type : 'LOADING_IMAGES' });
  try {
    const resp = await axios.get(`${apiURL}images?category=${category}&page=${page}&sortBy=${sortBy}`);

    // Dispatch a success action with the retrieved images data
    dispatch({type: 'FETCH_IMAGES_SUCCESS',payload: resp.data});
  } catch (error) {
    console.error(error);
  }
  // Dispatch a loading action to false
  dispatch({ type : 'LOADING_IMAGES' });
};
