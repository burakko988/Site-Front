import React from 'react';
import ButtonAppBar from './components/navbar/navbar';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import LastEvents from './pages/LastEvents';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event-details' element={<EventDetails />} />
          <Route path='/last-events' element={<LastEvents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
