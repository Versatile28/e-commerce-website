import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StarRating from '../components/StarRating';

describe('StarRating component', () => {
  test('renders 5 empty stars when rating is 0 (default)', () => {
    render(<StarRating />);

    expect(screen.queryAllByTestId('star-full')).toHaveLength(0);
    expect(screen.queryAllByTestId('star-half')).toHaveLength(0);
    expect(screen.getAllByTestId('star-empty')).toHaveLength(5);
  });

  test('renders correct number of full, half, and empty stars for 3.5 rating', () => {
    render(<StarRating rating={3.5} />);

    expect(screen.getAllByTestId('star-full')).toHaveLength(3);
    expect(screen.getByTestId('star-half')).toBeInTheDocument();
    expect(screen.getAllByTestId('star-empty')).toHaveLength(1);
  });

  test('renders only full stars for integer ratings', () => {
    render(<StarRating rating={4} />);

    expect(screen.getAllByTestId('star-full')).toHaveLength(4);
    expect(screen.queryAllByTestId('star-half')).toHaveLength(0);
    expect(screen.getAllByTestId('star-empty')).toHaveLength(1);
  });

  test('caps rating above 5 to 5 full stars', () => {
    render(<StarRating rating={6} />);

    expect(screen.getAllByTestId('star-full')).toHaveLength(5);
    expect(screen.queryAllByTestId('star-half')).toHaveLength(0);
    expect(screen.queryAllByTestId('star-empty')).toHaveLength(0);
  });

  test('applies custom size, gap, and color props', () => {
    const customProps = { rating: 2.5, size: 24, gap: 8, color: 'red' };
    render(<StarRating {...customProps} />);

    const fullStars = screen.getAllByTestId('star-full');
    fullStars.forEach((star) => {
      expect(star).toHaveAttribute('width', `${customProps.size}`);
      expect(star).toHaveAttribute('height', `${customProps.size}`);
      expect(star).toHaveStyle(`margin-right: ${customProps.gap}px`);
      expect(star).toHaveStyle(`color: ${customProps.color}`);
      expect(star).toHaveStyle(`fill: ${customProps.color}`);
    });
  });

  test('handles zero and small fractional edge cases', () => {
    const { rerender } = render(<StarRating rating={0} />);
    // Zero rating should be 5 empty stars
    expect(screen.getAllByTestId('star-empty')).toHaveLength(5);

    // Rerender with a small fractional rating
    rerender(<StarRating rating={0.2} />);
    expect(screen.queryAllByTestId('star-full')).toHaveLength(0);
    expect(screen.getByTestId('star-half')).toBeInTheDocument();
    expect(screen.getAllByTestId('star-empty')).toHaveLength(4);
  });
});
