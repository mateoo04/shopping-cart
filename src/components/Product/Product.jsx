import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';

export default function Product({ product, addToBasket }) {
  const [quantity, setQuantity] = useState(1);

  const { imageUrl, name, price } = product;

  return (
    <div className={styles.product}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{`${price}€`}</p>
      <div className={styles.quantityPicker}>
        <button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
          -
        </button>
        <input
          type='number'
          value={quantity}
          onChange={(e) =>
            (parseInt(e.target.value) >= 0 &&
              parseInt(e.target.value) < 99 &&
              setQuantity(parseInt(e.target.value))) ||
            (e.target.value === '' && setQuantity(e.target.value))
          }
        />
        <button onClick={() => quantity < 99 && setQuantity(quantity + 1)}>
          +
        </button>
      </div>
      <button
        className={styles.addToBasketButton}
        onClick={() => addToBasket({ ...product, quantity })}
      >
        ADD TO BASKET
      </button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
  addToBasket: PropTypes.func,
};
