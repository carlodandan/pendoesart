import React from 'react';

const Featured: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Ethereal Dreams",
      medium: "Watercolor & Digital",
      description: "A exploration of dreams and reality through fluid watercolor techniques combined with digital precision.",
      alignment: "left" as const,
    },
    {
      id: 2,
      title: "Urban Echoes",
      medium: "Vexel Art",
      description: "Capturing the rhythm of city life through precise vector-based portraiture and urban landscapes.",
      alignment: "right" as const,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-black text-center mb-16">
          FEATURED PROJECTS
        </h2>
        
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              project.alignment === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } items-center gap-12 mb-32 last:mb-0`}
          >
            {/* Artwork */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-200 aspect-square shadow-lg transform transition-all duration-800 hover:scale-105">
                {/* Placeholder for artwork */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                  <span className="text-gray-500 text-lg">{project.title}</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 w-full">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h3 className="text-3xl font-bold text-black mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm tracking-widest mb-6">
                  {project.medium}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <button className="mt-8 border-2 border-black text-black px-6 py-2 text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;