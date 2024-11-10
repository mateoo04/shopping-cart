import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BasketItem from './BasketItem';

describe('BasketItem component', () => {
  const productJSON = {
    id: 0,
    name: 'Sony WH-10000',
    imageUrl:
      'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg',
    category: 'audio',
    price: '189',
    quantity: 10,
  };

  let setQuantityInBasket;
  let removeItemFromBasket;

  beforeEach(() => {
    setQuantityInBasket = vi.fn();
    removeItemFromBasket = vi.fn();

    render(
      <BasketItem
        product={productJSON}
        updateQuantityInBasket={setQuantityInBasket}
        removeItemFromBasket={removeItemFromBasket}
      />
    );
  });

  it('renders basket item correctly', () => {
    expect(screen.getByRole('heading', { level: 4 }).textContent).toMatch(
      productJSON.name
    );
    expect(screen.getByAltText(productJSON.name)).toBeInTheDocument();
  });

  it('calls removeItemFromBasket() with right argument on button click', async () => {
    const user = userEvent.setup();

    const removeItemFromBasketButton = screen.getByRole('button', {
      name: /remove from basket/i,
    });

    await user.click(removeItemFromBasketButton);

    expect(removeItemFromBasket).toHaveBeenLastCalledWith(productJSON);
  });
});
