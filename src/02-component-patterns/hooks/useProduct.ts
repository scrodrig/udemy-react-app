import { useEffect, useRef, useState } from 'react';
import { InitalValues, Product, onChangeArgs } from '../interfaces/interfaces';

type useProductType = {
  counter: number;
  increaseBy: (value: number) => void;
};

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitalValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs): useProductType => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const increaseBy = (value = 1) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues?.maxCount);
    }
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  return {
    counter,
    increaseBy,
  };
};
