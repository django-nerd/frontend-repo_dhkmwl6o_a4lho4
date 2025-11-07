import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sampleProducts = [
  { id: 1, name: 'CloudSoft Dog Bed', price: 89.0, desc: 'Breathable memory foam bed for superior comfort.', type: 'Dog', image: 'https://images.unsplash.com/photo-1718373434014-a9befe595e8d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbG91ZFNvZnQlMjBEb2clMjBCZWR8ZW58MHwwfHx8MTc2MjUyOTAzN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'WhiskerWave Cat Toy', price: 24.0, desc: 'Interactive feather toy for daily playtime.', type: 'Cat', image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'TrailTrek Leash', price: 29.0, desc: 'Durable reflective leash for evening walks.', type: 'Dog', image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'PureBowl Set', price: 39.0, desc: 'Stainless steel bowls with anti-slip base.', type: 'All', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'FeatherLite Harness', price: 34.0, desc: 'Lightweight harness for comfort and control.', type: 'Cat', image: 'https://images.unsplash.com/photo-1718373434014-a9befe595e8d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbG91ZFNvZnQlMjBEb2clMjBCZWR8ZW58MHwwfHx8MTc2MjUyOTAzN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

const Products = ({ filter, onAdd }) => {
  const data = useMemo(() => {
    if (!filter || filter === 'All') return sampleProducts;
    return sampleProducts.filter(p => p.type === filter);
  }, [filter]);

  return (
    <section id="products" className="relative py-20 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
            <p className="text-white/70 mt-2">Minimal design. Maximum comfort for your companions.</p>
          </div>
          <div className="flex items-center gap-2">
            {['All', 'Dog', 'Cat'].map(cat => (
              <a key={cat} href={`#products-${cat}`} className={`px-3 py-2 rounded-full border text-sm ${filter===cat? 'bg-white text-black border-white' : 'border-white/20 text-white/80 hover:bg-white/10'}`}>{cat}</a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {data.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="group bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
              >
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
                  <button
                    onClick={() => onAdd(product)}
                    className="mt-4 w-full rounded-lg bg-emerald-500 text-black font-medium py-2 hover:bg-emerald-400 transition-colors"
                  >
                    Add to cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Products;
