import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background3D from './Background3D';

const PRODUCTS = [
  { id: 1, name: 'Safe nail clipper for pets', price: 19.0, desc: 'Precision clipper with safety guard for stress-free grooming.', type: 'All', image: 'https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Plush pet bed for home', price: 59.0, desc: 'Ultra-soft plush bed for cozy naps.', type: 'All', image: 'https://images.unsplash.com/photo-1719464454959-9cf304ef4774?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWZlJTIwbmFpbCUyMGNsaXBwZXIlMjBmb3IlMjBwZXRzfGVufDB8MHx8fDE3NjI1MzAwOTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Warm bed for cats', price: 49.0, desc: 'Thermo-lined bed that keeps cats warm.', type: 'Cat', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Mushroom-shaped cat scratching post', price: 39.0, desc: 'Playful mushroom design with durable sisal.', type: 'Cat', image: 'https://images.unsplash.com/photo-1719464454959-9cf304ef4774?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWZlJTIwbmFpbCUyMGNsaXBwZXIlMjBmb3IlMjBwZXRzfGVufDB8MHx8fDE3NjI1MzAwOTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 5, name: 'Self-adhesive carpet for cats', price: 24.0, desc: 'Stick-on scratch pad to protect your furniture.', type: 'Cat', image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Coconut tree cat scratching post', price: 44.0, desc: 'Tropical fun with sturdy scratch trunk.', type: 'Cat', image: 'https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?q=80&w=1200&auto=format&fit=crop' },
  { id: 7, name: 'Cat scratching post / cat tower', price: 119.0, desc: 'Multi-level tower for climbing, lounging, and play.', type: 'Cat', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop' },
];

const ProductsPage = ({ onAdd }) => {
  const [filter, setFilter] = useState('All');
  const data = useMemo(() => (filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.type === filter)), [filter]);

  return (
    <section className="relative min-h-screen py-24 bg-black text-white">
      <Background3D scene="https://prod.spline.design/3d-cats-and-toys/scene.splinecode" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Products</h1>
            <p className="text-white/70 mt-2">Carefully curated for comfort, safety, and joy.</p>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1">
            {['All', 'Cat'].map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm ${filter===cat? 'bg-white text-black' : 'text-white/80 hover:bg-white/10'}`}>{cat}</button>
            ))}
          </div>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {data.map(product => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="group bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-white/70">{product.desc}</p>
                    </div>
                    <span className="shrink-0 font-medium">${product.price.toFixed(2)}</span>
                  </div>
                  <button onClick={() => onAdd(product)} className="mt-4 w-full rounded-lg bg-emerald-500 text-black font-medium py-2 hover:bg-emerald-400 transition-colors">Add to cart</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
