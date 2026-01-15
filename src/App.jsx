import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Internships from './pages/Internships';
import CompanyDetail from './pages/CompanyDetail';
import Disclaimer from './pages/Disclaimer';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AboutUs from './pages/AboutUs';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        {/* Blobs removed for new background image */}

        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/company/:companyName" element={<CompanyDetail />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/sign-in/*" element={<SignInPage />} />
            <Route path="/sign-up/*" element={<SignUpPage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
        <div className="creator-nameplate">
          Made by <span>Ankush Vats</span>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
