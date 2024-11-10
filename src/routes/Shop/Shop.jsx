import { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import styles from './Shop.module.css';
import testImage from '../../assets/test-image.jpg';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function Shop({ updateQuantityInBasket }) {
  const location = useLocation();
  const { category } = location.state || {};
  console.log('category: ' + category);

  const url = category
    ? `https://fakestoreapi.in/api/products/category?limit=10&type=${category}`
    : 'https://fakestoreapi.in/api/products?limit=10';

  console.log(url);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');

        const json = await response.json();
        if (json.status !== 'SUCCESS')
          throw new Error('Fetched data status: ' + json.status);

        setData(
          json.products.map((item) => ({
            id: item.id,
            name:
              item.brand.charAt(0).toUpperCase() +
              item.brand.slice(1) +
              ' ' +
              item.model,
            imageUrl: item.image,
            category: item.category,
            price: item.price,
          }))
        );
      } catch (e) {
        console.log(e);
      }
    };

    let counter = 0;

    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV === 'production') fetchData();
    else {
      setData(
        Array.from({ length: 20 }, () => ({
          id: counter++,
          name: 'Test product ' + counter,
          imageUrl: testImage,
          category: 'test',
          price: '99',
        }))
      );
    }
  }, [url]);

  return (
    <div className={styles.shop}>
      <div className={styles.productsContainer}>
        {data.map((product) => {
          return (
            <Product
              key={`product-${product.id}`}
              product={product}
              updateQuantityInBasket={updateQuantityInBasket}
            />
          );
        })}
      </div>
    </div>
  );
}

Shop.propTypes = {
  updateQuantityInBasket: PropTypes.func,
};
