import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCartState) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCartState;
        return {
          ...rest,
        };
      }

      return {
        ...oldShoppingCartState,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
