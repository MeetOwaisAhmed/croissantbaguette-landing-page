import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import Background from "@/assets/Gradient+Blur.svg";
import Vollardianlogo from "@/assets/kea-favicon.png";
import Karislogo from "@/assets/et-favicon.png";
import TTMFlogo from "@/assets/ttmf-icon.png";

// Client review data
const clientReviews = [
  {
    review: "The new website received positive feedback from customers — they commended the site's speed, fluidity, and overall UX. Croissant & Baguette worked closely with the client, providing regular updates and constant support throughout. Also, their knowledge and technical expertise were impressive.",
    name: "Arani Satgunaseelan",
    position: "CEO @Vollardian",
    logoUrl: Vollardianlogo, 
    logoText: "Vollardian",
    ctaText: "Read full review on Clutch"
  },
  {
    review: "The client was pleased with the outcome of the engagement. Croissant & Baguette managed the project well — everything was delivered on time, and all queries and concerns were addressed promptly. They also impressed the internal team with their transparency and strong adherence to quality.",
    name: "Rejimon Punchayil",
    position: "CEO @Karis Life",
    logoUrl: Karislogo,
    logoText: "Karis Life",
    ctaText: "Read full review on Clutch"
  },
  {
    review: "Croissant & Baguette successfully designed and deployed the platform. Croissant & Baguette led an excellent process with on-time deliveries and a responsive approach. The client also praised the team's ability to understand their vision for the product.",
    name: "Natalie",
    position: "CEO @TTMF",
    logoUrl: TTMFlogo,
    logoText: "TTMF",
    ctaText: "Read full review on Clutch"
  }
];

const Results: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(prev => prev === clientReviews.length - 1 ? 0 : prev + 1);
  };
  const handlePrev = () => {
    setActiveIndex(prev => prev === 0 ? clientReviews.length - 1 : prev - 1);
  };

  return (
    <section className="w-full py-16 sm:py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      {/* background gradient */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 opacity-90">
        <img
          src={Background}
          alt="Gradient background"
          className="w-[90%] h-auto max-w-3xl object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-2 h-2 rounded-full bg-[#5200FF] mr-2 relative">
              <div className="absolute -inset-0.5 rounded-full bg-[#5200FF] opacity-30 animate-ping" />
            </div>
            <span className="text-[#5200FF] font-space text-[14px] font-medium tracking-[0.7px] uppercase">
              RESULTS
            </span>
          </div>
          <h2 className="font-space text-[40px] md:text-[48px] font-medium leading-[1.2] tracking-tight text-black mb-6">
            What Clients Say
          </h2>
          <p className="text-lg font-space text-neutral-900 mb-12 max-w-2xl">
            These people paid us. Here's what happened.
          </p>
        </div>

        {/* review + floating logo */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center lg:gap-8">
          {/* Desktop-only floating logo */}
          <div className="hidden lg:flex flex-col items-center mr-8">
            {/* tooltip */}
            <div className="relative mb-2">
              <div className="bg-black text-white text-xs px-3 py-1 rounded-[8px] whitespace-nowrap">
                {clientReviews[activeIndex].logoText}
              </div>
              <div
                className="absolute left-1/2 -bottom-1 w-0 h-0
                           border-l-4 border-r-4 border-t-4
                           border-l-transparent border-r-transparent
                           border-t-black -translate-x-1/2"
              />
            </div>
            <div
              className="w-20 h-20 rounded-full bg-white border border-black
                         flex items-center justify-center shadow-[0_4px_0_0_#000]"
            >
              <img
                src={clientReviews[activeIndex].logoUrl}
                alt={`${clientReviews[activeIndex].logoText} logo`}
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          {/* Main card */}
          <div className="flex-1 bg-white rounded-3xl border-2 border-black p-8 sm:p-12 border-b-[5.5px] relative">
            {/* — Desktop-only arrows & name/position */}
            <div className="hidden lg:flex absolute top-8 right-8 flex-col items-end gap-4">
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="flex w-[47px] h-[31px] items-center justify-center
                             rounded-full bg-[#F3F4F6] text-black
                             shadow-[0_0_0_1px_#000] border-b-[3px] border-black
                             hover:translate-y-[3px] hover:border-b-0 hover:bg-[#FFF]
                             cursor-default transition-all duration-200 ease-in-out"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next review"
                  className="flex w-[47px] h-[31px] items-center justify-center
                             rounded-full bg-[#F3F4F6] text-black
                             shadow-[0_0_0_1px_#000] border-b-[3px] border-black
                             hover:translate-y-[3px] hover:border-b-0 hover:bg-[#FFF]
                             cursor-default transition-all duration-200 ease-in-out"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="text-right">
                <h4 className="font-space text-lg font-bold text-neutral-900">
                  {clientReviews[activeIndex].name}
                </h4>
                <p className="font-space text-sm text-[#5200FF]">
                  {clientReviews[activeIndex].position}
                </p>
              </div>
            </div>

            {/* — review + CTA */}
            <div className="max-w-3xl pr-4 mb-8 lg:mb-4">
              <p className="text-lg font-space text-neutral-900 mb-8">
                {clientReviews[activeIndex].review}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-full
                           bg-[#A981FF] border-2 border-[#5200FF]
                           shadow-[0_5.5px_0_0_#5200FF]
                           text-white text-sm font-medium font-space
                           leading-5 tracking-[0.01px]
                           hover:translate-y-[5.5px] hover:shadow-none
                           transition-all duration-200 ease-in-out"
              >
                {clientReviews[activeIndex].ctaText}
              </a>
            </div>

            {/* ▶ Tablet/Mobile stacked name & arrows */}
            <div className="lg:hidden mt-6 flex flex-col gap-4">
              <div>
                <h4 className="font-space text-lg font-bold text-neutral-900">
                  {clientReviews[activeIndex].name}
                </h4>
                <p className="font-space text-sm text-[#5200FF]">
                  {clientReviews[activeIndex].position}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="flex w-[47px] h-[31px] items-center justify-center
                             rounded-full bg-[#F3F4F6] text-black
                             shadow-[0_0_0_1px_#000] border-b-[3px] border-black
                             hover:translate-y-[3px] hover:border-b-0 hover:bg-[#FFF]
                             cursor-default transition-all duration-200 ease-in-out"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next review"
                  className="flex w-[47px] h-[31px] items-center justify-center
                             rounded-full bg-[#F3F4F6] text-black
                             shadow-[0_0_0_1px_#000] border-b-[3px] border-black
                             hover:translate-y-[3px] hover:border-b-0 hover:bg-[#FFF]
                             cursor-default transition-all duration-200 ease-in-out"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {clientReviews.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                idx === activeIndex ? "w-8 bg-[#5200FF]" : "w-2 bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;