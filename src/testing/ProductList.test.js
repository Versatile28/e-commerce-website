import React from 'react';
import { render, screen, within } from '@testing-library/react';
import ProductList from '../pages/ProductList';

// Mock child components
jest.mock('../layouts/HeaderBar', () => () => <div data-testid="header-bar">HeaderBar</div>);
jest.mock('../layouts/MyNavbar', () => ({ menu }) => (
  <div data-testid="my-navbar">MyNavbar with {menu.length} items</div>
));
jest.mock('../components/CategoryFull', () => ({ products }) => (
  <div data-testid="category-full">CategoryFull with {products.length} products</div>
));
jest.mock('../components/FeatureSection', () => () => <div data-testid="feature-section">FeatureSection</div>);
jest.mock('../layouts/Footer', () => () => <div data-testid="footer">Footer</div>);
jest.mock('../components/Loader', () => () => <div data-testid="loader">Loader</div>);

const mockProducts = [
  { id: 1, name: 'Alpha', price: 10 },
  { id: 2, name: 'Beta',  price: 20 },
];

const mockMenu = [
  { id: 1, label: 'One', link: '/one' },
  { id: 2, label: 'Two', link: '/two' },
];

describe('ProductList Component', () => {
  it('shows loader while menu is loading', () => {
    render(
      <ProductList
        products={[]}
        loading={false}
        menu={[]}
        menuLoading={true}
      />
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.queryByTestId('header-bar')).not.toBeInTheDocument();
  });

  it('renders all layout pieces when menuLoading is false', () => {
    render(
      <ProductList
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    expect(screen.getByTestId('header-bar')).toBeInTheDocument();
    expect(screen.getByTestId('my-navbar')).toBeInTheDocument();
    expect(screen.getByTestId('category-full')).toBeInTheDocument();
    expect(screen.getByTestId('feature-section')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });

  it('passes correct menu prop to MyNavbar', () => {
    render(
      <ProductList
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    expect(screen.getByTestId('my-navbar').textContent)
      .toContain('MyNavbar with 2 items');
  });

  it('passes correct products prop to CategoryFull', () => {
    render(
      <ProductList
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    expect(screen.getByTestId('category-full').textContent)
      .toContain('CategoryFull with 2 products');
  });

  it('handles empty products array', () => {
    render(
      <ProductList
        products={[]}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    expect(screen.getByTestId('category-full').textContent)
      .toContain('CategoryFull with 0 products');
  });

  it('handles empty menu array', () => {
    render(
      <ProductList
        products={mockProducts}
        loading={false}
        menu={[]}
        menuLoading={false}
      />
    );
    expect(screen.getByTestId('my-navbar').textContent)
      .toContain('MyNavbar with 0 items');
  });

  it('wraps content in a position-relative container', () => {
    const { container } = render(
      <ProductList
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    expect(container.firstChild).toHaveClass('position-relative');
  });

  it('places HeaderBar inside .product-headerbar and MyNavbar inside .product-mynavbar', () => {
    const { container } = render(
      <ProductList
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );

    const headerWrapper = container.querySelector('.product-headerbar');
    const navWrapper    = container.querySelector('.product-mynavbar');

    // Assert they exist
    expect(headerWrapper).not.toBeNull();
    expect(navWrapper).not.toBeNull();

    // Only if found, run the within() assertions
    if (headerWrapper) {
      expect(within(headerWrapper).getByTestId('header-bar')).toBeInTheDocument();
    }
    if (navWrapper) {
      expect(within(navWrapper).getByTestId('my-navbar')).toBeInTheDocument();
    }
  });
});
