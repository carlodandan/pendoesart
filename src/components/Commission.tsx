import React from 'react';

const Commission: React.FC = () => {
  const commissionCards = [
    {
      title: "Portrait Types",
      items: ["Watercolor Portraits", "Vexel Art", "Digital Illustrations", "Character Design"],
    },
    {
      title: "Pricing",
      items: ["Starting at $150", "Complexity Based", "Commercial Use +50%", "Rush Fee Available"],
    },
    {
      title: "What's Included",
      items: ["High-Res Files", "Source Files", "3 Revisions", "Personal Use License"],
    },
    {
      title: "How to Request",
      items: ["Initial Consultation", "Reference Photos", "50% Deposit", "2-4 Week Timeline"],
    },
  ];

  return (
    <section id="commissions" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          COMMISSION INFO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {commissionCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black rounded-none p-8 hover-lift group cursor-pointer"
            >
              <h3 className="text-xl font-bold text-black mb-6 text-center tracking-widest">
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-700 text-center text-sm leading-relaxed border-b border-gray-200 pb-2 last:border-b-0 group-hover:text-black transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <button className="text-black text-sm tracking-widest border-b border-transparent hover:border-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="border-2 border-white text-white px-12 py-4 font-medium tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
            START YOUR COMMISSION
          </button>
        </div>
      </div>
    </section>
  );
};

export default Commission;