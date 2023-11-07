import { Container } from '@mui/material';

import { NavLink } from 'react-router-dom';

const EventCategories = () => {
  const categories = [
    { name: 'Previous Events', path: '/previous-events' },
    { name: 'Concert', path: '/category/concert' },
    { name: 'Theater', path: '/category/theater' },
    { name: 'Festival', path: '/category/festival' },
    { name: 'Stand up', path: '/category/standup' },
    { name: 'Sport', path: '/category/sport' },
  ];

  return (
    <nav>
      <Container>
        <ul className="category-home">
          {categories.map((category, index) => (
            <li key={index}>
              <NavLink to={category.path} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default EventCategories;
