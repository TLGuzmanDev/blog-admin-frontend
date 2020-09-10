import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import Prompt from './Prompt';

function PostList({ posts, deletePost }) {
  const { url } = useRouteMatch();
  return (
    <Container>
      <h1 className="text-center">Blog Posts</h1>
      <hr />
      <Table striped borderless hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Comments</th>
            <th>Date Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id}>
              <td>{index}</td>
              <td>
                <Link to={`${url}/${post._id}`}>{post.title}</Link>
              </td>
              <td>{post.comments.length}</td>
              <td>{`${post.createdAt}`}</td>
              <td className="d-flex justify-content-center">
                <Link
                  to={`${url}/edit/${post._id}`}
                  className="btn btn-sm btn-primary mr-1"
                >
                  Edit
                </Link>
                <Prompt deletePost={() => deletePost(post._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default PostList;
