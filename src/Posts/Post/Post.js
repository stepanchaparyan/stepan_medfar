
import React from 'react';
import PropTypes from 'prop-types';
import { ratePost } from '../../redux/actions/postsActions';
import { Container, PostName, PostRate, PostPrice, ButtonContainer, ButtonStyled } from './PostStyled';

const Post = ({ id, name, price, rate }) => {

    const handleRatePost = () => {
        // later we will get rate number from input
        ratePost(id, rate++);
    };

    return (
    <Container>
        <PostName>{name}</PostName>
        <PostPrice>{price}</PostPrice>
        <ButtonContainer>
            <ButtonStyled onClick={() => handleRatePost(id, rate)}>Buy</ButtonStyled>
            <ButtonStyled onClick={() => handleRatePost(id, rate)}>Hold</ButtonStyled>
            <ButtonStyled onClick={() => handleRatePost(id, rate)}>Sell</ButtonStyled>
        </ButtonContainer>
        <PostRate>Rate - {rate}</PostRate>
    </Container>
)};

Post.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default Post;