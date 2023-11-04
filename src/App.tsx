import Home from './pages/Home';
import EventDetails from './pages/EventDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
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
