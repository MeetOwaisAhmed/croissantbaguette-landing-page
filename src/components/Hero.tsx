import React from 'react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/BG.svg';
import { Link as LinkIcon } from "lucide-react";
import heroImg from "@/assets/1300australia-web_m0acjd.png";
import Edlogo from "@/assets/et-favicon.png";
import Ttmflogo from "@/assets/ttmf-icon.png";
import Kealogo from "@/assets/kea-favicon.png";

const Hero = () => {
  return (
    <section className="relative w-full py-20 px-4 md:px-10 lg:px-20 overflow-hidden rounded-[20px]">
      {/* Background div only visible on desktop */}
      <div 
        className="absolute inset-0 z-0 hidden lg:block" 
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="max-w-[1400px] mx-auto flex flex-col relative z-10">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-10">
          {/* Left Column for desktop */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-2 h-2 rounded-full bg-[#5200FF] mr-2 relative">
                <div className="absolute -inset-1 rounded-full bg-[#5200FF] opacity-30 animate-ping"></div>
              </div>
              <span className="text-[#5200FF] font-space text-[14px] font-medium tracking-[0.7px] uppercase">
                Croissant &amp; Baguette
              </span>
            </div>
            
            <h1 className="font-space text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-[1.25] tracking-tight text-black mb-10">
              We Build Websites<br className="hidden sm:block" /> 
              and Apps. They Work<br className="hidden sm:block" />
              Well.
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link 
                to="/services" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-white border-2 border-black border-b-[5.5px] shadow-[0_5.5px_0_0_#000] text-neutral-900 text-sm font-medium font-space transition-all duration-200 ease-in-out hover:translate-y-[5.5px] hover:shadow-none"
              >
                What we do
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#A981FF] border-2 border-[#5200FF] border-b-[5.5px] shadow-[0_5.5px_0_0_#5200FF] text-white text-sm font-medium font-space transition-all duration-200 ease-in-out hover:translate-y-[5.5px] hover:shadow-none"
              >
                Talk to us
              </Link>
            </div>
            
            <p className="text-black font-space text-base mb-8">
              🦘 Made in Australia. By us. From scratch.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex relative w-[170px] h-[60px]">
                {/* Logos section */}
                <Link to="https://edabit.com/" className="w-[52px] h-[52px] absolute left-0 top-[4px] rounded-full bg-white shadow-[0px_0px_0px_1px_#000] border-b-[2px] border-black flex items-center justify-center z-10 hover:translate-y-[2px] hover:border-b-0 transition-all duration-200 ease-in-out">
                  <img src={Edlogo} alt="Edabit logo" className="w-8 h-8 object-contain" />
                </Link>
                
                <Link to="https://www.timesoftablesmathfacts.com.au/" className="w-[52px] h-[52px] absolute left-[40px] top-[4px] rounded-full bg-white shadow-[0px_0px_0px_1px_#000] border-b-[2px] border-black flex items-center justify-center z-20 hover:translate-y-[2px] hover:border-b-0 transition-all duration-200 ease-in-out">
                  <img src={Ttmflogo} alt="TTMF logo" className="w-8 h-8 object-contain" />
                </Link>
                
                <Link to="https://www.kea.ai/" className="w-[52px] h-[52px] absolute left-[80px] top-[4px] rounded-full bg-white shadow-[0px_0px_0px_1px_#000] border-b-[2px] border-black flex items-center justify-center z-30 hover:translate-y-[2px] hover:border-b-0 transition-all duration-200 ease-in-out">
                  <img src={Kealogo} alt="Kea logo" className="w-8 h-8 object-contain" />
                </Link>
              </div>
              
              <div className="mr-10 -ml-8 sm:ml-0 md:-ml-8">
                <span className="block text-[30px] font-space font-medium leading-[36px]">90<span className="text-[#5200FF]">+</span></span>
                <p className="text-[#434447] text-base">people paid us. They are happy.</p>
              </div>
            </div>
          </div>
          
          {/* Right Column for desktop */}
          <div className="flex flex-col">
            {/* Project title header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[24px] sm:text-[30px] font-space font-medium leading-[36px] text-black">
                Something We Made
              </h2>
              <Link to="https://1300australia.com.au" className="flex items-center group">
                <div className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center mr-2 shadow-[0px_0px_0px_1px_#000] border-b-[2px] border-black hover:translate-y-[2px] hover:border-b-0 transition-all duration-200 ease-in-out group-hover:translate-y-[2px] group-hover:border-b-0">
                  <LinkIcon size={15} className="text-black" />
                </div>
                <span className="text-xs sm:text-sm font-space font-medium underline decoration-2 underline-offset-2 transition-colors duration-300">1300 Australia</span>
              </Link>
            </div>
            
            <div className="rounded-2xl overflow-hidden mb-6 border-[2px] border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,0.8)]">
              <img 
                src={heroImg} 
                alt="1300 Australia Website" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border-[2px] border-black p-4 bg-white flex items-center justify-between shadow-[0px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M3.9995 14.7799C3.81027 14.7806 3.62474 14.7275 3.46446 14.6269C3.30418 14.5263 3.17574 14.3823 3.09405 14.2116C3.01237 14.0409 2.9808 13.8505 3.003 13.6626C3.02521 13.4747 3.10028 13.2969 3.2195 13.1499L13.1195 2.94995C13.1938 2.86423 13.295 2.8063 13.4065 2.78568C13.518 2.76506 13.6332 2.78296 13.7332 2.83645C13.8332 2.88994 13.9121 2.97584 13.9568 3.08006C14.0016 3.18427 14.0096 3.3006 13.9795 3.40995L12.0595 9.42995C12.0029 9.58147 11.9839 9.74447 12.0041 9.90495C12.0243 10.0654 12.0832 10.2186 12.1756 10.3514C12.268 10.4841 12.3913 10.5925 12.5348 10.6671C12.6783 10.7418 12.8377 10.7805 12.9995 10.7799H19.9995C20.1887 10.7793 20.3743 10.8324 20.5345 10.933C20.6948 11.0336 20.8233 11.1776 20.905 11.3483C20.9866 11.519 21.0182 11.7094 20.996 11.8973C20.9738 12.0852 20.8987 12.263 20.7795 12.4099L10.8795 22.6099C10.8052 22.6957 10.704 22.7536 10.5925 22.7742C10.481 22.7948 10.3658 22.7769 10.2658 22.7234C10.1658 22.67 10.0869 22.5841 10.0422 22.4798C9.99742 22.3756 9.98943 22.2593 10.0195 22.1499L11.9395 16.1299C11.9961 15.9784 12.0151 15.8154 11.9949 15.6549C11.9747 15.4945 11.9158 15.3413 11.8234 15.2085C11.731 15.0758 11.6077 14.9674 11.4642 14.8928C11.3207 14.8181 11.1613 14.7794 10.9995 14.7799H3.9995Z" stroke="#5200FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-medium">Load Time</span>
                </div>
                <div>0.<span className="text-[#5200FF]">6s</span></div>
              </div>
              
              <div className="rounded-lg border-[2px] border-black p-4 bg-white flex items-center justify-between shadow-[0px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M12 14.7798L16 10.7798" stroke="#5200FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.34 19.7797C2.46222 18.2596 2.00007 16.5351 2 14.7797C1.99993 13.0243 2.46195 11.2998 3.33962 9.77952C4.21729 8.25926 5.47967 6.99683 6.99989 6.11911C8.52011 5.24138 10.2446 4.7793 12 4.7793C13.7554 4.7793 15.4799 5.24138 17.0001 6.11911C18.5203 6.99683 19.7827 8.25926 20.6604 9.77952C21.538 11.2998 22.0001 13.0243 22 14.7797C21.9999 16.5351 21.5378 18.2596 20.66 19.7797" stroke="#5200FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-medium">Performance Score</span>
                </div>
                <div>100<span className="text-[#5200FF]">%</span></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tablet and Mobile Layout */}
        <div className="flex flex-col lg:hidden">
          <div className="flex items-center mb-6">
            <div className="w-2 h-2 rounded-full bg-[#5200FF] mr-2 relative">
              <div className="absolute -inset-1 rounded-full bg-[#5200FF] opacity-30 animate-ping"></div>
            </div>
            <span className="text-[#5200FF] font-space text-[14px] font-medium tracking-[0.7px] uppercase">
              Croissant &amp; Baguette
            </span>
          </div>
          
          <h1 className="font-space text-[40px] md:text-[56px] font-medium leading-[1.25] tracking-tight text-black mb-10">
            We Build Websites and Apps. They Work Well.
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Link 
              to="/services" 
              className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-white border-2 border-black border-b-[5.5px] shadow-[0_5.5px_0_0_#000] text-neutral-900 text-sm font-medium font-space transition-all duration-200 ease-in-out hover:translate-y-[5.5px] hover:shadow-none"
            >
              What we do
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#A981FF] border-2 border-[#5200FF] border-b-[5.5px] shadow-[0_5.5px_0_0_#5200FF] text-white text-sm font-medium font-space transition-all duration-200 ease-in-out hover:translate-y-[5.5px] hover:shadow-none"
            >
              Talk to us
            </Link>
          </div>
          
          <p className="text-black font-space text-base mb-8">
            🦘 Made in Australia. By us. From scratch.
          </p>
          
          {/* Project showcase - directly below the text for tablet/mobile */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[24px] sm:text-[30px] font-space font-medium leading-[36px] text-black">
                Something We Made
              </h2>
              <Link to="https://1300australia.com.au" className="flex items-center group">
                <div className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center mr-2 shadow-[0px_0px_0px_1px_#000] border-b-[2px] border-black hover:translate-y-[2px] hover:border-b-0 transition-all duration-300 ease-in-out group-hover:translate-y-[2px] group-hover:border-b-0">
                  <LinkIcon size={15} className="text-black" />
                </div>
                <span className="text-xs sm:text-sm font-space font-medium underline decoration-2 underline-offset-2 transition-colors duration-300">1300 Australia</span>
              </Link>
            </div>
            
            <div className="rounded-2xl overflow-hidden mb-6 border-[2px] border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,0.8)]">
              <img 
                src={heroImg}
                alt="1300 Australia Website" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border-[2px] border-black p-4 bg-white flex items-center justify-between shadow-[0px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M3.9995 14.7799C3.81027 14.7806 3.62474 14.7275 3.46446 14.6269C3.30418 14.5263 3.17574 14.3823 3.09405 14.2116C3.01237 14.0409 2.9808 13.8505 3.003 13.6626C3.02521 13.4747 3.10028 13.2969 3.2195 13.1499L13.1195 2.94995C13.1938 2.86423 13.295 2.8063 13.4065 2.78568C13.518 2.76506 13.6332 2.78296 13.7332 2.83645C13.8332 2.88994 13.9121 2.97584 13.9568 3.08006C14.0016 3.18427 14.0096 3.3006 13.9795 3.40995L12.0595 9.42995C12.0029 9.58147 11.9839 9.74447 12.0041 9.90495C12.0243 10.0654 12.0832 10.2186 12.1756 10.3514C12.268 10.4841 12.3913 10.5925 12.5348 10.6671C12.6783 10.7418 12.8377 10.7805 12.9995 10.7799H19.9995C20.1887 10.7793 20.3743 10.8324 20.5345 10.933C20.6948 11.0336 20.8233 11.1776 20.905 11.3483C20.9866 11.519 21.0182 11.7094 20.996 11.8973C20.9738 12.0852 20.8987 12.263 20.7795 12.4099L10.8795 22.6099C10.8052 22.6957 10.704 22.7536 10.5925 22.7742C10.481 22.7948 10.3658 22.7769 10.2658 22.7234C10.1658 22.67 10.0869 22.5841 10.0422 22.4798C9.99742 22.3756 9.98943 22.2593 10.0195 22.1499L11.9395 16.1299C11.9961 15.9784 12.0151 15.8154 11.9949 15.6549C11.9747 15.4945 11.9158 15.3413 11.8234 15.2085C11.731 15.0758 11.6077 14.9674 11.4642 14.8928C11.3207 14.8181 11.1613 14.7794 10.9995 14.7799H3.9995Z" stroke="#5200FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-medium">Load Time</span>
                </div>
                <div>0.<span className="text-[#5200FF]">6s</span></div>
              </div>
              
              <div className="rounded-lg border-[2px] border-black p-4 bg-white flex items-center justify-between shadow-[0px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M12 14.7798L16 10.7798" stroke="#5200FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.34 19.7797C2.46222 18.2596 2.00007 16.5351 2 14.7797C1.99993 13.0243 2.46195 11.2998 3.33962 9.77952C4.21729 8.25926 5.47967 6.99683 6.99989 6.11911C8.52011 5.24138 10.2446 4.7793 12 4.7793C13.7554 4.7793 15.4799 5.24138 17.0001 6.11911C18.5203 6.99683 19.7827 8.25926 20.6604 9.77952C21.538 11.2998 22.0001 13.0243 22 14.7797C21.9999 16.5351 21.5378 18.2596 20.66 19.7797" stroke="#5200FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-medium">Performance Score</span>
                </div>
                <div>100<span className="text-[#5200FF]">%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
