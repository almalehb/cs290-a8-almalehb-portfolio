import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function PageNavigation() {
  return (
    <nav id="pages">
        <Link to="/">Home</Link>
        <Link to="../topics">Topics</Link>
        <Link to="../gallery">Gallery</Link>
        <Link to="../contact">Contact Us</Link>
        <Link to="../order">Order</Link>
        <Link to="../charging">EV Charging</Link>
    </nav>
  );
}

export default PageNavigation;
