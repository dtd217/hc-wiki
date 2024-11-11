import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Heroes from './Pages/Heroes';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<Heroes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
