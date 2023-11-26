import Home from './pages/Home';
import EventDetailsPage from './pages/EventDetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PreviousEventsPage from './pages/PreviousEventsPage';
import PlacePage from './pages/PlacePage';
import CategoryPage from './pages/CategoryPage';
import Particle from './components/Particles/Particle';

function App() {
  return (
    <Router>
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
