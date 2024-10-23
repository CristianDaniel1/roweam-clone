import { AnimatePresence } from 'framer-motion';
import { Cart } from './cart/Cart.tsx';
import { useCartStore } from '../store/cartStore.ts';

export const CartOpen = () => {
  const isOpen = useCartStore(state => state.isOpen);

  return <AnimatePresence>{isOpen && <Cart />}</AnimatePresence>;
};
