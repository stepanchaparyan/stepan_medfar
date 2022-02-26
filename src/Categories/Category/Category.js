
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, ButtonStyled } from './CategoryStyled';
import { getPosts, resetPosts } from '../../redux/actions/postsActions';

const Category = ({ category, id }) => {
    const dispatch = useDispatch();
    const getNewPosts = () => {
        localStorage.setItem('category', id);
        dispatch(resetPosts());
        dispatch(getPosts(1, id));
    };

    return (
        <Container>
            <ButtonStyled onClick={getNewPosts}>{category}</ButtonStyled>
        </Container>
    )
};

Category.propTypes = {
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Category;