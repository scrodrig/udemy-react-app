import { useState } from 'react';

type useProductType = {
  counter: number;
  increseBy: (value: number) => void;
};

type useProductProps = {
  initialValue: number;
};

export const useProduct = ({ initialValue }: useProductProps): useProductType => {
  const [counter, setCounter] = useState(initialValue);

  const increseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increseBy,
  };
};
