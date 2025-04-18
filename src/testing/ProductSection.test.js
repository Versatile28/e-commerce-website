import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ProductSection from '../components/ProductSection';

jest.mock('../components/ProductCard', () => (props) => (
  <div data-testid="product-card">{props.item.name}</div>
));

jest.mock('react-loading-skeleton', () => (props) => (
  <div data-testid="skeleton" className={props.className} />
));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children }) => <div>{children}</div>,
  },
}));

describe('ProductSection Component', () => {
  const mockProducts = [
    { id: 1, name: 'Product Alpha' },
    { id: 2, name: 'Product Beta' },
    { id: 3, name: 'Product Gamma' },
  ];

  it('renders 12 skeletons when loading is true', () => {
    render(<ProductSection products={[]} loading={true} />);
    expect(screen.getAllByTestId('skeleton')).toHaveLength(12);
  });

  it('renders product cards when loading is false', async () => {
    render(<ProductSection products={mockProducts} loading={false} />);
    const cards = await screen.findAllByTestId('product-card');
    expect(cards).toHaveLength(mockProducts.length);
    mockProducts.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('renders category links correctly', () => {
    render(<ProductSection products={[]} loading={true} />);

    const lowerAll = screen.getByRole('link', { name: 'All Products' });
    expect(lowerAll).toBeInTheDocument();
    expect(lowerAll).toHaveClass('product-links');
    expect(lowerAll).toHaveAttribute('href', '/');

    ['Clothing', 'Bags', 'Shoes', 'Accessories'].forEach((label) => {
      const link = screen.getByRole('link', { name: label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/');
    });

    const upperAll = screen.getByRole('link', { name: 'ALL PRODUCTS' });
    expect(upperAll).toBeInTheDocument();
    expect(upperAll).toHaveClass('product-link-a');
    expect(upperAll).toHaveAttribute('href', '/');
  });
});
