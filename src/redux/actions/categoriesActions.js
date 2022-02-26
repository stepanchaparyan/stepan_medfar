import * as actionTypes from '../constants/categoriesConstants';
import axios from 'axios';
import { categories } from '../../constants/url';

export const getCategories = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_CATEGORIES_REQUEST });

    // const { data } = await axios.get(categories);
    const data = [{id: 1, name: "Facebook"}, {id: 2, name: "Twitter"}, {id: 3, name: "Instagram"}] 

    dispatch({
      type: actionTypes.GET_CATEGORIES_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};


