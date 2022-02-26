
import React from 'react';

import PropTypes from 'prop-types';
import { Container } from './PostsStyled';
import Post from './Post/Post';
import Loading from '../components/Loading/Loading';

const Posts = ({ posts, loading }) => {
    return (
        <Container>
            {loading ? (
              <>
                <Loading type="Oval" color="blue" height={40} width={40}></Loading>
              </>
            ) : (
              <>
                {posts?.map((item, i) => (
                  <Post key={`${item.id}_${i}`} name={item?.name} price={item?.price} rate={item?.rate}></Post>
                ))}
              </>
            )}
        </Container>
    )
};

Posts.propTypes = {
    posts: PropTypes.array,
    loading: PropTypes.bool,
};

Posts.defaultProps = {
  posts: [],
    loading: false,
};

export default Posts;