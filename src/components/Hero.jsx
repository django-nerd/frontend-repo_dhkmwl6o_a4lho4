import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PawPrint } from 'lucide-react';

const AnimatedPaws = () => {
  // Generate floating paw icons for subtle pet-themed background animation
  const items = Array.from({ length: 14 });
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {items.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: ['110%', '-10%'], opacity: [0, 0.3, 0] }}
          transition={{ duration: 10 + (i % 5), repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
          className="absolute text-white/10"
          style={{ left: `${(i * 7) % 100}%` }}
        >
          <PawPrint size={48 + (i % 3) * 8} />
        </motion.div>
      ))}
    </div>
  );
};

const Hero = ({ onShop }) => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Intro overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="fixed inset-0 bg-black z-[60]"
          />
        )}
      </AnimatePresence>

      {/* Background animated paws */}
      <AnimatedPaws />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),rgba(0,0,0,0)_60%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.1),rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80"
        >
          Leovora
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-white/80 max-w-2xl mx-auto"
        >
          Elegant essentials for pets and the people who love them.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <button
            onClick={onShop}
            className="px-6 py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-colors"
          >
            Shop now
          </button>
          <a href="#products" className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition-colors">
            Explore
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.6 }}
        className="absolute bottom-6 text-white/70"
      >
        <span className="text-xs tracking-wide">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
