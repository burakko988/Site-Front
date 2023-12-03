import Home from './pages/Home';
import EventDetailsPage from './pages/EventDetailsPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PreviousEventsPage from './pages/PreviousEventsPage';
import PlacePage from './pages/PlacePage';
import CategoryPage from './pages/CategoryPage';
import Particle from './components/Particles/Particle';
import { useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-details/:title" element={<EventDetailsPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/previous-events" element={<PreviousEventsPage />} />
          <Route path="/place/:place" element={<PlacePage />} />
        </Routes>
        <Particle />
      </Layout>
    </Router>
  );
}

export default App;
