"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "text-autex-black" : "text-white";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm py-5 border-b border-black/5" 
          : "bg-transparent py-8 border-b border-white/10"
      )}
    >
      <div className="flex items-center justify-between w-full max-w-[1920px] mx-auto">
        
        {/* LOGO (SVG) - Marka Kimliği */}
        <Link href="/" className="z-50 relative group">
          {/* Autex Acoustics benzeri temiz bir tipografik logo SVG'si */}
          <svg width="160" height="24" viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("transition-colors duration-300 h-6 w-auto", textColor)}>
            <path d="M9.8 0L0 24H5.2L7.2 18.5H16.8L18.8 24H24L14.2 0H9.8ZM8.8 14.5L12 5.5L15.2 14.5H8.8Z" fill="currentColor"/>
            <path d="M38 15.5C38 19 36 20.5 33 20.5C30 20.5 28 19 28 15.5V0H23V16C23 21.5 26.5 24.5 30.5 24.5C34.5 24.5 38 21.5 38 16V0H33V15.5Z" fill="currentColor"/>
            <path d="M52 4.5H45V24H40V4.5H33V0H52V4.5Z" fill="currentColor"/>
            <path d="M66 4.5H58V10H65V14.5H58V19.5H66V24H53V0H66V4.5Z" fill="currentColor"/>
            <path d="M78 0L72.5 9L67 0H61.5L69.5 12L61.5 24H67L72.5 15L78 24H83.5L75.5 12L83.5 0H78Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M100 24V19H101V24H100ZM100 17V0H101V17H100Z" fill="currentColor"/>
            <path d="M112 18.5C112 20.5 113.5 21 115 21C116.5 21 118 20 118 19C118 17.5 116.5 17 115 16.5C111 15.5 108.5 14 108.5 10C108.5 6 111.5 4 115 4C118.5 4 121.5 6 121.5 9.5H117.5C117.5 8 116.5 7.5 115 7.5C113.5 7.5 112.5 8 112.5 9C112.5 10 113.5 10.5 115.5 11C119.5 12 122 13.5 122 17.5C122 21.5 119 23.5 115 23.5C111 23.5 108 21.5 108 18.5H112Z" fill="currentColor"/>
          </svg>
        </Link>

        {/* MASAÜSTÜ MENÜ - Daha küçük ve "bold" */}
        <nav className={cn("hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300", textColor)}>
          {["Products", "Solutions", "Projects", "Sustainability", "Learn"].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="relative group py-4 hover:text-autex-sage transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* SAĞ TARAF - Arama ve Hamburger */}
        <div className={cn("flex items-center gap-8", textColor)}>
          <button className="hidden md:flex items-center gap-2 group hover:opacity-70 transition-opacity">
            <Search size={18} strokeWidth={2.5} />
            <span className="hidden xl:inline text-[11px] font-bold uppercase tracking-widest">Search</span>
          </button>
          
          <button className="flex flex-col justify-center gap-1.5 w-8 h-8 group cursor-pointer">
             <span className={cn("w-full h-[2px] block transition-all group-hover:w-3/4 self-end bg-current")}></span>
             <span className={cn("w-full h-[2px] block transition-all bg-current")}></span>
             <span className={cn("w-3/4 h-[2px] block transition-all group-hover:w-full self-end bg-current")}></span>
          </button>
        </div>

      </div>
    </header>
  );
}