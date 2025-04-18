import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../store/cartSlice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('../components/CartItem', () => ({ item }) => (
  <div data-testid="cart-item">{item.name}</div>
));

jest.mock('react-bootstrap', () => ({
  Offcanvas: ({ show, onHide, children }) => (
    <div role="dialog" aria-hidden={show ? 'false' : 'true'}>
      {children}
      <button aria-label="Close" onClick={onHide} />
    </div>
  ),
}));

describe('Cart component', () => {
  const sampleItems = [
    { id: 1, name: 'Apple', price: 1.5, quantity: 2 },
    { id: 2, name: 'Banana', price: 0.75, quantity: 3 },
  ];
  const sampleTotal = 1.5 * 2 + 0.75 * 3; // 5.25
  const handleCartClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useSelector.mockImplementation((selector) => {
      if (selector === selectCartItems) return sampleItems;
      if (selector === selectCartTotal) return sampleTotal;
      return undefined;
    });
  });

  test('renders correct number of CartItem components', () => {
    render(<Cart showCart={true} handleCartClose={handleCartClose} />);
    const items = screen.getAllByTestId('cart-item');
    expect(items).toHaveLength(sampleItems.length);
    sampleItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  test('displays subtotal formatted to two decimals', () => {
    render(<Cart showCart={true} handleCartClose={handleCartClose} />);
    expect(screen.getByText(/Subtotal:/i)).toBeInTheDocument();
    expect(screen.getByText(`$${sampleTotal.toFixed(2)}`)).toBeInTheDocument();
  });

  test('renders VIEW CART and CHECKOUT buttons with correct hrefs and roles', () => {
    render(<Cart showCart={true} handleCartClose={handleCartClose} />);
    const viewCartBtn = screen.getByRole('link', { name: /view cart/i });
    const checkoutBtn = screen.getByRole('link', { name: /checkout/i });
    expect(viewCartBtn).toHaveAttribute('href', '/cart');
    expect(checkoutBtn).toHaveAttribute('href', '/checkout');
  });

  test('calls handleCartClose when close button is clicked', () => {
    render(<Cart showCart={true} handleCartClose={handleCartClose} />);
    const closeBtn = screen.getByLabelText(/Close/);
    fireEvent.click(closeBtn);
    expect(handleCartClose).toHaveBeenCalledTimes(1);
  });

  test('passes show prop to Offcanvas (dialog visibility)', () => {
    const { rerender } = render(
      <Cart showCart={false} handleCartClose={handleCartClose} />
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-hidden', 'true');

    rerender(<Cart showCart={true} handleCartClose={handleCartClose} />);
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-hidden', 'false');
  });
});
