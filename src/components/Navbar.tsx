
import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-10 lg:px-20 w-full">
      <div className="flex items-center gap-6">
        <Link to="/" className="font-space text-neutral-900 text-[32px] font-medium leading-10 tracking-[-0.69px]">
          C&B.
        </Link>
        
        {/* Divider Line - Only visible on larger screens */}
        <svg width="2" height="28" viewBox="0 0 2 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block">
          <path d="M1 0V28" stroke="#050505"/>
        </svg>
        
        {/* Navigation Links - Only visible on larger screens */}
        <div className="hidden lg:flex items-center gap-6">
          <Link 
            to="/services" 
            className="font-space text-neutral-900 text-base font-medium leading-[26px] tracking-[-0.029px]"
          >
            Services
          </Link>
          <Link 
            to="/work" 
            className="font-space text-neutral-900 text-base font-medium leading-[26px] tracking-[-0.029px]"
          >
            Work
          </Link>
        </div>
      </div>
      
      {/* Desktop Buttons - Only visible on larger screens */}
      <div className="hidden lg:flex items-center gap-4">
        <Link 
          to="/pricing" 
          className="inline-flex items-center px-5 py-2 rounded-full bg-white border-2 border-black border-b-[5.5px] shadow-[0_5.5px_0_0_#000] text-neutral-900 text-xs font-medium font-space transition-all duration-200 ease-in-out hover:translate-y-[5.5px] hover:shadow-none"
        >
          Pricing Calculator
        </Link>
        <Link 
          to="/contact" 
          className="inline-flex items-center px-5 py-2 rounded-full bg-[#A981FF] border-2 border-[#5200FF] border-b-[5.5px] shadow-[0_5.5px_0_0_#5200FF] text-white text-sm font-medium font-space transition-all duration-200 ease-in-out hover:translate-y-[5.5px] hover:shadow-none"
        >
          Get In Touch
        </Link>
      </div>
      
      {/* Mobile/Tablet Menu Button - Only visible on smaller screens */}
      <div className="lg:hidden relative">
        <Sheet>
          <SheetTrigger asChild>
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-900 shadow-[0_5.5px_0_0_#000] transition-all duration-200 ease-in-out hover:translate-y-[3px] hover:shadow-none cursor-default"
              aria-label="Open menu"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H18M0 6H18M0 11H18" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent 
            side="top" 
            className="w-[250px] p-6 mt-14 rounded-xl right-0 left-auto mx-4 absolute border border-gray-200"
            hideCloseButton={true}
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-end">
                <SheetClose className="rounded-full p-2 hover:bg-gray-100">
                  <X className="h-6 w-6" />
                </SheetClose>
              </div>
              
              <div className="flex flex-col gap-4">
                <Link 
                  to="/services" 
                  className="font-space text-neutral-900 text-lg font-medium py-2"
                >
                  Services
                </Link>
                <Link 
                  to="/work" 
                  className="font-space text-neutral-900 text-lg font-medium py-2"
                >
                  Work
                </Link>
              </div>
              
              <div className="flex flex-col gap-4 mt-4">
                <Link 
                  to="/pricing" 
                  className="inline-flex justify-center items-center px-5 py-2 rounded-full bg-white border-2 border-black border-b-[3px] shadow-[0_2.5px_0_0_#000] text-neutral-900 text-sm font-medium font-space transition-all duration-200 ease-in-out hover:translate-y-[3px] hover:shadow-none"
                >
                  Pricing Calculator
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex justify-center items-center px-5 py-2 rounded-full bg-[#A981FF] border-2 border-[#5200FF] border-b-[3px] shadow-[0_2.5px_0_0_#5200FF] text-white text-sm font-medium font-space transition-all duration-200 ease-in-out hover:translate-y-[3px] hover:shadow-none"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
