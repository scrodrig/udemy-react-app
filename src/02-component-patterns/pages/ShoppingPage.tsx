import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
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

const products = [product1, product2];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} className="bg-dark text-white">
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
    </div>
  );
};
