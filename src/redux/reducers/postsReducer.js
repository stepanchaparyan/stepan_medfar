import * as actionTypes from '../constants/postsConstants';

export const postsReducer = (state = { posts: [], loading: false }, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_POSTS_REQUEST:
        case actionTypes.RESET_POSTS_REQUEST:
        case actionTypes.RESET_POSTS_FAIL:
        case actionTypes.GET_POSTS_FAIL:
            return {
                ...state,
                loading: true,
                error: payload,
            };
        case actionTypes.GET_POSTS_SUCCESS:
            const categoryId = localStorage.getItem('category') || '';
            return {
                ...state,
                posts: [...state.posts, ...payload],
                loading: false
            };
        case actionTypes.RESET_POSTS_SUCCESS:
            return {
                ...state,
                posts: [],
                loading: false
            };
        default:
            return state;
    }
};