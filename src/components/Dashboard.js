import React from 'react';
import { Row, Col } from 'react-bootstrap';

import DashboardSide from './DashboardSide';
import DashboardMain from './DashboardMain';

function Dashboard({ user }) {
  return (
    <Row as="main" noGutters className="bg-secondary flex-grow-1">
      <Col xs={2} className="bg-dark border-top border-light">
        <DashboardSide user={user} />
      </Col>
      <Col xs={10} className="bg-light">
        <DashboardMain user={user} />
      </Col>
    </Row>
  );
}

export default Dashboard;
