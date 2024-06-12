import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home';
import PollDetail from './poll-detail';
import Vote from './vote';
import CreatePoll from './create-poll';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poll-detail/" element={<PollDetail />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/create-poll" element={<CreatePoll />} />
      </Routes>
    </Router>
  );
}

export default App;
