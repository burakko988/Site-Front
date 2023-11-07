import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import DynamicEventDetails from './pages/DynamicEventDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import EventList from './components/Event/eventList';
import DynamicEventList from './components/Event/DynamicEventList';
import PreviousEvents from './pages/PreviousEvents/';

function App() {
  const showOnHome = location.pathname === '/';
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-details/:eventName" element={<DynamicEventDetails />} />
          {/* <Route path='/last-events' element={<LastEvents />} /> */}
          <Route path="/category/:category" element={<DynamicEventList />} />
          <Route path="/previous-events" element={<PreviousEvents />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
