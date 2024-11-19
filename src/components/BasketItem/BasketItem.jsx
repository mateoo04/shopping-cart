import { useEffect, useState } from 'react';
import styles from './BasketItem.module.css';
import PropTypes from 'prop-types';

export default function BasketItem({
  product,
  setQuantityInBasket,
  removeItemFromBasket,
  changeTotal,
}) {
  const { imageUrl, name, price } = product;

  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  const setCustomQuantity = (input) => {
    if (input == quantity) return;

    setQuantity(input);
    setQuantityInBasket(product, input);
    changeTotal((input - quantity) * product.price);
  };

  const incrementQuantity = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
      setQuantityInBasket(product, product.quantity + 1);
      changeTotal(product.price);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setQuantityInBasket(product, product.quantity - 1);
      changeTotal(-product.price);
    }
  };

  return (
    <div className={styles.basketItem}>
      <img src={imageUrl} alt={name} />
      <div className={styles.information}>
        <div className={styles.detailsContainer}>
          <h4>{name}</h4>
          <p>{`${price} €`}</p>
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.quantityPicker}>
            <button onClick={decrementQuantity}>-</button>
            <input
              type='number'
              value={quantity}
              onChange={(e) =>
                (parseInt(e.target.value) > 0 &&
                  parseInt(e.target.value) <= 99 &&
                  setCustomQuantity(e.target.value)) ||
                (e.target.value === '' && setQuantity(e.target.value)) ||
                (parseInt(e.target.value) > 99 && setQuantity(99))
              }
            />
            <button onClick={incrementQuantity}>+</button>
          </div>
          <button
            className={styles.removeFromBasketButton}
            onClick={() => removeItemFromBasket(product)}
          >
            REMOVE FROM BASKET
          </button>
        </div>
      </div>
    </div>
  );
}

BasketItem.propTypes = {
  product: PropTypes.object,
  setQuantityInBasket: PropTypes.func,
  removeItemFromBasket: PropTypes.func,
  changeTotal: PropTypes.func,
};
