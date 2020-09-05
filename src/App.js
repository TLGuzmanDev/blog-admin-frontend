import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import Nav from './components/Nav';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user')) || null;
    if (localUser) {
      setUser(localUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

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
          <div className="bg-light flex-grow-1">
            {user ? <Redirect to="/dashboard" /> : <h1>Homepage</h1>}
          </div>
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <LoginPage handleLogin={handleLogin} />}
        </Route>
        <Route path="/dashboard">
          {user ? <Dashboard user={user} /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
