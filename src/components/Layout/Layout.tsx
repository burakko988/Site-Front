// Layout.tsx
import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import ImageCarousel from '../Home/Slider/slider'; // Yolunuzun doğru olduğundan emin olun
import EventCategories from '../Event/EventCategories';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../navbar/navbar';
import Footer from '../Footer/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <Navbar />

      <ImageCarousel />
      <EventCategories />
      <Container>
        <Box marginTop={2}>{children}</Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
