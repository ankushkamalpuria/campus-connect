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
<<<<<<< HEAD
import AboutUs from './pages/AboutUs';
import ScrollToTop from './components/ScrollToTop';
=======
>>>>>>> ced380f5ecadf761e1533af619b8b64dc355490f
import './App.css';

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <ScrollToTop />
=======
>>>>>>> ced380f5ecadf761e1533af619b8b64dc355490f
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
<<<<<<< HEAD
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
        <div className="creator-nameplate">
          Made by <span>Ankush Vats</span>
        </div>
=======
          </Routes>
        </main>
        <Footer />
>>>>>>> ced380f5ecadf761e1533af619b8b64dc355490f
      </div>
    </BrowserRouter>
  );
}

export default App;
