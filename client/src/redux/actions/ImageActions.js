import axios from 'axios';
import { apiURL } from './../api';

export const fetchImages = (category, page, sortBy) => async (dispatch) => {
  dispatch({ type : 'LOADING_IMAGES' });
  try {
    const response = await axios.get(`${apiURL}images?category=${category}&page=${page}&sortBy=${sortBy}`);
    const images = response.data;
    dispatch({type: 'FETCH_IMAGES_SUCCESS',payload: images});
  } catch (error) {
    console.error(error);
  }
  dispatch({ type : 'LOADING_IMAGES' });
};
