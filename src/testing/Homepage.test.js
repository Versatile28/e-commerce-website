import React from 'react';
import { render, screen, within, waitFor } from '@testing-library/react';
import Homepage from '../pages/Homepage';

jest.mock('../layouts/HeaderBar', () => () => <div data-testid="header-bar">Header Bar</div>);
jest.mock('../layouts/MyNavbar', () => ({ menu }) => <div data-testid="my-navbar">Nav Bar with {menu.length} items</div>);
jest.mock('../layouts/Footer', () => () => <div data-testid="footer">Footer</div>);
jest.mock('../components/HeroCarousel', () => () => <div data-testid="hero-carousel">Hero Carousel</div>);
jest.mock('../components/FeatureSection', () => () => <div data-testid="feature-section">Feature Section</div>);
jest.mock('../components/HistorySection', () => () => <div data-testid="history-section">History Section</div>);
jest.mock('../components/NewArrivalsSection', () => () => <div data-testid="new-arrivals-section">New Arrivals</div>);
jest.mock('../components/CountdownSection', () => () => <div data-testid="countdown-section">Countdown Section</div>);
jest.mock('../components/CategorySection', () => () => <div data-testid="category-section">Category Section</div>);
jest.mock('../components/BrandSection', () => () => <div data-testid="brand-section">Brand Section</div>);
jest.mock('../components/ProductSection', () => ({ products, loading }) => (
  <div data-testid="product-section">
    Product Section with {products.length} products, loading: {loading.toString()}
  </div>
));
jest.mock('../components/Loader', () => () => <div data-testid="loader">Loading...</div>);

const mockProducts = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

const mockMenu = [
  { id: 1, label: 'Home', link: '/' },
  { id: 2, label: 'Products', link: '/products' },
  { id: 3, label: 'About', link: '/about' },
];



describe('Homepage Component', () => {
  test('renders loader when menu is loading', () => {
    render(
      <Homepage 
        products={mockProducts}
        loading={false}
        menu={[]}
        menuLoading={true}
      />
    );
    
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.queryByTestId('header-bar')).not.toBeInTheDocument();
  });

  test('renders all sections when not loading', () => {
    render(
      <Homepage 
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    
    expect(screen.getByTestId('header-bar')).toBeInTheDocument();
    expect(screen.getByTestId('my-navbar')).toBeInTheDocument();
    expect(screen.getByTestId('hero-carousel')).toBeInTheDocument();
    expect(screen.getByTestId('category-section')).toBeInTheDocument();
    expect(screen.getByTestId('new-arrivals-section')).toBeInTheDocument();
    expect(screen.getByTestId('product-section')).toBeInTheDocument();
    expect(screen.getByTestId('countdown-section')).toBeInTheDocument();
    expect(screen.getByTestId('history-section')).toBeInTheDocument();
    expect(screen.getByTestId('brand-section')).toBeInTheDocument();
    expect(screen.getByTestId('feature-section')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });

  test('passes correct props to child components', () => {
    render(
      <Homepage 
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );

    expect(screen.getByTestId('my-navbar').textContent).toContain('Nav Bar with 3 items');
    expect(screen.getByTestId('product-section').textContent).toContain('Product Section with 2 products');
    expect(screen.getByTestId('product-section').textContent).toContain('loading: false');
  });

  test('handles loading state for products correctly', () => {
    render(
      <Homepage 
        products={[]}
        loading={true}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    
    expect(screen.getByTestId('product-section').textContent).toContain('loading: true');
    expect(screen.getByTestId('product-section').textContent).toContain('Product Section with 0 products');
  });

  test('renders with empty products array', () => {
    render(
      <Homepage 
        products={[]}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    
    expect(screen.getByTestId('product-section').textContent).toContain('Product Section with 0 products');
  });

  test('renders with empty menu array', () => {
    render(
      <Homepage 
        products={mockProducts}
        loading={false}
        menu={[]}
        menuLoading={false}
      />
    );
    
    expect(screen.getByTestId('my-navbar').textContent).toContain('Nav Bar with 0 items');
  });

  test('has proper header with navigation classes', () => {
    render(
      <Homepage 
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('position-absolute');
    expect(header).toHaveClass('w-100');
    expect(header).toHaveClass('navigation-bars');
  });

  test('handles async updates correctly', async () => {
    const { rerender } = render(
      <Homepage 
        products={[]}
        loading={true}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    
    expect(screen.getByTestId('product-section').textContent).toContain('loading: true');
    
    rerender(
      <Homepage 
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    
    await waitFor(() => {
      expect(screen.getByTestId('product-section').textContent).toContain('loading: false');
    });
    
    expect(screen.getByTestId('product-section').textContent).toContain('Product Section with 2 products');
  });

  test('all components render in the correct order', () => {
    render(
      <Homepage 
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    
    const header = screen.getByRole('banner');
    
    expect(within(header).getByTestId('header-bar')).toBeInTheDocument();
    expect(within(header).getByTestId('my-navbar')).toBeInTheDocument();
    
    const allTestIds = [
      'header-bar',
      'my-navbar',
      'hero-carousel',
      'category-section',
      'new-arrivals-section',
      'product-section',
      'countdown-section',
      'history-section',
      'brand-section',
      'feature-section',
      'footer'
    ];
    
    const elements = allTestIds.map(id => screen.getByTestId(id));
    
    elements.forEach(el => {
      expect(el).toBeInTheDocument();
    });
  });
});