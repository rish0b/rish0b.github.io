import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Projects from './pages/Projects/Projects';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;