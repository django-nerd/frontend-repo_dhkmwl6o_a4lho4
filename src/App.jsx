import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import Layout from './components/Layout';
import HomeHero from './components/HomeHero';
import ProductsPage from './components/ProductsPage';
import LegalPage from './components/LegalPage';
import Cart from './components/Cart';

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [route, setRoute] = useState(() => (typeof window !== 'undefined' ? window.location.hash.replace('#', '') || '/' : '/'));

  // lightweight hash router (no extra packages)
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHash);
    onHash();
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

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

  const cartCount = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  const Page = () => {
    if (route.startsWith('/products')) return <ProductsPage onAdd={handleAdd} />;
    if (route.startsWith('/legal')) return <LegalPage />;
    return <HomeHero onEnter={() => { window.location.hash = '/products'; }} />;
  };

  return (
    <>
      <Layout cartCount={cartCount} onCartToggle={() => setCartOpen(true)}>
        <Page />
      </Layout>
      <Cart open={cartOpen} items={items} onClose={() => setCartOpen(false)} onQty={handleQty} onCheckout={handleCheckout} />
    </>
  );
};

export default App;
