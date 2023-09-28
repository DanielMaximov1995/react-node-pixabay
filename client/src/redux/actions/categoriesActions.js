import axios from 'axios';
import { apiURL } from '../api';

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiURL}categories`);
    const categories = response.data;
    dispatch({type: 'FETCH_CATEGORIES_SUCCESS',payload: categories});
  } catch (error) {
    console.error(error);
  }
};
