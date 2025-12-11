"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const categories = [
  {
    id: 1,
    title: "Wall Solutions",
    description: "Acoustic treatments that define spaces.",
    image: "https://images.unsplash.com/photo-1505567745926-ba89000d255a?q=80&w=2071&auto=format&fit=crop",
    link: "/products/wall",
    large: true, // Büyük kutu
  },
  {
    id: 2,
    title: "Ceiling Systems",
    description: "Overhead performance.",
    image: "https://images.unsplash.com/photo-1541123437805-4713ca473974?q=80&w=2071&auto=format&fit=crop",
    link: "/products/ceiling",
    large: false,
  },
  {
    id: 3,
    title: "Privacy Screens",
    description: "Divide without disconnecting.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    link: "/products/screens",
    large: false,
  },
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-surface text-primary">
      <div className="container mx-auto px-6">
        
        {/* Başlık Alanı */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-xl">
              Engineered for <br />
              <span className="text-gray-400">visual & auditory</span> impact.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <Link 
              href="/products" 
              className="group flex items-center gap-2 text-sm font-medium border-b border-primary pb-1 hover:text-accent-terra hover:border-accent-terra transition-colors"
            >
              View all products
              <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        {/* Grid Alanı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {categories.map((cat, index) => (
            <FadeIn 
              key={cat.id} 
              delay={index * 0.1} 
              className={cat.large ? "md:col-span-2" : "md:col-span-1"}
            >
              <Link href={cat.link} className="group relative block w-full h-full overflow-hidden rounded-lg">
                
                {/* Resim */}
                <div className="absolute inset-0">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                </div>

                {/* İçerik */}
                <div className="absolute bottom-0 left-0 p-8 w-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 delay-100">
                    {cat.description}
                  </p>
                </div>

                {/* Ok İkonu */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white text-white hover:text-black">
                    <ArrowUpRight size={20} />
                </div>

              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
