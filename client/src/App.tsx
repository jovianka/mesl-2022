import React, { useEffect } from 'react';
import Home from './pages/Home';
import Registrasi from './pages/Registrasi';
import Info from './pages/Info';
import NavigationBar from './components/NavigationBar';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import './scss/App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration : 1000,
      startEvent: 'DOMContentLoaded',
    });
    setTimeout(() => AOS.refresh(), 100)
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrasi" element={<Registrasi/>} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
