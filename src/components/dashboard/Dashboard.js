import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import DashboardSide from './DashboardSide';
import DashboardMain from './DashboardMain';
import CreatePost from '../posts/CreatePost';
import PostList from '../posts/PostList';
import Post from '../posts/Post';
import EditPost from '../posts/EditPost';

function Dashboard({ user, posts, createPost, updatePost }) {
  const { path } = useRouteMatch();
  return (
    <Row as="main" noGutters className="bg-secondary flex-grow-1">
      <Col xs={2} className="bg-dark border-top border-light">
        <DashboardSide user={user} />
      </Col>
      <Col xs={10} className="bg-light">
        <Switch>
          <Route exact path={path}>
            <DashboardMain user={user} />
          </Route>
          <Route exact path={`${path}/blogs`}>
            <PostList posts={posts} updatePost={updatePost} />
          </Route>
          <Route path={`${path}/blogs/edit/:postID`}>
            <EditPost posts={posts} updatePost={updatePost} />
          </Route>
          <Route path={`${path}/blogs/:postID`}>
            <Post posts={posts} />
          </Route>
          <Route exact path={`${path}/create`}>
            <CreatePost createPost={createPost} />
          </Route>
        </Switch>
      </Col>
    </Row>
  );
}

export default Dashboard;
