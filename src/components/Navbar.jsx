import React from 'react';
import { ShoppingCart, PawPrint } from 'lucide-react';

const Navbar = ({ onNav, cartCount, onCartToggle }) => {
  const link = (id, label) => (
    <button
      key={id}
      onClick={() => onNav(id)}
      className="text-sm md:text-base text-white/90 hover:text-white transition-colors px-3 py-2"
    >
      {label}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PawPrint className="text-white" />
          <span className="font-semibold tracking-wide text-white">Leovora</span>
        </div>
        <div className="hidden md:flex items-center">
          {link('home', 'Home')}
          {link('products', 'Products')}
          {link('legal', 'Legal')}
        </div>
        <button
          onClick={onCartToggle}
          aria-label="Open cart"
          className="relative inline-flex items-center gap-2 text-white hover:opacity-90"
        >
          <ShoppingCart />
          <span className="hidden md:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-[10px] bg-emerald-500 text-white rounded-full px-1.5 py-0.5">
              {cartCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
