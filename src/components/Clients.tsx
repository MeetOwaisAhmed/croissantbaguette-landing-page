
import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '@/assets/logo1.svg';
import logo2 from '@/assets/logo2.svg';
import logo3 from '@/assets/logo3.svg';
import logo4 from '@/assets/logo4.svg';
import logo5 from '@/assets/logo5.svg';
import logo6 from '@/assets/logo6.svg';
import logo7 from '@/assets/logo7.svg';
import logo8 from '@/assets/logo8.svg';
import logo9 from '@/assets/logo9.svg';
import logo10 from '@/assets/logo10.svg';
import logo11 from '@/assets/logo11.svg';
import logo12 from '@/assets/logo12.svg';
import logo13 from '@/assets/logo13.svg';
import logo14 from '@/assets/logo14.svg';

const Clients = () => {
  return (
    <section className="w-full py-16 sm:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left column */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-2 h-2 rounded-full bg-[#5200FF] mr-2 relative">
                <div className="absolute -inset-0.5 rounded-full bg-[#5200FF] opacity-30 animate-ping"></div>
              </div>
              <span className="text-[#5200FF] font-space text-[14px] font-medium tracking-[0.7px] uppercase">
                CLIENTS
              </span>
            </div>
            
            <h2 className="font-space text-[40px] md:text-[48px] font-medium leading-[1.2] tracking-tight text-black mb-6">
              We've Built Stuff<br className="hidden sm:block" /> 
              For These Industries
            </h2>
          </div>
          
          {/* Right column */}
          <div className="flex flex-col justify-center">
            <p className="text-lg font-space text-neutral-900 mb-8">
              Energy. Education. Finance. Healthcare. We do websites and apps for all of them.
            </p>
            
            <div className="h-[46px]"> {/* Fixed height container for button */}
              <Link 
                to="/work" 
                className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-white shadow-[0px_0px_0px_2px_#000] border-b-[5.5px] border-black text-neutral-900 text-sm font-medium font-space leading-5 tracking-[0.01px] hover:translate-y-[5.5px] hover:border-b-0 transition-all duration-200 ease-in-out"
              >
                Proof We're Good
              </Link>
            </div>
          </div>
        </div>
      </div>
        
      {/* Logo marquee section - Full width with negative margin to cover the entire viewport width */}
      <div className="mt-12 w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
        {/* First logo row - Right to Left */}
        <div className="logo-container mb-8">
          <div className="logo-scroll flex items-center gap-16 animate-marquee-rtl"> {/* Increased gap from 12 to 16 */}
            {/* Uploaded logos for first row */}
            <img src={logo1} 
              alt="1300 Australia" className="h-10 w-auto flex-shrink-0" />
            <img src={logo2} 
              alt="beamible" className="h-10 w-auto flex-shrink-0" />
            <img src={logo3} 
              alt="Studio Kate" className="h-10 w-auto flex-shrink-0" />
            <img src={logo4} 
              alt="edTripper" className="h-10 w-auto flex-shrink-0" />
            <img src={logo5}
              alt="KarisLife" className="h-10 w-auto flex-shrink-0" />
            <img src={logo6}
              alt="Fiducian" className="h-10 w-auto flex-shrink-0" />
            <img src={logo7}
              alt="The Trademark Factory" className="h-10 w-auto flex-shrink-0" />
            <img src={logo8} 
              alt="Wingboy" className="h-10 w-auto flex-shrink-0" />
            
            {/* Duplicate set for the infinite scroll effect */}
            <img src={logo1} 
              alt="1300 Australia" className="h-10 w-auto flex-shrink-0" />
            <img src={logo2} 
              alt="beamible" className="h-10 w-auto flex-shrink-0" />
            <img src={logo3} 
              alt="Studio Kate" className="h-10 w-auto flex-shrink-0" />
            <img src={logo4} 
              alt="edTripper" className="h-10 w-auto flex-shrink-0" />
            <img src={logo5}
              alt="KarisLife" className="h-10 w-auto flex-shrink-0" />
            <img src={logo6}
              alt="Fiducian" className="h-10 w-auto flex-shrink-0" />
            <img src={logo7}
              alt="The Trademark Factory" className="h-10 w-auto flex-shrink-0" />
            <img src={logo8} 
              alt="Wingboy" className="h-10 w-auto flex-shrink-0" />
              
              {/* Duplicate set for the infinite scroll effect */}
            <img src={logo1} 
              alt="1300 Australia" className="h-10 w-auto flex-shrink-0" />
            <img src={logo2} 
              alt="beamible" className="h-10 w-auto flex-shrink-0" />
            <img src={logo3} 
              alt="Studio Kate" className="h-10 w-auto flex-shrink-0" />
            <img src={logo4} 
              alt="edTripper" className="h-10 w-auto flex-shrink-0" />
            <img src={logo5}
              alt="KarisLife" className="h-10 w-auto flex-shrink-0" />
            <img src={logo6}
              alt="Fiducian" className="h-10 w-auto flex-shrink-0" />
            <img src={logo7}
              alt="The Trademark Factory" className="h-10 w-auto flex-shrink-0" />
            <img src={logo8} 
              alt="Wingboy" className="h-10 w-auto flex-shrink-0" />
          </div>
        </div>
        
        {/* Second logo row - Left to Right */}
        <div className="logo-container">
          <div className="logo-scroll flex items-center gap-16 animate-marquee-ltr"> {/* Increased gap from 12 to 16 */}
            <img src={logo9} 
              alt="Beige" className="h-10 w-auto flex-shrink-0" />
            <img src={logo10} 
              alt="SES" className="h-10 w-auto flex-shrink-0" />
            <img src={logo11}
              alt="KEA Health" className="h-10 w-auto flex-shrink-0" />
            <img src={logo12} 
              alt="GMR" className="h-10 w-auto flex-shrink-0" />
            <img src={logo13}
              alt="TSD" className="h-10 w-auto flex-shrink-0" />
            <img src={logo14}
              alt="Maoneng" className="h-10 w-auto flex-shrink-0" />
            
            {/* Duplicate set for the infinite scroll effect */}
            <img src={logo9} 
              alt="Beige" className="h-10 w-auto flex-shrink-0" />
            <img src={logo10} 
              alt="SES" className="h-10 w-auto flex-shrink-0" />
            <img src={logo11}
              alt="KEA Health" className="h-10 w-auto flex-shrink-0" />
            <img src={logo12} 
              alt="GMR" className="h-10 w-auto flex-shrink-0" />
            <img src={logo13}
              alt="TSD" className="h-10 w-auto flex-shrink-0" />
            <img src={logo14}
              alt="Maoneng" className="h-10 w-auto flex-shrink-0" />
              
              {/* Duplicate set for the infinite scroll effect */}
              <img src={logo9} 
              alt="Beige" className="h-10 w-auto flex-shrink-0" />
            <img src={logo10} 
              alt="SES" className="h-10 w-auto flex-shrink-0" />
            <img src={logo11}
              alt="KEA Health" className="h-10 w-auto flex-shrink-0" />
            <img src={logo12} 
              alt="GMR" className="h-10 w-auto flex-shrink-0" />
            <img src={logo13}
              alt="TSD" className="h-10 w-auto flex-shrink-0" />
            <img src={logo14}
              alt="Maoneng" className="h-10 w-auto flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
