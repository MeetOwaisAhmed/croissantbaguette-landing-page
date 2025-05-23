
import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Strategy",
      description: "We dive deep into your business to craft tailored strategies that drive growth and engagement."
    },
    {
      title: "Design",
      description: "Beautiful, functional designs that elevate your brand and create memorable user experiences."
    },
    {
      title: "Development",
      description: "Robust, scalable coding solutions with performance and accessibility at the core."
    },
    {
      title: "Marketing",
      description: "Data-driven campaigns that connect with your audience and convert visitors into customers."
    }
  ];

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-space text-3xl md:text-4xl font-medium leading-tight tracking-tight text-neutral-900 mb-16">
          Our expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="border-t border-neutral-900 pt-6">
              <h3 className="font-space text-xl font-medium text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="font-space text-neutral-900/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
