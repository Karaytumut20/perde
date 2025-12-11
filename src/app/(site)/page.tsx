import ProductGrid from "@/components/site/ProductGrid";
import FadeIn from "@/components/animations/FadeIn";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Arkaplan */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
            alt="Architectural background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* İçerik */}
        <div className="container mx-auto px-6 relative z-10 text-white pt-20">
          <div className="max-w-4xl space-y-8">
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
                Redefining <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Silence.
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl font-light leading-relaxed">
                Premium acoustic solutions designed for modern architecture. 
                Balancing aesthetics with high-performance sound control.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-white text-black px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                  Explore Products
                  <ArrowRight size={18} />
                </button>
                <button className="px-8 py-4 rounded-full font-medium border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  View Projects
                </button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll İndicator */}
        <FadeIn delay={1.0} className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
            <div className="animate-bounce flex flex-col items-center gap-2 text-white/70">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-8 bg-white/50"></div>
            </div>
        </FadeIn>
      </section>

      {/* --- PRODUCT GRID SECTION --- */}
      <ProductGrid />

      {/* --- EXTRA CONTENT --- */}
      <section className="py-24 bg-white text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto space-y-6 px-6">
            <h3 className="text-3xl font-bold tracking-tight">Ready to transform your space?</h3>
            <p className="text-gray-500">
              Our team of acoustic engineers is ready to help you find the perfect solution for your project.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-black transition-colors">
              Get in Touch
            </button>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
