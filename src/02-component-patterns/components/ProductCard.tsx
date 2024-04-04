import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { CSSProperties, ReactElement, createContext } from 'react';
import { InitalValues, Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[] | (() => JSX.Element);
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitalValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children && (typeof children === 'function') ? children() : children}
      </div>
    </Provider>
  );
};
