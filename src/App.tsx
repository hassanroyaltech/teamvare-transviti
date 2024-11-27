import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobsListingPage from './pages/jobs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<JobsListingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App