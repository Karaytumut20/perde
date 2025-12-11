"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  index: number;
}

export default function ProductCard({ title, category, image, slug, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/products/${slug}`} className="group block">
        {/* Resim Alanı */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover'da çıkan buton */}
          <div className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Bilgi Alanı */}
        <div>
          <p className="text-xs font-medium text-accent-terra mb-1 uppercase tracking-wider">{category}</p>
          <h3 className="text-lg font-bold group-hover:text-gray-600 transition-colors">{title}</h3>
        </div>
      </Link>
    </motion.div>
  );
}
