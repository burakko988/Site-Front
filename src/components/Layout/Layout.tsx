// Layout.tsx
import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Container, Box } from '@mui/material';
import HomeSlider from '../Home/HomeSlider/HomeSlider';
import EventCategories from '../Event/EventCategories';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import { Navbar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import EventLogo from '../../assets/images/eventoria-logo.png';
import FilterBar from '../Navbar/FilterBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isDetailPage = location.pathname.includes('/event-details');

  return (
    <>
      {/* <Navbar /> */}

      <AppBar position="sticky" sx={{ paddingTop: '15px', paddingBottom: '15px', backgroundColor: '#2ED87B' }}>
        <Container>
          <Toolbar className="LogoAndFilterBar" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img className="navbar-logo" src={EventLogo} alt="My Application Logo" />
            </Link>

            <FilterBar />
          </Toolbar>
        </Container>
      </AppBar>
      {isHomePage && <HomeSlider />}
      {!isDetailPage && <EventCategories />}
      <Container>
        <Box marginTop={2}>{children}</Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
