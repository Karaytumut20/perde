import ProductGrid from "@/components/site/ProductGrid";
import ProjectShowcase from "@/components/site/ProjectShowcase";
import FadeIn from "@/components/animations/FadeIn";
import { ArrowRight, Play, Leaf, Recycle, Wind } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-autex-offwhite selection:bg-autex-sage selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-12">
        
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="https://videos.pexels.com/video-files/3205626/3205626-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Ana İçerik */}
        <div className="container mx-auto px-6 relative z-20 text-white w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-9">
              <FadeIn>
                <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase mb-6">
                  Redefining <br />
                  <span className="text-autex-sage">Silence.</span>
                </h1>
              </FadeIn>
            </div>
            <div className="lg:col-span-3 pb-4">
              <FadeIn delay={0.2}>
                <p className="text-lg font-medium leading-snug mb-8 opacity-90 border-l border-white/30 pl-4">
                  Beautiful acoustics for spaces where people live, work, and learn.
                </p>
                <div className="flex gap-4">
                    <button className="h-14 w-14 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                        <Play fill="currentColor" size={20} className="ml-1"/>
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-white/30 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Explore Range
                    </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <div className="bg-autex-black py-4 overflow-hidden whitespace-nowrap border-b border-white/10">
        <div className="animate-marquee inline-block text-white/20 text-9xl font-bold uppercase tracking-tighter">
          Carbon Neutral • Sustainable Design • Acoustic Performance • 
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <ProductGrid />

      {/* --- SUSTAINABILITY SECTION --- */}
      <section className="py-32 bg-autex-black text-white relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div>
                  <FadeIn>
                    <span className="text-autex-sage tracking-widest uppercase text-xs font-bold mb-6 block">Our Commitment</span>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                       Planet <br />
                       <span className="text-autex-gray">First.</span>
                    </h2>
                    <p className="text-gray-400 text-xl leading-relaxed mb-12 font-light">
                       Every product we make is carbon neutral. We don’t just offset; we reduce, recycle, and rethink everything.
                    </p>
                    <Link href="/sustainability" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-autex-sage hover:border-autex-sage transition-all text-sm font-bold uppercase tracking-widest">
                       Read Impact Report <ArrowRight size={16} />
                    </Link>
                  </FadeIn>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Recycle, val: "60%", label: "Recycled Content", color: "text-autex-sage" },
                    { icon: Leaf, val: "Zero", label: "Carbon Footprint", color: "text-autex-terra" },
                    { icon: Wind, val: "Low", label: "VOC Emissions", color: "text-blue-300" }
                  ].map((stat, i) => (
                    <FadeIn key={i} delay={0.2 + (i * 0.1)} className={`bg-white/5 p-8 aspect-square flex flex-col justify-between group hover:bg-white/10 transition-colors ${i === 1 ? 'mt-12' : i === 2 ? '-mt-12' : ''}`}>
                        <stat.icon size={32} className={stat.color} />
                        <div>
                            <span className="block text-4xl font-bold mb-2">{stat.val}</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{stat.label}</span>
                        </div>
                    </FadeIn>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- PROJECT SHOWCASE --- */}
      <ProjectShowcase />

    </div>
  );
}
