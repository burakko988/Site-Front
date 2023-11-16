import Home from './pages/Home';
import EventDetails from './pages/EventDetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import EventList from './components/Event/EventList';
import PreviousEvents from './pages/PreviousEvents/';
import PlacePage from './pages/PlacePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-details/:eventName" element={<EventDetails />} />
          <Route path="/category/:category" element={<EventList />} />
          <Route path="/previous-events" element={<PreviousEvents />} />
          <Route path="/place/:place" element={<PlacePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
