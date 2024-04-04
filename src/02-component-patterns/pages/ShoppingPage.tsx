import { ProductCard } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

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
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}>
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
        {Object.entries(shoppingCart).map(([key, product]) => {
          return (
            <ProductCard
              key={key}
              style={{ width: '100px' }}
              product={product}
              className="bg-dark text-white"
              onChange={onProductCountChange}
              value={product.count}>
              <ProductCard.Image
                className="custom-image"
                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
              />
              <ProductCard.Buttons
                className="custom-buttons"
                style={{ display: 'flex', justifyContent: 'center' }}
              />
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};
