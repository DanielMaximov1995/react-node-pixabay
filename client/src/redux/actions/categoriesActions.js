import axios from 'axios';
import { apiURL } from '../api';

export const fetchCategories = () => async (dispatch) => {
  try {
    const resp = await axios.get(`${apiURL}categories`);

    // Dispatch a success action with the retrieved categories
    dispatch({type: 'FETCH_CATEGORIES_SUCCESS',payload: resp.data});
  } catch (error) {
    console.error(error);
  }
};
