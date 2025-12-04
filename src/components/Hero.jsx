import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Shweta <span className="text-orange-500 dark:text-aqua-500">Kedare</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-gray-300">
          Full Stack Developer
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
          Passionate about creating beautiful and functional web applications 
          with modern technologies and best practices.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#contact"
            className={`px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105 ${
              document.documentElement.classList.contains('dark')
                ? 'bg-dark-primary text-black' 
                : 'bg-light-primary text-white'
            }`}
          >
            Get In Touch
          </a>
          <a 
            href="#skills"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold transition-colors hover:border-current"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;