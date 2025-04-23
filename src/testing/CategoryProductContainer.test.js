/* src/testing/CategoryProductContainer.test.js */
/* eslint-disable testing-library/prefer-find-by, testing-library/no-node-access, testing-library/no-container */
import React, { Suspense } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CategoryProductContainer from '../components/CategoryProductContainer';

// Stub IntersectionObserver for JSDOM
class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = IntersectionObserver;

// Mock framer-motion to plain div
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

// Mock the lazy-loaded ProductCard module
jest.mock('../components/ProductCard', () => ({
  __esModule: true,
  default: () => <div data-testid="product-card" />,
}));

describe('CategoryProductContainer', () => {
  const defaultProps = {
    productNumber: 12,
    filterLoading: false,
    handleSelect: jest.fn(),
    itemsPerRow: 4,
    handleProductNumberChange: jest.fn(),
    selected: 'default',
    filteredProducts: Array.from({ length: 8 }, (_, i) => ({ id: i, name: `Item ${i}` })),
  };

  const renderComponent = (props = {}) =>
    render(
      <MemoryRouter>
        <Suspense fallback={null}>
          <CategoryProductContainer {...defaultProps} {...props} />
        </Suspense>
      </MemoryRouter>
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders category title and description', () => {
    renderComponent();
    expect(screen.getByText('Jackets and tops')).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument();
  });

  test('renders breadcrumb links', () => {
    renderComponent();
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('Shop')).toHaveClass('item-category');
  });

  test('displays pagination controls', () => {
    renderComponent();
    [1, 2, 3, 4].forEach((num) => {
      expect(screen.getByText(String(num))).toBeInTheDocument();
    });
  });

  describe('loading state', () => {
    test('shows correct number of skeletons when loading', () => {
      renderComponent({ filterLoading: true });
      const skeletons = screen.getAllByTestId('product-skeleton');
      const expectedCount = Math.ceil(defaultProps.productNumber / defaultProps.itemsPerRow) * defaultProps.itemsPerRow;
      expect(skeletons).toHaveLength(expectedCount);
    });
  });

  describe('loaded state', () => {
    test('renders ProductCard for each item', async () => {
      renderComponent();
      const cards = await screen.findAllByTestId('product-card');
      expect(cards).toHaveLength(defaultProps.filteredProducts.length);
    });

    test('handleProductNumberChange triggers on clicks', () => {
      renderComponent();
      const options = screen.getAllByTestId('product-count-option');
      fireEvent.click(options[0]); // 12
      fireEvent.click(options[1]); // 24
      expect(defaultProps.handleProductNumberChange).toHaveBeenNthCalledWith(1, 12);
      expect(defaultProps.handleProductNumberChange).toHaveBeenNthCalledWith(2, 24);
    });

    test('sort dropdown reflects selected and calls handleSelect', async () => {
      renderComponent({ selected: 'rating' });
      const toggle = screen.getByRole('button', { name: /RATING/i });
      fireEvent.click(toggle);
      const option = await screen.findByText('Newest first');
      fireEvent.click(option);
      expect(defaultProps.handleSelect).toHaveBeenCalledWith('Newest first');
    });

    test('shows correct "Showing" text', () => {
      renderComponent({ productNumber: 158 });
      const wrapper = screen.getByTestId('showing-text');
      expect(wrapper).toHaveTextContent(/Showing/);
      expect(wrapper).toHaveTextContent(/158/);
      expect(wrapper).toHaveTextContent(/products/);
    });
  });
});
