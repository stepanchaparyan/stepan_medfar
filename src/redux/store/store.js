import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categoriesReducer } from '../reducers/categoriesReducer';
import { postsReducer } from '../reducers/postsReducer';

const middleware = [thunk];

const reducer = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;