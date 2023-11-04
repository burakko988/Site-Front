import Home from './pages/Home';
import EventDetails from './pages/EventDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ButtonAppBar } from './components/navbar/navbar';
import Layout from './components/Layout/Layout';
import EventList from './components/Event/eventList';
import DynamicEventList from './components/Event/DynamicEventList';

function App() {
  const showOnHome = location.pathname === '/';
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-details/:eventName" element={<EventDetails />} />
          {/* <Route path='/last-events' element={<LastEvents />} /> */}
          <Route path="/category/:category" element={<DynamicEventList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
