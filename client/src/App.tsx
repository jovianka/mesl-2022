import React from 'react';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Info from './pages/Info';
import NavigationBar from './components/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import './scss/App.scss';

function App() {  
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
