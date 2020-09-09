import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import Nav from './components/common/Nav';
import LoginPage from './components/login/LoginPage';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user')) || null;
    if (localUser) {
      setUser(localUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      axios
        .get('http://localhost:3001/api/posts')
        .then((response) => {
          setPosts(response.data);
        })
        .catch((err) => console.log('[Error]: ' + err.message));
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

  const handleCreatePost = async (post) => {
    const config = {
      headers: {
        Authorization: `bearer ${user.token}`,
      },
    };
    try {
      const response = await axios.post(
        'http://localhost:3001/api/posts',
        post,
        config
      );
      console.log(response.data);
      setPosts([response.data, ...posts]);
    } catch (error) {
      console.log(`[Error]: ${error.message}`);
    }
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
          {user ? (
            <Dashboard
              user={user}
              posts={posts}
              createPost={handleCreatePost}
            />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
