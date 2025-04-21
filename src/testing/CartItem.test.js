import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartItem from '../components/CartItem';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('../store/cartSlice', () => ({
  removeFromCart: (id) => ({ type: 'cart/removeFromCart', payload: id }),
}));

jest.mock('react-router-dom', () => ({
  Link: ({ to, children, className, ...rest }) => (
    <a data-testid={`link-${to}`} href={to} className={className} {...rest}>
      {children}
    </a>
  ),
}));

jest.mock('react-icons/io', () => ({
  IoIosClose: (props) => <span data-testid="remove-icon" {...props}>X</span>,
}));



describe('CartItem Component', () => {
  const item = {
    _id: 'abc123',
    name: 'Test Product',
    image: '/images/test.png',
    quantity: 4,
    price: 9.99,
  };

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('renders the product image with correct src and alt', () => {
    render(<CartItem item={item} />);
    const img = screen.getByRole('img', { name: /test product/i });
    expect(img).toHaveAttribute('src', item.image);
    expect(img).toHaveAttribute('alt', item.name);
  });

  it('renders the product name as a link with the correct URL and class', () => {
    render(<CartItem item={item} />);
    const nameLink = screen.getByText(item.name, { selector: 'a.cart-item-name' });
    expect(nameLink).toBeInTheDocument();
    expect(nameLink).toHaveAttribute(
      'href',
      `/category-full/product/${item._id}`
    );
    expect(nameLink).toHaveClass('cart-item-name');
  });

  it('renders the correct quantity text', () => {
    render(<CartItem item={item} />);
    expect(
      screen.getByText(`Quantity: ${item.quantity}`, { exact: false })
    ).toBeInTheDocument();
  });

  it('renders the price formatted to two decimals', () => {
    render(<CartItem item={item} />);
    expect(
      screen.getByText(`$${item.price.toFixed(2)}`, { exact: true })
    ).toBeInTheDocument();
  });

  it('dispatches the correct removeFromCart action when the remove icon is clicked', () => {
    render(<CartItem item={item} />);
    fireEvent.click(screen.getByTestId('remove-icon'));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'cart/removeFromCart',
      payload: item._id,
    });
  });
});
