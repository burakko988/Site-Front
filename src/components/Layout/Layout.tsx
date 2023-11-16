// Layout.tsx
import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import HomeSlider from '../Home/HomeSlider/HomeSlider'; // Yolunuzun doğru olduğundan emin olun
import EventCategories from '../Event/EventCategories';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/footer';
import { Navbar } from '../Navbar/navbar';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <Navbar />

      <AppBar position="sticky" sx={{ paddingTop: '15px', paddingBottom: '15px', backgroundColor: '#01a3a4' }}>
        <Container>
          <Toolbar>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography sx={{ fontSize: '24px' }} variant="h6" component="h1">
                My Application
              </Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      {isHomePage && <HomeSlider />}
      <EventCategories />
      <Container>
        <Box marginTop={2}>{children}</Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
