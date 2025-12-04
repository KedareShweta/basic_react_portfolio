import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${
      darkMode ? 'bg-black/80' : 'bg-white/80'
    } backdrop-blur-sm`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className={darkMode ? 'text-dark-primary' : 'text-light-primary'}>
              Shweta
            </span>
            <span> Kedare</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:underline transition-colors ${
                  darkMode ? 'hover:text-dark-primary' : 'hover:text-light-primary'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${
              darkMode 
                ? 'bg-dark-primary text-black' 
                : 'bg-light-primary text-white'
            }`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;