import { useEffect, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

type useProductType = {
  counter: number;
  increaseBy: (value: number) => void;
};

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs): useProductType => {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    setCounter(value);
  }, [value]);

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
