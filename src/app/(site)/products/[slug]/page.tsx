import Link from "next/link";
import { ArrowLeft, Download, FileText, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { notFound } from "next/navigation";

// --- MOCK DATA ---
const getProductBySlug = (slug: string) => {
  const products: any = {
    "groove-panel": {
      title: "Groove Panel",
      category: "Wall Solutions",
      description: "A high-performance acoustic panel designed with precision-cut grooves to add texture and depth to any space. Made from 100% polyester fiber, it provides excellent sound absorption while serving as a decorative element.",
      features: [
        "NRC: 0.45 - 0.75",
        "Composition: 100% Polyester Fiber (PET)",
        "Fire Rating: Class A",
        "Carbon Neutral",
        "Made from 60% recycled content"
      ],
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=2000",
      gallery: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
      ]
    },
    "horizon-baffle": {
      title: "Horizon Baffle",
      category: "Ceiling Systems",
      description: "Suspended acoustic baffles that reduce reverberation in large open spaces. Ideal for offices, education, and hospitality sectors where ceiling height is a feature.",
      features: [
        "NRC: 0.85",
        "Fixing: Suspended Kit included",
        "Lightweight design",
        "Customizable shapes"
      ],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000",
      gallery: []
    }
  };
  return products[slug] || null;
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <article className="min-h-screen pb-24">
      
      {/* --- HERO HEADER --- */}
      <div className="relative h-[60vh] bg-gray-900">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto">
            <Link href="/products" className="inline-flex items-center text-sm hover:text-gray-300 mb-6 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Products
            </Link>
            <FadeIn>
              <p className="text-sm font-medium tracking-widest uppercase mb-2 text-accent-sage">{product.category}</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">{product.title}</h1>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT: CONTENT --- */}
          <div className="lg:col-span-8 space-y-12">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-light leading-relaxed text-primary">
                {product.description}
              </h2>
            </FadeIn>

            {/* Gallery Grid */}
            {product.gallery.length > 0 && (
              <div className="space-y-6">
                 <h3 className="text-xl font-bold border-b pb-4">Gallery</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.gallery.map((img: string, idx: number) => (
                      <FadeIn key={idx} delay={0.3 + (idx * 0.1)}>
                        <img src={img} alt="Detail" className="rounded-lg w-full h-64 object-cover hover:opacity-90 transition-opacity" />
                      </FadeIn>
                    ))}
                 </div>
              </div>
            )}
            
            <div className="p-8 bg-surface rounded-xl">
               <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <Download size={20} /> Downloads
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="flex items-center gap-3 p-4 bg-white rounded border hover:border-black transition-colors text-left">
                    <FileText className="text-red-500" />
                    <div>
                      <span className="block font-medium text-sm">Technical Data Sheet</span>
                      <span className="text-xs text-gray-400">PDF • 2.4 MB</span>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 p-4 bg-white rounded border hover:border-black transition-colors text-left">
                    <FileText className="text-blue-500" />
                    <div>
                      <span className="block font-medium text-sm">Installation Guide</span>
                      <span className="text-xs text-gray-400">PDF • 1.1 MB</span>
                    </div>
                  </button>
               </div>
            </div>
          </div>

          {/* --- RIGHT: STICKY SIDEBAR (Specs) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 bg-black text-white rounded-xl">
              <h3 className="text-xl font-bold mb-6">Specifications</h3>
              
              <ul className="space-y-4 mb-8">
                {product.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="text-accent-sage shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                Request a Sample
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                Available for global shipping.
              </p>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
