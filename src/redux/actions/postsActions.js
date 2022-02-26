import * as actionTypes from '../constants/postsConstants';
import axios from 'axios';
import { posts, rate } from '../../constants/url';
import { filteredPostsbyCategories } from "../../mock/mockData";

export const getPosts = (page = 1, categoryID = '', limit = 10) => async dispatch => {
  const id = `&category_ids=${categoryID}`;
  const pageNumber = `&page=${page}`;
  const pageLimit = `&limit=${limit}`;
  try {
    dispatch({ type: actionTypes.GET_POSTS_REQUEST });

    // after creating backend we will use this API
    // const { data } = await axios.get(`${posts}/search?${pageNumber}${id}${pageLimit}`);
    
    const data = filteredPostsbyCategories(categoryID);

    dispatch({
      type: actionTypes.GET_POSTS_SUCCESS,
      payload: data
    });

  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const resetPosts = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.RESET_POSTS_REQUEST });
    dispatch({ type: actionTypes.RESET_POSTS_SUCCESS });
  } catch (error) {
    dispatch({
      type: actionTypes.RESET_POSTS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const ratePost = (postId, rate) => async dispatch => {
  try {
    // after creating backend we will use this API
    // const { data } = await axios.post(`${rate}/{postId}/{rate}`);
    const data = [{}];
    
    dispatch({
      type: actionTypes.POST_RATE_SUCCESS,
      payload: data
    });

  } catch (error) {
    dispatch({
      type: actionTypes.POST_RATE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};


