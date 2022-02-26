
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoriesActions';
import { getPosts, resetPosts } from '../redux/actions/postsActions';

import Categories from '../Categories/Categories';
import Posts from '../Posts/Posts';
import { ButtonStyled } from './HomeStyled';

const Home = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.categories);
    const post = useSelector(state => state.posts);
    const { categories, loading: categoriesLoading } = category;
    const { posts, loading: postsLoading} = post;
    
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    let categoryId = '';

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    useEffect(() => {
        if (fetching) {
            categoryId = localStorage.getItem('category') || '';
            dispatch(getPosts(currentPage, categoryId));
            setCurrentPage(prev => prev + 1);
            setFetching(false);
        }
    }, [dispatch, fetching, posts.length]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1) {
            setFetching(true);
        };
    };

    const getNewPosts = () => {
        setFetching(true);
    };

    return (
      <>
        <Categories categories={categories} loading={categoriesLoading} getPosts={getPosts} resetPosts={resetPosts} />
        <Posts posts={posts} loading={postsLoading}></Posts>
        <ButtonStyled onClick={getNewPosts}>Load more</ButtonStyled>
      </>
    );
};

export default Home;