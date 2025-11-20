import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          {/* Portrait */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gray-300 rounded-full border-4 border-gray-400 overflow-hidden">
                {/* Placeholder for portrait */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400">
                  <span className="text-gray-600">Portrait</span>
                </div>
              </div>
              <div className="absolute -inset-4 border border-gray-300 rounded-full pointer-events-none"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-3/5">
            <h2 className="text-4xl font-bold text-black mb-8 font-serif">
              Hi, I'm Penelope
            </h2>
            
            <div className="relative mb-8">
              <div className="w-24 h-px bg-black mb-6"></div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-serif italic">
              "I create emotional and expressive portraits that capture the essence of human experience."
            </p>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                With over a decade of experience in both traditional and digital mediums, 
                I specialize in creating artwork that speaks to the soul. My journey began 
                with watercolors and evolved into digital mediums, always maintaining the 
                emotional depth that defines my style.
              </p>
              <p>
                Each piece is a story waiting to be told, a moment frozen in time that 
                continues to resonate with viewers long after their first glance.
              </p>
            </div>

            <div className="mt-8 flex space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-black mb-1">10+</div>
                <div className="text-sm text-gray-600 tracking-widest">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black mb-1">200+</div>
                <div className="text-sm text-gray-600 tracking-widest">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black mb-1">50+</div>
                <div className="text-sm text-gray-600 tracking-widest">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;