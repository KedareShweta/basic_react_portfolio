import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 border-t ${
      document.documentElement.classList.contains('dark')
        ? 'border-gray-800 bg-black' 
        : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Media Links */}
          {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
            <a
              key={platform}
              href="#"
              className={`hover:underline transition-colors ${
                document.documentElement.classList.contains('dark')
                  ? 'hover:text-dark-primary' 
                  : 'hover:text-light-primary'
              }`}
            >
              {platform}
            </a>
          ))}
        </div>
        <p className={`text-sm ${
          document.documentElement.classList.contains('dark')
            ? 'text-gray-400' 
            : 'text-gray-600'
        }`}>
          © {currentYear} Shweta Kedare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;