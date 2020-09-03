import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Button } from 'react-bootstrap';

function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/" className="text-white text-decoration-none">
          Blog Admin Site
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button as={Link} to="/login" variant="outline-light">
          Login
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
