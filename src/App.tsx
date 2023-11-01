import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import LastEvents from './pages/LastEvents';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ButtonAppBar } from './components/navbar/navbar';


function App() {
  const showOnHome = location.pathname === "/";
  return (
    <Router>
      <div>
        <ButtonAppBar showOnHome={showOnHome} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event-details/:eventName' element={<EventDetails />} />
          {/* <Route path='/last-events' element={<LastEvents />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
