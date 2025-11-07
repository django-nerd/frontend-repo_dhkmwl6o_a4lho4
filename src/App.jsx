import React, { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Cart from './components/Cart';
import Legal from './components/Legal';

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [items, setItems] = useState([]);

  const sections = {
    home: useRef(null),
    products: useRef(null),
    legal: useRef(null),
  };

  const scrollTo = (id) => {
    const el = sections[id]?.current;
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAdd = (p) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === p.id);
      if (exists) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...p, qty: 1 }];
    });
    setCartOpen(true);
  };

  const handleQty = (id, qty) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const handleCheckout = () => {
    alert('Checkout flow placeholder. Integrate your provider.');
  };

  // read hash filter for demo
  React.useEffect(() => {
    const update = () => {
      const h = window.location.hash;
      const m = h.match(/products-(.*)$/);
      if (m) setFilter(decodeURIComponent(m[1]));
    };
    window.addEventListener('hashchange', update);
    update();
    return () => window.removeEventListener('hashchange', update);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <Navbar onNav={scrollTo} cartCount={items.reduce((s,i)=>s+i.qty,0)} onCartToggle={() => setCartOpen(true)} />

      <main>
        <div ref={sections.home}>
          <Hero onShop={() => scrollTo('products')} />
        </div>
        <motion.div ref={sections.products} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Products filter={filter} onAdd={handleAdd} />
        </motion.div>
        <motion.div ref={sections.legal} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Legal />
        </motion.div>
      </main>

      <Cart open={cartOpen} items={items} onClose={() => setCartOpen(false)} onQty={handleQty} onCheckout={handleCheckout} />

      <footer className="py-10 text-center text-white/60 bg-zinc-950 border-t border-white/10">
        <p>© {new Date().getFullYear()} Leovora. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
