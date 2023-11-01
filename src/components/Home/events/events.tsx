import React from 'react';

const Navbar = () => {
  const categories = ['Concert', 'Theatre', 'Festival', 'Stand up', 'Kids activities', 'Blog'];

  return (
    <nav >
      <ul className="category-home">
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;