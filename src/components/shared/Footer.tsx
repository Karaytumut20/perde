import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* Üst Kısım: Linkler ve Marka */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          
          {/* Kolon 1: Marka */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
              ACOUSTIC<span className="font-light text-gray-400">LAB</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sustainable acoustic solutions for the built environment. 
              Designed in California, installed globally.
            </p>
          </div>

          {/* Kolon 2: Ürünler */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Products</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">Wall Solutions</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Ceiling Systems</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Screens & Dividers</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Custom Designs</Link></li>
            </ul>
          </div>

          {/* Kolon 3: Şirket */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Kolon 4: İletişim */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              info@acousticlab.com <br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>

        {/* Alt Kısım: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2025 AcousticLab Industries. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
