import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from './Product.jsx';

describe('Product component', () => {
  it('renders product correctly', () => {
    const { container } = render(
      <Product
        imageUrl={
          'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg'
        }
        name='Sony WH-10000'
        price={189}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders product name correctly', () => {
    render(
      <Product
        imageUrl={
          'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg'
        }
        name='Sony WH-10000'
        price={189}
      />
    );

    expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch(
      'Sony WH-10000'
    );
  });
});
