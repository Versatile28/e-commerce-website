import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '../components/ProductCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({ useDispatch: jest.fn() }));
jest.mock('../store/cartSlice', () => ({ addToCart: jest.fn(item => ({ type: 'cart/add', payload: item })) }));
jest.mock('../components/StarRating', () => () => <div data-testid="star-rating" />);
jest.mock('../components/AddToCartBar', () => ({ handleAddToCart, testId }) => (
  <button data-testid={testId} onClick={handleAddToCart}>Add</button>
));

describe('ProductCard', () => {
  const item = {
    _id: '123',
    badge: 'Fresh',
    image: '/test-image.jpg',
    name: 'Test Item',
    price: 99.99,
    rating: 4.5
  };
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    addToCart.mockClear();
  });

  function renderComponent(props = {}) {
    return render(
      <MemoryRouter>
        <ProductCard item={{ ...item, ...props }} />
      </MemoryRouter>
    );
  }

  test('renders image link, title link, price, and StarRating', () => {
    renderComponent();

    const imageLink = screen.getByTestId('image-link');
    expect(imageLink).toHaveAttribute('href', `/category-full/product/${item._id}`);
    const img = screen.getByAltText(item.name);
    expect(img).toHaveAttribute('src', item.image);

    const titleLink = screen.getByTestId('title-link');
    expect(titleLink).toHaveTextContent(item.name);
    expect(titleLink).toHaveAttribute('href', `/category-full/product/${item._id}`);

    expect(screen.getByText(`$${item.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByTestId('star-rating')).toBeInTheDocument();
  });

  test('renders badge when provided and applies correct class', () => {
    renderComponent({ badge: 'Sale' });
    const badge = screen.getByText('Sale');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('badge-label', 'sale');
  });

  test('does not render badge when badge prop is empty', () => {
    renderComponent({ badge: '' });
    expect(screen.queryByText('Fresh')).not.toBeInTheDocument();
  });

  test('hover overlay appears on mouse enter and hides on mouse leave', () => {
    renderComponent();
    const root = screen.getByTestId('product-card-root');
    const hoverOverlay = screen.getByTestId('hover-overlay');

    expect(hoverOverlay).not.toHaveClass('show');

    fireEvent.mouseEnter(root);
    expect(hoverOverlay).toHaveClass('show');

    fireEvent.mouseLeave(root);
    expect(hoverOverlay).not.toHaveClass('show');
  });

  test('permanent overlay toggles based on window width', () => {
    renderComponent();
    const permOverlay = screen.getByTestId('permanent-overlay');
    expect(permOverlay).not.toHaveClass('show1');

    act(() => {
      global.innerWidth = 500;
      global.dispatchEvent(new Event('resize'));
    });
    expect(permOverlay).toHaveClass('show1');

    act(() => {
      global.innerWidth = 1200;
      global.dispatchEvent(new Event('resize'));
    });
    expect(permOverlay).not.toHaveClass('show1');
  });

  test('clicking add buttons dispatches addToCart action', () => {
    renderComponent();
    const root = screen.getByTestId('product-card-root');
    fireEvent.mouseEnter(root);

    fireEvent.click(screen.getByTestId('hover-add-btn'));
    expect(addToCart).toHaveBeenCalledWith(item);
    expect(mockDispatch).toHaveBeenCalledWith(addToCart(item));

    fireEvent.click(screen.getByTestId('permanent-add-btn'));
    expect(addToCart).toHaveBeenCalledWith(item);
    expect(mockDispatch).toHaveBeenCalledWith(addToCart(item));
  });
});
