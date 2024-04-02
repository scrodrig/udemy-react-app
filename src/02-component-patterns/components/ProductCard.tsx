import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';

export const ProductCard = () => {
  const { counter, increseBy } = useProduct(0);

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="coffe mug"
      />
      {/* <img className={styles.productImg} src={noImage} alt="coffe mug" /> */}
      <span className={styles.productDescription}>Coffee Mug</span>
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
