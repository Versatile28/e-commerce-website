import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductContainer from '../components/ProductContainer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../store/cartSlice', () => ({
  addToCart: jest.fn((payload) => ({ type: 'cart/add', payload })),
}));

jest.mock('../components/StarRating', () => () => <div data-testid="star-rating" />);

describe('ProductContainer', () => {
  const product = {
    name: 'Test Product',
    category: 'Test Category',
    price: 100,
    description: 'Test Description',
    rating: 4,
    image: '/test.jpg',
  };
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    addToCart.mockClear();
  });

  test('renders product details correctly', () => {
    render(
      <MemoryRouter>
        <ProductContainer product={product} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Test Product/i })).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument();
    expect(screen.getByText('$125.00')).toBeInTheDocument();
    expect(screen.getByTestId('star-rating')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '/');
    const categoryLinks = screen.getAllByRole('link', { name: /Test Category/i });
    expect(categoryLinks.some(link => link.getAttribute('href') === '/category-full')).toBe(true);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(6);
    expect(images[0]).toHaveAttribute('src', '/test.jpg');
  });

  test('size selection via dropdown works', () => {
    render(
      <MemoryRouter>
        <ProductContainer product={product} />
      </MemoryRouter>
    );
    const sizeToggle = screen.getByRole('button', { name: /SMALL/i });
    fireEvent.click(sizeToggle);
    fireEvent.click(screen.getByText('Medium'));
    expect(screen.getByText(/^MEDIUM$/)).toBeInTheDocument();
  });

  test('type selection toggles between options', () => {
    render(
      <MemoryRouter>
        <ProductContainer product={product} />
      </MemoryRouter>
    );
    expect(screen.getByLabelText('HOODIE')).toBeChecked();
    fireEvent.click(screen.getByLabelText('COLLEGE'));
    expect(screen.getByLabelText('COLLEGE')).toBeChecked();
  });

  test('quantity input updates correctly', () => {
    render(
      <MemoryRouter>
        <ProductContainer product={product} />
      </MemoryRouter>
    );
    const quantityInput = screen.getByRole('spinbutton');
    expect(quantityInput).toHaveValue(1);
    fireEvent.change(quantityInput, { target: { value: 5 } });
    expect(quantityInput).toHaveValue(5);
  });

  test('adds to cart dispatches correct action', () => {
    render(
      <MemoryRouter>
        <ProductContainer product={product} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /ADD TO CART/i }));
    expect(addToCart).toHaveBeenCalledWith({ ...product, quantity: 1 });
    const action = addToCart.mock.results[0].value;
    expect(mockDispatch).toHaveBeenCalledWith(action);
  });

  test('toast appears and toggles classes instead of unmounting', () => {
    render(
      <MemoryRouter>
        <ProductContainer product={product} />
      </MemoryRouter>
    );
    const toast = screen.getByTestId('add-cart-toast');
    expect(toast).toHaveClass('show-display');
    expect(toast).not.toHaveClass('hide-display');

    fireEvent.click(screen.getByLabelText(/close/i));

    expect(toast).toHaveClass('hide-display');
    expect(toast).not.toHaveClass('show-display');
  });

  test('wishlist link is present', () => {
    render(
      <MemoryRouter>
        <ProductContainer product={product} />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /Add to wishlist/i })).toBeInTheDocument();
  });

  test('category and tags links render correctly', () => {
    render(
      <MemoryRouter>
        <ProductContainer product={product} />
      </MemoryRouter>
    );
    const categoryLinks = screen.getAllByRole('link', { name: /Test Category/i });
    expect(categoryLinks.some(link => link.getAttribute('href') === '/category-full')).toBe(true);
    expect(categoryLinks.some(link => link.getAttribute('href') === '/jackets')).toBe(true);
    expect(screen.getByRole('link', { name: /Leisure/i })).toHaveAttribute('href', '/');
  });
});
