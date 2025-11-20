import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-2/5 mb-12 lg:mb-0 animate-slide-up">
            <h1 className="text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight text-balance">
              ART THAT TELLS A STORY
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Watercolor, Vexel Portraits, Digital Illustrations
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/gallery"
                className="border-2 border-black text-black px-8 py-3 font-medium tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300 inline-block"
              >
                View Gallery
              </Link>
              <Link 
                to="/commission"
                className="border-2 border-black bg-black text-white px-8 py-3 font-medium tracking-widest text-sm hover:bg-transparent hover:text-black transition-all duration-300 inline-block"
              >
                Commission Me
              </Link>
            </div>
          </div>

          {/* Right Content - Artwork */}
          <div className="lg:w-3/5 flex justify-center gap-6">
            <div className="relative group">
              <div className="w-full max-w-2xl h-96 bg-gray-200 shadow-lg transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-102">
                {/* Placeholder for artwork - replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                  <span className="text-gray-500 text-lg">Featured Artwork</span>
                </div>
              </div>
              <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            <div className="relative group">
              <div className="w-full max-w-2xl h-96 bg-gray-200 shadow-lg transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-102">
                {/* Placeholder for artwork - replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                  <span className="text-gray-500 text-lg">Featured Artwork</span>
                </div>
              </div>
              <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            <div className="relative group">
              <div className="w-full max-w-2xl h-96 bg-gray-200 shadow-lg transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-102">
                {/* Placeholder for artwork - replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                  <span className="text-gray-500 text-lg">Featured Artwork</span>
                </div>
              </div>
              <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;