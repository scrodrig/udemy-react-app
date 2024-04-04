import { Props as ButtonProps } from '../components/ProductButtons';
import { Props as ImageProps } from '../components/ProductImage';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as TitleProps } from '../components/ProductTitle';
export interface Product {
  id: string;
  title: string;
  img?: string;
}
export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Buttons: (Props: ButtonProps) => JSX.Element;
  Image: (Props: ImageProps) => JSX.Element;
  Title: (Props: TitleProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitalValues {
  count?: number;
  maxCount?: number;
}
