import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Post({ posts }) {
  const { postID } = useParams();
  const post = posts.find((post) => post._id === postID);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <Container>
      <h2 className="m-0">{post.title}</h2>
      <small className="d-block text-muted text-capitalize mb-3">{`${post.user.first_name} ${post.user.last_name}`}</small>
      <p>{post.body}</p>
    </Container>
  );
}

export default Post;
