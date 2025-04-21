import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';

jest.mock('react-redux', () => ({ useSelector: jest.fn() }));
const { selectCartItems, selectCartTotal } = require('../store/cartSlice');
jest.mock('../components/CartItem', () => ({ item }) => (
  <div data-testid="cart-item">{item.name} x{item.quantity}</div>
));
jest.mock('react-bootstrap', () => {
  const Offcanvas = ({ show, onHide, placement, children }) => (
    <div
      role="dialog"
      aria-hidden={!show}
      data-placement={placement}
    >
      <button aria-label="Close" onClick={onHide}>X</button>
      <div>{children}</div>
    </div>
  );
  Offcanvas.Header = () => null;
  return { Offcanvas };
});



const setupSelectors = (items, total) => {
  useSelector.mockImplementation((selector) => {
    if (selector === selectCartItems) return items;
    if (selector === selectCartTotal) return total;
    return undefined;
  });
};

describe('Cart Component', () => {
  const sampleItems = [
    { id: 1, name: 'Apple', price: 1.5, quantity: 2 },
    { id: 2, name: 'Banana', price: 0.75, quantity: 3 },
  ];
  const sampleTotal = sampleItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const handleCartClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    setupSelectors(sampleItems, sampleTotal);
  });

  it('renders Offcanvas with correct placement and visibility', () => {
    const { rerender } = render(
      <Cart showCart={false} handleCartClose={handleCartClose} />
    );
    const dialog = screen.getByRole('dialog', { hidden: true });
    expect(dialog).toHaveAttribute('aria-hidden', 'true');
    expect(dialog).toHaveAttribute('data-placement', 'end');

    rerender(<Cart showCart={true} handleCartClose={handleCartClose} />);
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-hidden', 'false');
  });

  it('renders each CartItem with name and quantity', () => {
    render(<Cart showCart={true} handleCartClose={handleCartClose} />);
    const items = screen.getAllByTestId('cart-item');
    expect(items).toHaveLength(sampleItems.length);
    sampleItems.forEach(({ name, quantity }) => {
      expect(screen.getByText(`${name} x${quantity}`)).toBeInTheDocument();
    });
  });

  it('displays subtotal formatted to two decimals', () => {
    render(<Cart showCart={true} handleCartClose={handleCartClose} />);
    expect(screen.getByText('Subtotal:')).toBeInTheDocument();
    expect(screen.getByText(`$${sampleTotal.toFixed(2)}`)).toBeInTheDocument();
  });

  it('renders VIEW CART and CHECKOUT buttons with correct attributes', () => {
    render(<Cart showCart={true} handleCartClose={handleCartClose} />);
    const viewCartBtn = screen.getByRole('button', { name: /view cart/i });
    const checkoutBtn = screen.getByRole('button', { name: /checkout/i });
    expect(viewCartBtn).toHaveAttribute('href', '/cart');
    expect(checkoutBtn).toHaveAttribute('href', '/checkout');
    expect(viewCartBtn).toHaveClass('btn-outline-dark');
    expect(checkoutBtn).toHaveClass('btn-dark');
  });

  it('calls handleCartClose when close button is clicked', () => {
    render(<Cart showCart={true} handleCartClose={handleCartClose} />);
    const closeBtn = screen.getByLabelText(/Close/);
    fireEvent.click(closeBtn);
    expect(handleCartClose).toHaveBeenCalledTimes(1);
  });

  it('handles empty cart state', () => {
    setupSelectors([], 0);
    render(<Cart showCart={true} handleCartClose={handleCartClose} />);
    expect(screen.queryByTestId('cart-item')).toBeNull();
    expect(screen.getByText('Subtotal:')).toBeInTheDocument();
    expect(screen.getByText('$0.00')).toBeInTheDocument();
  });
});
