import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-autex-black text-white pt-32 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Üst Kısım: Linkler */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/20 pb-20 mb-20">
          
          <div className="md:col-span-6 lg:col-span-8">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 leading-none">
              Sound <br/> <span className="text-autex-gray">Experience.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-transparent border-b border-white/30 py-4 w-full max-w-md text-xl placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                />
                <button className="text-xs font-bold uppercase tracking-widest px-8 py-4 bg-white text-black hover:bg-autex-sage transition-colors">
                    Subscribe
                </button>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-autex-gray">Menu</h4>
            <ul className="space-y-4 text-lg font-medium">
              <li><Link href="/products" className="hover:text-autex-sage transition-colors">Products</Link></li>
              <li><Link href="/solutions" className="hover:text-autex-sage transition-colors">Solutions</Link></li>
              <li><Link href="/projects" className="hover:text-autex-sage transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-autex-sage transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-autex-sage transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-autex-gray">Social</h4>
            <ul className="space-y-4 text-lg font-medium">
              <li><a href="#" className="flex items-center gap-2 hover:text-autex-sage transition-colors">Instagram <ArrowUpRight size={14}/></a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-autex-sage transition-colors">LinkedIn <ArrowUpRight size={14}/></a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-autex-sage transition-colors">Pinterest <ArrowUpRight size={14}/></a></li>
            </ul>
          </div>

        </div>

        {/* Alt Kısım: Marka */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <span className="text-[14vw] leading-[0.8] font-black tracking-tighter text-white/10 uppercase select-none">
                Autex
            </span>
            <div className="flex gap-8 text-xs font-bold text-autex-gray uppercase tracking-widest pb-4">
                <Link href="#" className="hover:text-white">Privacy</Link>
                <Link href="#" className="hover:text-white">Terms</Link>
                <span>© 2025</span>
            </div>
        </div>

      </div>
    </footer>
  );
}
