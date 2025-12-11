"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 md:px-12",
        isScrolled 
          ? "bg-autex-offwhite/90 backdrop-blur-md py-4 border-b border-black/5" 
          : "bg-transparent py-8"
      )}
    >
      <div className="flex items-center justify-between w-full">
        
        {/* LOGO */}
        <Link href="/" className={cn("text-2xl font-extrabold tracking-tighter uppercase z-50 relative", textColor)}>
          Autex<span className="font-light opacity-80">Acoustics</span>
        </Link>

        {/* ORTA MENÜ (Masaüstü) */}
        <nav className={cn("hidden lg:flex items-center gap-12 text-xs font-bold uppercase tracking-widest", textColor)}>
          {["Products", "Solutions", "Projects", "Learn"].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* SAĞ İKONLAR */}
        <div className={cn("flex items-center gap-6", textColor)}>
          <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
            <Search size={18} />
            <span className="hidden xl:inline">Search</span>
          </button>
          
          <button className="flex flex-col gap-1.5 group p-2">
             <span className={cn("w-8 h-[2px] block transition-all group-hover:w-6", isScrolled ? "bg-black" : "bg-white")}></span>
             <span className={cn("w-8 h-[2px] block transition-all", isScrolled ? "bg-black" : "bg-white")}></span>
             <span className={cn("w-8 h-[2px] block transition-all group-hover:w-4 self-end", isScrolled ? "bg-black" : "bg-white")}></span>
          </button>
        </div>

      </div>
    </header>
  );
}
