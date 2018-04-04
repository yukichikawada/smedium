import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout}) => {
  const display = currentUser ? (
    <div>
      <p>Hello, { currentUser.username }!</p>
      <button onClick={logout}>Log out</button>
    </div>
  ) : (
    <div>
      <Link to="/signup">Sign up</Link>
    </div>
  )

  return (
    <header>
      <h1>Smedium</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
