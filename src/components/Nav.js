import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Button } from 'react-bootstrap';

function Nav({ user, handleLogout }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/" className="text-white text-decoration-none">
          Blog Admin Site
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {user === null ? (
          <Button as={Link} to="/login" variant="outline-light">
            Login
          </Button>
        ) : (
          <>
            <Navbar.Text className="mr-2">
              Logged in as: {user.email}
            </Navbar.Text>
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
