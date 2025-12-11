import ProductCard from "@/components/site/ProductCard";
import FadeIn from "@/components/animations/FadeIn";

// Mock Data (Veritabanı bağlanana kadar)
const products = [
  { id: 1, title: "Groove Panel", category: "Wall", slug: "groove-panel", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=1000" },
  { id: 2, title: "Horizon Baffle", category: "Ceiling", slug: "horizon-baffle", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000" },
  { id: 3, title: "Lattice", category: "Screens", slug: "lattice", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000" },
  { id: 4, title: "Quietspace 3D", category: "Wall", slug: "quietspace-3d", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1000" },
  { id: 5, title: "Frontier Raft", category: "Ceiling", slug: "frontier-raft", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000" },
  { id: 6, title: "Vicinity Desk", category: "Screens", slug: "vicinity-desk", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=1000" },
];

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <h1 className="text-5xl font-bold tracking-tighter mb-6">Our Collection</h1>
            <p className="text-xl text-gray-500 font-light">
              Explore our range of high-performance acoustic solutions tailored for every space.
            </p>
          </FadeIn>
        </div>

        {/* Filters (Görsel olarak) */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 border-b border-gray-100">
          {["All Products", "Wall", "Ceiling", "Screens", "Custom"].map((filter, i) => (
            <button 
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id}
              {...product}
              index={index}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
