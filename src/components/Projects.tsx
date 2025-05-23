import React from 'react';
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import Background from '@/assets/background1.svg';
import GrowingSpacesImg from "@/assets/growing-spaces-homepage.png";
import PomesoImg from "@/assets/pomeso-marketing-home.png";
import CreativeResortImg from "@/assets/creative-resort-homepage.png";
import EdtripperImg from "@/assets/et-home.png";
import AustraliaImg from "@/assets/1300australia-web_m0acjd.png";
import KeadHealthImg from "@/assets/keahealth-web_entn3b.png";
import KarisLifeImg from "@/assets/karislife-web_f14qs6.png";
import TTMFImg from "@/assets/ttmf-web_merovb.avif";
import FiducianImg from "@/assets/fiducian-web_j7i0ne.png";

// Project data
const projects = [
  { id: 1, title: "Growing Spaces",    image: GrowingSpacesImg, tags: ["ECOMMERCE"] },
  { id: 2, title: "Pomeso",             image: PomesoImg,       tags: ["DYNAMIC", "AI"] },
  { id: 3, title: "Creative Resort",    image: CreativeResortImg, tags: ["STATIC"] },
  { id: 4, title: "Edtripper",          image: EdtripperImg,    tags: ["DYNAMIC", "AI", "AUTOMATION"] },
  { id: 5, title: "1300 Australia",     image: AustraliaImg,    tags: ["STATIC", "DYNAMIC"] },
  { id: 6, title: "Kea Health",         image: KeadHealthImg,   tags: ["ECOMMERCE"] },
  { id: 7, title: "Karis Life",         image: KarisLifeImg,    tags: ["ECOMMERCE"] },
  { id: 8, title: "TTMF",               image: TTMFImg,         tags: ["DYNAMIC", "AI"] },
  { id: 9, title: "Fiducian",           image: FiducianImg,     tags: ["STATIC", "DYNAMIC"] },
];

const Projects: React.FC = () => {
  return (
    <section
      className="w-full py-16 sm:py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#5200FF] relative">
                <div className="absolute -inset-0.5 rounded-full bg-[#5200FF] opacity-30 animate-ping" />
              </div>
            </div>
            <p className="ml-3 text-sm font-medium text-[#5200FF] uppercase tracking-wider">
              WORK WE DID
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold text-neutral-900">
              Recent Projects
            </h2>

            <div className="max-w-md md:pt-4">
              <p className="text-neutral-900/80 mb-6">
                Here are things we built lately. Websites. Apps. Stores. AI stuff. They all work.
              </p>
              <div className="h-[46px]">
                <Link
                  to="/work"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-white shadow-[0px_0px_0px_2px_#000] border-b-[5.5px] border-black text-neutral-900 text-sm font-medium font-space leading-5 tracking-[0.01px] hover:translate-y-[5.5px] hover:border-b-0 transition-all duration-200 ease-in-out"
                >
                  See more projects
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Carousel */}
        <Carousel className="relative w-full pt-12" opts={{ align: "start", loop: true }}>
          {/* Arrow placed absolutely at top-right */}
          <CarouselNext
            className="
              absolute top-0 right-0 mt-2 mr-2
              flex w-[47px] h-[31px] items-center justify-center rounded-full bg-[#F3F4F6] shadow-[0_0_0_1px_#000]
              border border-black border-b-[3px]
              transition-all duration-300 ease-in-out
              hover:translate-y[0_5px] hover:border-b-0 hover:bg-[#FFF] cursor-default
            "
          />

          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="mb-8">
                  <Card
                    className="
                      bg-white rounded-[16px]
                      border-2 border-black border-b-[5.5px]
                      p-0 shadow-lg overflow-hidden
                      hover:translate-y-[5.5px]
                      hover:border-b-[2px]
                      hover:shadow-none
                      transition-all duration-300 ease-in-out
                      cursor-pointer
                    "
                  >
                    <CardContent className="p-0">
                      <div className="border-b-2 border-black">
                        <AspectRatio ratio={16 / 10}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full"
                          />
                        </AspectRatio>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <Badge
                              key={i}
                              variant={
                                tag === "AI"
                                  ? "default"
                                  : tag === "STATIC"
                                  ? "secondary"
                                  : "outline"
                              }
                              className={`
                                pointer-events-none
                                font-display shrink-0 rounded-lg border-2 border-black
                                px-2 py-0.5 text-xs font-medium uppercase lg:text-sm
                                ${tag === "ECOMMERCE" ? "bg-[#BEE9EF]" : ""}
                                ${tag === "DYNAMIC"    ? "bg-[#f9B5B5]" : ""}
                                ${tag === "AI"         ? "bg-[#EEBEEF] text-black" : ""}
                                ${tag === "STATIC"     ? "bg-[#ffe785]" : ""}
                                ${tag === "AUTOMATION" ? "bg-[#EEBEEF] text-black" : ""}
                              `}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
