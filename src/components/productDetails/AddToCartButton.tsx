import { type ProductType } from '../../types.ts';
import { Button } from '../UI/Button.tsx';
import { useCartStore } from '../../store/cartStore.ts';

interface AddToCartProps extends ProductType {
  id: string;
}

export const AddToCartButton = (props: AddToCartProps) => {
  const addToCart = useCartStore(state => state.addToCart);

  function handleAddToCart() {
    addToCart({ ...props });
  }

  return (
    <div className="my-4 relative">
      <Button className="w-full uppercase" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};
