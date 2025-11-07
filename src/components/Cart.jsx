import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ open, items, onClose, onQty, onCheckout }) => {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          className="fixed top-0 right-0 h-screen w-full max-w-md bg-zinc-950 text-white z-[70] shadow-2xl border-l border-white/10"
          role="dialog"
          aria-label="Cart"
        >
          <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
            <h3 className="font-semibold">Your Cart</h3>
            <button onClick={onClose} className="text-white/70 hover:text-white">Close</button>
          </div>
          <div className="p-4 overflow-y-auto h-[calc(100%-8rem)] space-y-4">
            {items.length === 0 ? (
              <p className="text-white/70">Your cart is empty.</p>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex items-center gap-3 border border-white/10 rounded-lg p-3 bg-zinc-900/60">
                  <img src={item.image} alt="" className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-white/60">${item.price.toFixed(2)}</p>
                    <div className="mt-2 inline-flex items-center gap-2">
                      <button onClick={() => onQty(item.id, Math.max(1, item.qty - 1))} className="px-2 py-1 rounded bg-white/10">-</button>
                      <span className="min-w-[2ch] text-center">{item.qty}</span>
                      <button onClick={() => onQty(item.id, item.qty + 1)} className="px-2 py-1 rounded bg-white/10">+</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="h-16 px-4 border-t border-white/10 flex items-center justify-between bg-zinc-950">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <div className="px-4 pb-6 bg-zinc-950">
            <button onClick={onCheckout} className="w-full py-3 rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-400">Checkout</button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Cart;
