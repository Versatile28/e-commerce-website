import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToCartBar from '../components/AddToCartBar';

afterEach(cleanup);

describe('AddToCartBar Component', () => {
  it('renders the Add to cart span for desktop view', () => {
    const handleAddToCart = jest.fn();
    render(<AddToCartBar handleAddToCart={handleAddToCart} />);

    const addToCartSpan = screen.getByText(/add to cart/i);
    expect(addToCartSpan).toBeInTheDocument();
    expect(addToCartSpan).toHaveClass('product-cart');
  });

  it('renders the PiShoppingBagOpen icon with correct test ID', () => {
    const handleAddToCart = jest.fn();
    render(<AddToCartBar handleAddToCart={handleAddToCart} />);

    const icon = screen.getByTestId('mobile-cart-icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders AiOutlineHeart and IoExpand icons', () => {
    const handleAddToCart = jest.fn();
    render(<AddToCartBar handleAddToCart={handleAddToCart} />);

    const icons = screen.getAllByTestId('icon');
    expect(icons.length).toBe(2);
  });

  it('calls handleAddToCart when "Add to cart" span is clicked', () => {
    const handleAddToCart = jest.fn();
    render(<AddToCartBar handleAddToCart={handleAddToCart} />);

    const addToCartSpan = screen.getByText(/add to cart/i);
    fireEvent.click(addToCartSpan);
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });

  it('calls handleAddToCart when mobile icon is clicked', () => {
    const handleAddToCart = jest.fn();
    render(<AddToCartBar handleAddToCart={handleAddToCart} />);

    const mobileCartIcon = screen.getByTestId('mobile-cart-icon');
    fireEvent.click(mobileCartIcon);
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
