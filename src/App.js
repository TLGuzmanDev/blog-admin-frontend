import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Nav from './components/Nav';
import LoginPage from './components/LoginPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (credentials) => {
    axios
      .post('http://localhost:3001/api/users/login', credentials)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log('[Error]: ' + err.message));
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Nav user={user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route exact path="/login">
          <LoginPage handleLogin={handleLogin} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
