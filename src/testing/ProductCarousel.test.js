import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCarousel from '../components/ProductCarousel';

jest.mock('../components/ProductCard', () => (props) => (
  <div data-testid="product-card">{props.item.name}</div>
));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children }) => <div data-testid="motion-div">{children}</div>,
  },
}));

jest.mock('react-loading-skeleton', () => (props) => (
  <div
    data-testid="skeleton"
    className={props.className}
    style={props.height ? { height: `${props.height}px` } : undefined}
  />
));

jest.mock('swiper/react', () => ({
  Swiper: ({ children, loop, grabCursor, pagination }) => (
    <div
      data-testid="swiper"
      data-loop={loop}
      data-grabcursor={grabCursor}
      data-pagination-clickable={pagination?.clickable}
      data-pagination-dynamic-bullets={pagination?.dynamicBullets}
    >
      {children}
    </div>
  ),
  SwiperSlide: ({ children, className }) => (
    <div data-testid="slide" className={className}>
      {children}
    </div>
  ),
}));

jest.mock('swiper/modules', () => ({ Navigation: {}, Pagination: {}, A11y: {} }));

describe('ProductCarousel Component', () => {
  const smallList = [
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Beta' },
    { id: 3, name: 'Gamma' }
  ];
  const largeList = [
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Beta' },
    { id: 3, name: 'Gamma' },
    { id: 4, name: 'Delta' },
    { id: 5, name: 'Epsilon' }
  ];

  it('renders heading text', () => {
    render(<ProductCarousel products={smallList} />);
    expect(screen.getByText('You might also like these')).toBeInTheDocument();
  });

  it('renders correct slides count', () => {
    render(<ProductCarousel products={largeList} />);
    expect(screen.getAllByTestId('slide')).toHaveLength(largeList.length);
  });

  it('renders a ProductCard for each item', () => {
    render(<ProductCarousel products={smallList} />);
    smallList.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('configures Swiper props correctly for small list (no loop)', () => {
    render(<ProductCarousel products={smallList} />);
    const swiper = screen.getByTestId('swiper');
    expect(swiper).toHaveAttribute('data-loop', 'false');
    expect(swiper).toHaveAttribute('data-grabcursor', 'true');
    expect(swiper).toHaveAttribute('data-pagination-clickable', 'true');
    expect(swiper).toHaveAttribute('data-pagination-dynamic-bullets', 'true');
  });

  it('configures Swiper props correctly for large list (loop)', () => {
    render(<ProductCarousel products={largeList} />);
    const swiper = screen.getByTestId('swiper');
    expect(swiper).toHaveAttribute('data-loop', 'true');
  });
});
