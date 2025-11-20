import React from 'react';

const Gallery: React.FC = () => {
  const artworks = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Artwork ${i + 1}`,
    delay: (i % 4) * 150,
  }));

  return (
    <section id="gallery" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          GALLERY
        </h2>
        
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="break-inside-avoid group relative cursor-pointer animate-fade-in"
              style={{ animationDelay: `${artwork.delay}ms` }}
            >
              <div className="bg-gray-800 aspect-square rounded-none overflow-hidden">
                {/* Placeholder for artwork image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 group-hover:brightness-110 transition-all duration-500 group-hover:scale-105" />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                  <p className="text-sm tracking-widest">View Details</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;