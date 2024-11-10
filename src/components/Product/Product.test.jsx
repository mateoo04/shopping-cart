import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from './Product.jsx';
import userEvent from '@testing-library/user-event';

describe('Product component', () => {
  const productJSON = {
    id: 0,
    name: 'Sony WH-10000',
    imageUrl:
      'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg',
    category: 'audio',
    price: '189',
  };

  it('renders product correctly', () => {
    const { container } = render(
      <Product product={productJSON} addToBasket={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders product name correctly', () => {
    render(<Product product={productJSON} addToBasket={() => {}} />);

    expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch(
      'Sony WH-10000'
    );
  });

  it('calls addToBasket when button is clicked', async () => {
    const addToBasket = vi.fn();
    const user = userEvent.setup();
    render(<Product product={productJSON} addToBasket={addToBasket} />);

    const addToBasketButton = screen.getByRole('button', {
      name: /add to basket/i,
    });
    await user.click(addToBasketButton);

    expect(addToBasket).toHaveBeenCalled();
  });
});
