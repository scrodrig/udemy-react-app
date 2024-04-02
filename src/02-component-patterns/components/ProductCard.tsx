import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { counter, increseBy } = useProduct(0);

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={product.img ? product.img : noImage}
        alt="coffe mug"
      />
      <span className={styles.productDescription}>{product.title}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}> {counter} </div>
        <button className={styles.buttonAdd} onClick={() => increseBy(+1)}>
          +
        </button>
      </div>
    </div>
  );
};
