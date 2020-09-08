import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function PostList({ posts }) {
  const { url } = useRouteMatch();
  return (
    <Container>
      <h1>Blog Posts</h1>
      <hr />
      <ul className="list-unstyled pl-2">
        {posts.map((post) => (
          <li key={post._id} className="mb-3">
            <Link to={`${url}/${post._id}`} className="h5 m-0">
              {post.title}
            </Link>
            <small className="d-block text-capitalize">{`${post.user.first_name} ${post.user.last_name}`}</small>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default PostList;
