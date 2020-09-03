import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from './LoginForm';

function LoginPage({ handleLogin }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Login</h1>
          <hr />
          <LoginForm handleLogin={handleLogin} />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
