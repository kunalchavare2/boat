import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import FeaturePage from './pages/FeaturePage/FeaturePage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
   <div>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/feature/:id" element={<FeaturePage />} />
         <Route path="/contact" element={<ContactPage />} />
      </Routes>
  </div>
  );
}
export default App;
