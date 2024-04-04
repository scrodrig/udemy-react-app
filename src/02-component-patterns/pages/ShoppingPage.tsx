import { useState } from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product, onChangeArgs } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product1 = {
  id: '1',
  title: 'Coffee mug card',
  img: './coffee-mug.png',
};

const product2 = {
  id: '2',
  title: 'Coffee mug meme',
  img: './coffee-mug2.png',
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCartState) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCartState;
        return {
          ...rest,
        };
      }

      return {
        ...oldShoppingCartState,
        [product.id]: { ...product, count },
      };
    });
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}>
            <ProductCard.Image
              className="custom-image"
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductCard.Title className="text-bold" title={'Coffee'} />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard style={{ width: '100px' }} product={product1} className="bg-dark text-white">
          <ProductCard.Image
            className="custom-image"
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard style={{ width: '100px' }} product={product2} className="bg-dark text-white">
          <ProductCard.Image
            className="custom-image"
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
