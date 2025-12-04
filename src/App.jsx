import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-dark-background text-dark-text' 
        : 'bg-light-background text-light-text'
    }`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;