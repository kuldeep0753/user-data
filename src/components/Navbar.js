import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ handleGetUsers }) => {
  return (
    <nav class="navbar">
      <div class="navbar-brand">Brand Name</div>
      <button onClick={handleGetUsers} class="btn btn-primary">Get Users</button>
    </nav>
  )
}

export default Navbar;