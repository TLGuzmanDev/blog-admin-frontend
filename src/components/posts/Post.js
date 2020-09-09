import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Container, Button } from 'react-bootstrap';

function Post({ posts }) {
  const { postID } = useParams();
  const post = posts.find((post) => post._id === postID);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <Container className="my-2">
      <ReactMarkdown source={post.title} />
      <div className="text-capitalize mb-2">
        <small className="text-primary">{`${post.user.first_name} ${post.user.last_name} `}</small>
        <small className="text-muted">{post.createdAt}</small>
        <hr />
      </div>
      <ReactMarkdown source={post.body} />
    </Container>
  );
}

export default Post;
