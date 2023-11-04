// Layout.tsx
import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import ImageCarousel from '../Home/Slider/slider'; // Yolunuzun doğru olduğundan emin olun
import EventCategories from '../Event/EventCategories';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Application</Typography>
        </Toolbar>
      </AppBar>
      <ImageCarousel />
      <EventCategories />
      <Container>
        <Box marginTop={2}>{children}</Box>
      </Container>
    </>
  );
};

export default Layout;
