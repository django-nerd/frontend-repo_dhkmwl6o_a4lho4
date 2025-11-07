import React from 'react';
import { ShoppingCart, PawPrint } from 'lucide-react';

const Layout = ({ children, cartCount, onCartToggle }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2">
            <PawPrint className="text-white" />
            <span className="font-semibold tracking-wide text-white">Leovora</span>
          </a>
          <div className="hidden md:flex items-center">
            <a href="#/" className="text-white/90 hover:text-white px-3 py-2">Home</a>
            <a href="#/products" className="text-white/90 hover:text-white px-3 py-2">Products</a>
            <a href="#/legal" className="text-white/90 hover:text-white px-3 py-2">Legal</a>
          </div>
          <button onClick={onCartToggle} className="relative inline-flex items-center gap-2 text-white hover:opacity-90">
            <ShoppingCart />
            <span className="hidden md:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-emerald-500 text-black rounded-full px-1.5 py-0.5">{cartCount}</span>
            )}
          </button>
        </nav>
      </header>
      <div className="pt-16">{children}</div>
      <footer className="py-10 text-center text-white/60 bg-zinc-950 border-t border-white/10">
        <p>© {new Date().getFullYear()} Leovora. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
