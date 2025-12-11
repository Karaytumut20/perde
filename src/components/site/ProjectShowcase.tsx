"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Spotify HQ",
    location: "Stockholm",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop",
    category: "Office"
  },
  {
    id: 2,
    title: "National Gallery",
    location: "Melbourne",
    image: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=1470&auto=format&fit=crop",
    category: "Culture"
  },
  {
    id: 3,
    title: "Auckland Airport",
    location: "New Zealand",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1631&auto=format&fit=crop",
    category: "Transport"
  },
  {
    id: 4,
    title: "Unilever House",
    location: "Toronto",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop",
    category: "Commercial"
  }
];

export default function ProjectShowcase() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <section ref={targetRef} className="py-32 bg-autex-offwhite text-autex-black overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
            <span className="text-xs font-bold tracking-widest uppercase text-autex-gray mb-2 block">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Global Projects
            </h2>
        </div>
        <Link href="/projects" className="hidden md:flex items-center gap-2 font-bold text-xs uppercase tracking-widest border-b border-autex-black pb-1 hover:opacity-60 transition-opacity">
            View All Projects <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Slider Container */}
      <div className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x snap-mandatory scrollbar-hide">
        {projects.map((project) => (
            <motion.div 
                key={project.id}
                className="min-w-[85vw] md:min-w-[600px] h-[500px] relative group cursor-pointer snap-center"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs font-bold tracking-widest uppercase text-autex-sage mb-2 block">{project.category}</span>
                    <h3 className="text-4xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm font-medium opacity-80">{project.location}</p>
                </div>
            </motion.div>
        ))}
      </div>
    </section>
  );
}
