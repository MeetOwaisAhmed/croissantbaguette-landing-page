import React from 'react';
import { Link } from 'react-router-dom';
import CalculatorImage from '@/assets/pricing-calculator.svg';

const Pricing: React.FC = () => (
  <section
    className="
      relative w-full py-16 sm:py-20 px-4 md:px-10 lg:px-20 overflow-hidden
      bg-[url('/src/assets/Gradient+Blur.svg')] bg-no-repeat bg-center
      bg-[length:750px_750px]
    "
  >
    {/* Content */}
    <div
      className="
        relative z-10 max-w-[1400px] mx-auto
        grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16
        items-start lg:items-center
      "
    >
      {/* Left: calculator mockup */}
      <div className="flex justify-center lg:justify-start">
        <div className="bg-white rounded-[16px] border-2 border-black border-b-[5.5px] shadow-lg overflow-hidden max-w-[500px]">
          <img
            src={CalculatorImage}
            alt="Pricing Calculator"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Right: copy + CTA */}
      <div>
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 rounded-full bg-[#5200FF] mr-2 relative">
            <div className="absolute -inset-0.5 rounded-full bg-[#5200FF] opacity-30 animate-ping" />
          </div>
          <span className="text-[#5200FF] font-space text-[14px] font-medium uppercase tracking-[0.7px]">
            THE COST
          </span>
        </div>

        <h2 className="font-space text-[40px] md:text-[48px] font-medium leading-[1.2] tracking-tight text-black mb-6">
          Pricing calculator
        </h2>

        <p className="text-lg font-space text-neutral-900 mb-8 max-w-lg">
          This tells you what it costs. No surprises. No hidden fees. Enter details. Get price.
        </p>

        <Link
          to="/pricing"
          className="
            inline-flex items-center justify-center px-6 py-3 rounded-full
            bg-white border-2 border-[#000] shadow-[0_5.5px_0_0_#000]
            text-neutral-900 text-sm font-medium font-space leading-5 tracking-[0.01px] 
            hover:translate-y-[5.5px] hover:shadow-none  transition-all duration-200 ease-in-out
          "
        >
          Calculate Project Cost
        </Link>
      </div>
    </div>
  </section>
);

export default Pricing;
