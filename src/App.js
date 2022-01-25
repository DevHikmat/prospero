import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import AOS from 'aos';
import ImgContent from './components/ImgContent/ImgContent';

function App() {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  return (
    <div className="App" style={{  backgroundColor: 'var(--white)'}}>
      <div className="container">
        <Header />
      </div> 
      <div className="nav-container">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
