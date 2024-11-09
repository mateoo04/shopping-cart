import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Product({ imageUrl, name, price }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{`${price}€`}</p>
      <div>
        <button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>
          -
        </button>
        <input type='number' value={quantity} readOnly />
        <button onClick={() => quantity < 99 && setQuantity(quantity + 1)}>
          +
        </button>
      </div>
      <button>ADD TO BASKET</button>
    </div>
  );
}

Product.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
