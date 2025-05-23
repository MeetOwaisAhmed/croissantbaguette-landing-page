import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Background from '@/assets/Gradient+Blur.svg';
import StaticIcon from '@/assets/icon1.svg';
import HeadlessIcon from '@/assets/icon2.svg';
import DynamicIcon from '@/assets/icon3.svg';
import AiIcon from '@/assets/icon4.svg';

const Services = () => {
  return (
    <section className="w-full py-16 sm:py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Background gradient image */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 opacity-90">
        <img 
          src={Background}
          alt="Gradient background" 
          className="w-[90%] h-auto max-w-5xl object-cover"
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-[#5200FF] mr-2 relative">
              <div className="absolute -inset-0.5 rounded-full bg-[#5200FF] opacity-30 animate-ping"></div>
            </div>
            <span className="text-[#5200FF] font-space text-[14px] font-medium tracking-[0.7px] uppercase">
              WHAT WE DO
            </span>
          </div>
          
          <h2 className="font-space text-[40px] md:text-[48px] font-medium leading-[1.2] tracking-tight text-black mb-6">
            Services
          </h2>
          
          <p className="text-lg font-space text-neutral-900 mb-12 max-w-xl mx-auto">
            We build fast websites and apps. We use good technology. Nothing fancy.
          </p>
        </div>

        {/* Service cards - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1 - Static Websites */}
          <Card className="bg-white rounded-[16px] border-2 border-black border-b-[5.5px] p-6 relative z-10">
            <div className="mb-6">
            <div className="w-12 h-12 bg-[#FFFBEB] rounded-full flex items-center justify-center mb-6
              border border-black shadow-[0_1px_0_0_#000] border-b-[2px]
               hover:translate-y-[2px] hover:border-b-[1px] hover:shadow-none
              transition-all duration-300 ease-in-out">
                <img 
                  src={StaticIcon} 
                  alt="Static Websites Icon" 
                  className="w-6 h-6"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Static Websites</h3>
            <p className="text-neutral-900/80 mb-6">
              We make websites. For small shops and big companies. Hand-coded. Simple backend. No plugins to break. No hacking.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center mr-3 border border-black border-b-[2px] hover:translate-y-[1px] hover:border-b-0 transition-all duration-200 ease-in-out cursor-default">
                  <Check size={10} />
                </div>
                <span className="text-sm">Small sites. Big sites. Size doesn't matter.</span>
              </div>
              <div className="flex items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center mr-3 border border-black border-b-[2px] hover:translate-y-[1px] hover:border-b-0 transition-all duration-200 ease-in-out cursor-default">
                  <Check size={10} />
                </div>
                <span className="text-sm">Loads fast. Google finds it.</span>
              </div>
            </div>
          </Card>

          {/* Card 2 - Headless eCommerce */}
          <Card className="bg-white rounded-[16px] border-2 border-black border-b-[5.5px] p-6 relative z-10">
            <div className="mb-6">
              <div className="w-12 h-12 bg-[#EBF5FF] rounded-full flex items-center justify-center mb-6 
                border border-black shadow-[0_1px_0_0_#000] border-b-[2px] 
                hover:translate-y-[2px] hover:border-b-[1px] hover:shadow-none 
                transition-all duration-300 ease-in-out">
                <img 
                  src={HeadlessIcon} 
                  alt="Headless eCommerce Icon" 
                  className="w-6 h-6"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Headless eCommerce</h3>
            <p className="text-neutral-900/80 mb-6">
              We build stores that sell things. Backed by Shopify or whatever you use. Frontend by us. No bloat. No crashes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center mr-3 border border-black border-b-[2px] hover:translate-y-[1px] hover:border-b-0 transition-all duration-200 ease-in-out cursor-default">
                  <Check size={10} />
                </div>
                <span className="text-sm">You control how it looks.</span>
              </div>
              <div className="flex items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center mr-3 border border-black border-b-[2px] hover:translate-y-[1px] hover:border-b-0 transition-all duration-200 ease-in-out cursor-default">
                  <Check size={10} />
                </div>
                <span className="text-sm">It does what you need.</span>
              </div>
            </div>
          </Card>

          {/* Card 3 - Dynamic Web Apps */}
          <Card className="bg-white rounded-[16px] border-2 border-black border-b-[5.5px] p-6 relative z-10">
            <div className="mb-6">
              <div className="w-12 h-12 bg-[#FFEBEB] rounded-full flex items-center justify-center mb-6 
                border border-black shadow-[0_1px_0_0_#000] border-b-[2px] 
                hover:translate-y-[2px] hover:border-b-[1px] hover:shadow-none 
                transition-all duration-300 ease-in-out">
                <img 
                  src={DynamicIcon} 
                  alt="Dynamic Web Apps Icon" 
                  className="w-6 h-6"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Dynamic Web Apps</h3>
            <p className="text-neutral-900/80 mb-6">
              Apps that do things in real-time. User logins. Data handling. AI if needed.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center mr-3 border border-black border-b-[2px] hover:translate-y-[1px] hover:border-b-0 transition-all duration-200 ease-in-out cursor-default">
                  <Check size={10} />
                </div>
                <span className="text-sm">Simple dashboards to full systems. We don't care. We build it all.</span>
              </div>
              <div className="flex items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center mr-3 border border-black border-b-[2px] hover:translate-y-[1px] hover:border-b-0 transition-all duration-200 ease-in-out cursor-default">
                  <Check size={10} />
                </div>
                <span className="text-sm">If you can think it, we can code it.</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Large Card - AI & Automation */}
        <Card className="bg-white rounded-[16px] border-2 border-black border-b-[5.5px] p-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#EDEBFF] rounded-full flex items-center justify-center mb-6 
                  border border-black shadow-[0_1px_0_0_#000] border-b-[2px] 
                  hover:translate-y-[2px] hover:border-b-[1px] hover:shadow-none 
                  transition-all duration-300 ease-in-out">
                  <img 
                    src={AiIcon} 
                    alt="AI & Automation Icon" 
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">AI & Automation</h3>
              <p className="text-neutral-900/80 mb-6">
                Your business has unnecessary steps. We remove them. AI and automation make things faster. Tell us what you need. We build it.
              </p>
              <div className="space-y-6 mt-4">
                <div className="flex items-center">
                  <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center mr-3 border border-black border-b-[2px] hover:translate-y-[1px] hover:border-b-0 transition-all duration-200 ease-in-out cursor-default">
                    <Check size={10} />
                  </div>
                  <span className="text-sm">Uses your data. Does the work for you.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center mr-3 border border-black border-b-[2px] hover:translate-y-[1px] hover:border-b-0 transition-all duration-200 ease-in-out cursor-default">
                    <Check size={10} />
                  </div>
                  <span className="text-sm">From basic tasks to running the show. We don't judge.</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              {/* Empty div to maintain the grid structure but move check items to the first column */}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;
