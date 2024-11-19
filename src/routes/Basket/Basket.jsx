import BasketItem from '../../components/BasketItem/BasketItem';
import PropTypes from 'prop-types';
import styles from './Basket.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Basket({
  items,
  setQuantityInBasket,
  removeItemFromBasket,
}) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      items.reduce((total, currentItem) => {
        return total + currentItem.quantity * parseInt(currentItem.price);
      }, 0)
    );
  }, [items]);

  const changeTotal = (value) => {
    setTotalPrice(totalPrice + parseFloat(value));
  };

  return (
    <div className={styles.basket}>
      <h3>Your Basket</h3>
      <div className={styles.basketItemsTotal}>
        <div className={styles.itemsContainer}>
          {items.length !== 0 ? (
            items.map((item) => (
              <BasketItem
                key={`basket-item-${item.id}`}
                product={item}
                setQuantityInBasket={setQuantityInBasket}
                removeItemFromBasket={removeItemFromBasket}
                changeTotal={changeTotal}
              />
            ))
          ) : (
            <p>
              Your shopping basket is empty.{' '}
              <Link className={styles.shopLink} to='/shop'>
                Click here to shop!
              </Link>
            </p>
          )}
        </div>
        {items.length !== 0 ? (
          <div className={styles.totalContainer}>
            <h4 className={styles.totalTitle}>Total</h4>
            <p>{`${totalPrice} €`}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

Basket.propTypes = {
  items: PropTypes.array,
  setQuantityInBasket: PropTypes.func,
  removeItemFromBasket: PropTypes.func,
};
