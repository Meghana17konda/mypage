

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
    <div>
       <h2>Welcome!!!</h2>
    </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
