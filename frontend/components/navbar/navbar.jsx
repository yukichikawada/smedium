import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal}) => {
  const display = currentUser ? (
    <div>
      <p>Hello, { currentUser.username }!</p>
      <button onClick={logout}>Log out</button>
      {/* eventually: userProfile dropdown */}
    </div>
  ) : (
    <div>
      <button onClick={() => openModal('login')}>Login</button>
      <button onClick={() => openModal('signup')}>Sign up</button>
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
