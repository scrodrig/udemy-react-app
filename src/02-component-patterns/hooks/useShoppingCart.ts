import { useState } from "react";
import { ProductInCart, onChangeArgs } from "../interfaces/interfaces";



export const useShoppingCart = () => {
 
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCartState) => {
      const productInCart: ProductInCart = oldShoppingCartState[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCartState,
          [product.id]: productInCart,
        };
      }

      //Borrar el producto

      const { [product.id]: toDelete, ...rest } = oldShoppingCartState;
      return {
        ...rest,
      };

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCartState;
      //   return {
      //     ...rest,
      //   };
      // }

      // return {
      //   ...oldShoppingCartState,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    shoppingCart,
    onProductCountChange
  }

}
