import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import Prompt from './Prompt';
import moment from 'moment';

function PostList({ posts, deletePost, toggleHidden }) {
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
            <th>Hidden</th>
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
              <td>
                <Link to={`${url}/${post._id}/comments`}>
                  {post.comments.length}
                </Link>
              </td>
              <td>{moment(post.createdAt).format('MMM DD YYYY')}</td>
              <td>{post.hidden ? 'Yes' : 'No'}</td>
              <td>
                <Button
                  type="button"
                  variant={post.hidden ? 'success' : 'warning'}
                  size="sm"
                  className="mr-1"
                  onClick={() => {
                    toggleHidden(post._id, {
                      title: post.title,
                      body: post.body,
                      hidden: !post.hidden,
                    });
                  }}
                >
                  {post.hidden ? 'Show' : 'Hide'}
                </Button>
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
