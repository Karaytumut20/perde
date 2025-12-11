import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Spotify Regional HQ",
    location: "Stockholm, Sweden",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    category: "Office",
    size: "large"
  },
  {
    id: 2,
    title: "Melbourne Conservatorium",
    location: "Melbourne, Australia",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    category: "Education",
    size: "small"
  },
  {
    id: 3,
    title: "Auckland Airport Lounge",
    location: "Auckland, NZ",
    image: "https://images.unsplash.com/photo-1541123437805-4713ca473974?auto=format&fit=crop&q=80&w=800",
    category: "Hospitality",
    size: "small"
  },
  {
    id: 4,
    title: "Google Campus",
    location: "California, USA",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
    category: "Office",
    size: "large"
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <FadeIn>
            <span className="text-accent-terra font-medium tracking-widest uppercase text-sm block mb-4">Case Studies</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight text-primary">
              Design driven by <br />
              <span className="text-gray-400">acoustic performance.</span>
            </h1>
          </FadeIn>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} className={project.size === "large" ? "md:col-span-2" : ""}>
              <Link href="#" className="group block relative overflow-hidden rounded-xl">
                
                {/* Image Container */}
                <div className={`relative ${project.size === "large" ? "aspect-[21/9]" : "aspect-[4/3]"} overflow-hidden bg-gray-200`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 right-6 bg-white text-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent-terra transition-colors">{project.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm gap-4">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {project.location}</span>
                      <span className="px-2 py-0.5 border rounded-full text-xs uppercase">{project.category}</span>
                    </div>
                  </div>
                </div>

              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
