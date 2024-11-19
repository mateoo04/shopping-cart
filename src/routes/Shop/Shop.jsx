import { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import styles from './Shop.module.css';
import testImage from '../../assets/test-image.jpg';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

export default function Shop({ updateQuantityInBasket }) {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const url = category
    ? `https://fakestoreapi.in/api/products/category?limit=10&type=${category}`
    : 'https://fakestoreapi.in/api/products?limit=10';

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

      setIsLoading(false);
    }
  }, [url]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (data.length && imagesLoaded === data.length) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [imagesLoaded, data]);

  useEffect(() => setImagesLoaded(0), [url]);

  return (
    <div className={styles.shop}>
      <aside className={styles.categoriesSidebar}>
        <h2>Categories</h2>
        <ul>
          <li>
            <Link
              to='/shop'
              className={classNames(styles.categoryLink, {
                [styles.activeLink]: !category,
              })}
            >
              All
            </Link>
          </li>
          <li>
            <Link
              className={classNames(styles.categoryLink, {
                [styles.activeLink]: category === 'tv',
              })}
              to='/shop/tv'
            >
              TV
            </Link>
          </li>
          <li>
            <Link
              className={classNames(styles.categoryLink, {
                [styles.activeLink]: category === 'audio',
              })}
              to='/shop/audio'
            >
              Audio
            </Link>
          </li>
          <li>
            <Link
              className={classNames(styles.categoryLink, {
                [styles.activeLink]: category === 'laptops',
              })}
              to='/shop/laptop'
            >
              Laptops
            </Link>
          </li>
          <li>
            <Link
              className={classNames(styles.categoryLink, {
                [styles.activeLink]: category === 'mobile',
              })}
              to='/shop/mobile'
            >
              Phones
            </Link>
          </li>
          <li>
            <Link
              className={classNames(styles.categoryLink, {
                [styles.activeLink]: category === 'gaming',
              })}
              to='/shop/gaming'
            >
              Gaming
            </Link>
          </li>
          <li>
            <Link
              className={classNames(styles.categoryLink, {
                [styles.activeLink]: category === 'appliances',
              })}
              to='/shop/appliances'
            >
              Appliances
            </Link>
          </li>
        </ul>
      </aside>

      <div
        style={{ display: isLoading ? 'block' : 'none' }}
        className={styles.loaderContainer}
      >
        <div className={styles.loader}></div>
      </div>

      <div
        style={{ display: isLoading ? 'none' : 'grid' }}
        className={styles.productsContainer}
      >
        {data.map((product) => {
          return (
            <Product
              key={`product-${product.id}`}
              product={product}
              updateQuantityInBasket={updateQuantityInBasket}
              onImageLoad={handleImageLoad}
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
