import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';

import Prompt from './Prompt';

function Comments({ posts, deleteComment }) {
  const { postID } = useParams();
  const post = posts.find((post) => post._id === postID);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <Container>
      <h1 className="text-center">{`${post.title}'s comments`}</h1>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Author</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {post.comments.map((comment, index) => (
            <tr key={comment._id}>
              <td>{index}</td>
              <td>{comment.author}</td>
              <td>{comment.body}</td>
              <td>
                <Prompt
                  deleteAction={() => deleteComment(postID, comment._id)}
                  targetTitle={'comment'}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Comments;
