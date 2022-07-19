import React, { useEffect } from 'react';
import Home from './pages/Home';
import Registrasi from './pages/Registrasi';
import Info from './pages/Info';
import NavigationBar from './components/NavigationBar';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import './scss/App.scss';
import 'animate.css/animate.min.css';

function ScrollToTop() {
  const {pathname, hash} = useLocation();

  useEffect(() => {
    console.log(pathname);
    if (!hash) {
      setTimeout(() => window.scrollTo(0, 0), 0);
    } else {
      document.querySelector(hash)?.scrollIntoView();
    }
  }, [pathname, hash]);

  return null;
}

function App() {

  return (
    <div className="App">
      <ScrollToTop />
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
