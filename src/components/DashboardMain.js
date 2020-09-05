import React from 'react';
import { Container } from 'react-bootstrap';

function DashboardMain({ user }) {
  return (
    <Container>
      <h1>Dashboard</h1>
      <p>Hello, {user.name}</p>
    </Container>
  );
}

export default DashboardMain;
