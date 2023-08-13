import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Menu() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Add Movie</Link>
    </nav>
  );
}

export default Menu;
