import ProductGrid from "@/components/site/ProductGrid";
import ProjectShowcase from "@/components/site/ProjectShowcase";
import FadeIn from "@/components/animations/FadeIn";
import { ArrowRight, Play, Leaf, Recycle, Wind } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-autex-offwhite">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden bg-gray-900">
        
        {/* Video Arka Plan */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-80 scale-105"
            // Video yüklenmezse diye poster ekliyoruz (Autex style bir görsel)
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
          >
            {/* Daha yavaş, sakin ve kaliteli bir mimari video */}
            <source src="https://videos.pexels.com/video-files/3205626/3205626-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          {/* Gradyan Karartma: Yazıların okunması için şart */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        </div>

        {/* İçerik */}
        <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col justify-end pb-16 md:pb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            
            {/* Sol: Ana Başlık - Clamp ile orantılı hale getirildi */}
            <div className="flex-1">
              <FadeIn>
                <h1 className="text-white font-black tracking-tighter leading-[0.85] uppercase mb-6" style={{ fontSize: 'clamp(4rem, 11vw, 10rem)' }}>
                  Redefining <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-autex-sage to-white">Silence.</span>
                </h1>
              </FadeIn>
            </div>

            {/* Sağ: Açıklama ve Butonlar */}
            <div className="lg:w-1/3 text-white pb-2">
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-10 border-l-2 border-autex-sage pl-6 opacity-90 max-w-md">
                  Innovative acoustic solutions for the spaces where we live, work, and learn.
                </p>
                <div className="flex items-center gap-0">
                    <button className="h-14 px-10 bg-white text-autex-black text-xs font-bold uppercase tracking-widest hover:bg-autex-sage hover:text-white transition-colors flex items-center gap-3">
                        Explore Range
                        <ArrowRight size={16} />
                    </button>
                    <button className="h-14 w-14 border-y border-r border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors bg-white/5 backdrop-blur-sm">
                        <Play size={18} fill="currentColor" />
                    </button>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* --- MARQUEE (Kayan Yazı) - Daha ince ve zarif --- */}
      <div className="bg-autex-black py-5 border-b border-white/10 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16 text-autex-gray/40 text-4xl md:text-6xl font-black uppercase tracking-tighter select-none">
          <span>Carbon Neutral</span> • <span>Sustainable Design</span> • <span>Acoustic Performance</span> • <span>Made in NZ</span> •
          <span>Carbon Neutral</span> • <span>Sustainable Design</span> • <span>Acoustic Performance</span> • <span>Made in NZ</span> •
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <ProductGrid />

      {/* --- SUSTAINABILITY SECTION --- */}
      <section className="py-32 bg-autex-black text-white relative border-t border-white/10">
         <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
               <div className="space-y-10 sticky top-32">
                  <FadeIn>
                    <span className="text-autex-sage tracking-widest uppercase text-xs font-bold mb-6 block">Our Responsibility</span>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                       Planet <br />
                       <span className="text-autex-gray">First.</span>
                    </h2>
                    <p className="text-gray-400 text-xl leading-relaxed font-light border-l border-white/10 pl-6 max-w-lg">
                       We are a carbon neutral organization. We don't just offset; we reduce, recycle, and rethink everything we do.
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <Link href="/sustainability" className="inline-flex items-center gap-3 text-white text-sm font-bold uppercase tracking-widest hover:text-autex-sage transition-colors group">
                       View Impact Report 
                       <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all group-hover:bg-autex-sage"></span>
                    </Link>
                  </FadeIn>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                  {[
                    { icon: Recycle, val: "60%", label: "Recycled Content", color: "text-white" },
                    { icon: Leaf, val: "0%", label: "Carbon Footprint", color: "text-autex-sage" },
                    { icon: Wind, val: "Low", label: "VOC Emissions", color: "text-white" },
                    { icon: ArrowRight, val: "20+", label: "Global Locations", color: "text-autex-terra" }
                  ].map((stat, i) => (
                    <FadeIn key={i} delay={0.2 + (i * 0.1)} className="bg-autex-black p-10 flex flex-col justify-between aspect-square group hover:bg-white/5 transition-colors">
                        <stat.icon size={32} className={stat.color} />
                        <div>
                            <span className="block text-4xl md:text-5xl font-bold mb-2 tracking-tighter">{stat.val}</span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</span>
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