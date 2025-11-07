import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background3D from './Background3D';

const HomeHero = ({ onEnter }) => {
  const [overlay, setOverlay] = useState(true);
  useEffect(() => { const t = setTimeout(() => setOverlay(false), 1200); return () => clearTimeout(t); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <AnimatePresence>
        {overlay && (
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="fixed inset-0 bg-black z-[60]" />
        )}
      </AnimatePresence>

      <Background3D scene="https://prod.spline.design/TQOeGkW-3d-pet-scene/scene.splinecode" />

      <div className="relative z-10 text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">Leovora</motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-4 text-white/85 max-w-2xl mx-auto">Premium, minimalist essentials for pets — with playful 3D experiences.</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="mt-8 flex items-center justify-center gap-4">
          <a href="/products" className="px-6 py-3 rounded-full bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors">Shop now</a>
          <button onClick={onEnter} className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition-colors">Explore</button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
