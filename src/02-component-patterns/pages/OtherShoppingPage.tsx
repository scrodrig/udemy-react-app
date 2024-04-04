import { ProductCard } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[1];

export const OtherShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}>
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductCard.Image
              className="custom-image"
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductCard.Title className="text-bold" title={'Coffee'} />
            <ProductCard.Buttons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
