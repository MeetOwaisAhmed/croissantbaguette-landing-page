import React from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import Johnny from '@/assets/johnny.jpg';
import Alex from '@/assets/alex.jpg';
import Joris from '@/assets/joris.jpg';

const Team: React.FC = () => {
  const members = [
    {
      img: Johnny,
      name: 'Johnny Timbs',
      title: 'OPERATION DIRECTOR',
      bio: '20 years running businesses. Gets things done. Makes operations work.',
    },
    {
      img: Alex,
      name: 'Alexander Luttringer',
      title: 'TECHNICAL DIRECTOR',
      bio: 'Knows code. Solves problems. Builds systems that last.',
    },
    {
      img: Joris,
      name: 'Joris Cuesta',
      title: 'STRATEGY',
      bio: 'Knows business. Plans ahead. Makes sure your project makes sense.',
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 md:px-10 lg:px-20 overflow-hidden text-white">
      {/* Black backdrop panel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full lg:w-2/3 h-full rounded-3xl bg-black z-0">
        <img
          src="https://flagcdn.com/au.svg"
          alt="Australia"
          className="absolute top-20 left-40 w-20 h-auto -rotate-45 drop-shadow-lg"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-[#9585FF] mr-2 relative">
              <div className="absolute -inset-0.5 rounded-full bg-[#9585FF] opacity-80 animate-ping" />
            </div>
            <span className="text-[#9585FF] font-space text-[14px] font-medium tracking-[0.7px] uppercase">
              THE PEOPLE
            </span>
          </div>
          <h2 className="font-space text-[40px] md:text-[48px] font-medium leading-[1.2] tracking-tight text-white mb-6">
            Our team
          </h2>
          <p className="text-lg font-space text-white/90 mb-12 max-w-2xl mx-auto">
            Everyone here has at least 20 years experience. All work done in Australia.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((m) => (
            <div
              key={m.name}
              className="relative mt-12 bg-white rounded-[14px] border-2 border-black border-b-[8px] p-6 text-black"
            >
              {/* Avatar with press-in hover */}
              <div className="absolute -top-12 left-6">
                <div className=" w-[96px] h-[96px] flex items-center justify-center rounded-full bg-white 
                                 border-2 border-black  shadow-[0_5.5px_0_0_#000] overflow-hidden
                                 hover:translate-y-[6px] hover:border-b-[#000] hover:translate-y-[5.5px] hover:shadow-none transition-all duration-300 ease-in-out 
                          ">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={m.img} alt={m.name} />
                  </Avatar>
                </div>
              </div>
              {/* Name / Title / Bio */}
              <div className="pt-12">
                <h3 className="font-space text-xl font-bold mb-1">{m.name}</h3>
                <p className="font-space text-sm font-medium uppercase tracking-wider text-gray-600 mb-4">
                  {m.title}
                </p>
                <p className="font-space text-base text-gray-800">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;