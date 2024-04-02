import { useState } from 'react';

type useProductType = {
  counter: number;
  increaseBy: (value: number) => void;
};

export const useProduct = (initialValue: number): useProductType => {
  const [counter, setCounter] = useState(initialValue);

  const increaseBy = (value = 1) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};
