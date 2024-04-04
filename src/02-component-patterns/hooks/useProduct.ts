import { useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

type useProductType = {
  counter: number;
  increaseBy: (value: number) => void;
};

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: useProductArgs): useProductType => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value = 1) => {
    const newValue = Math.max(counter + value, 0);
    setCounter((prev) => Math.max(prev + value, 0));
    onChange && onChange({ count: newValue, product });
  };

  return {
    counter,
    increaseBy,
  };
};
