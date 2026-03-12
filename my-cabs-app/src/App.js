import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import FleetPage from './pages/FleetPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router basename="/EkthaCabsCochin">
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
        <Footer />
        <FloatingCallButton />
        <FloatingWhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
