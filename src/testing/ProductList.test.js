import React from 'react';
import { render, screen, within } from '@testing-library/react';
import ProductList from '../pages/ProductList';

jest.mock('../layouts/HeaderBar',    () => () => <div data-testid="header-bar">HeaderBar</div>);
jest.mock('../layouts/MyNavbar',     () => ({ menu }) => (
  <div data-testid="my-navbar">MyNavbar with {menu.length} items</div>
));
jest.mock('../components/CategoryFull', () => ({ products }) => (
  <div data-testid="category-full">CategoryFull with {products.length} products</div>
));
jest.mock('../components/FeatureSection', () => () => <div data-testid="feature-section">FeatureSection</div>);
jest.mock('../layouts/Footer',           () => () => <div data-testid="footer">Footer</div>);
jest.mock('../components/Loader',        () => () => <div data-testid="loader">Loader</div>);

const mockProducts = [
  { id: 1, name: 'Alpha', price: 10 },
  { id: 2, name: 'Beta',  price: 20 },
];

const mockMenu = [
  { id: 1, label: 'One', link: '/one' },
  { id: 2, label: 'Two', link: '/two' },
];

describe('ProductList Component', () => {
  it('shows Loader when menuLoading is true', () => {
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
    [
      'header-bar',
      'my-navbar',
      'category-full',
      'feature-section',
      'footer'
    ].forEach(id => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
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

  it('wraps everything in a position-relative container', () => {
    render(
      <ProductList
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    const wrapper = screen.getByTestId('product-list-wrapper');
    expect(wrapper).toHaveClass('position-relative');
  });

  it('renders HeaderBar inside the product-headerbar wrapper', () => {
    render(
      <ProductList
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    const headerContainer = screen.getByTestId('product-headerbar');
    expect(within(headerContainer).getByTestId('header-bar')).toBeInTheDocument();
  });

  it('renders MyNavbar inside the product-mynavbar wrapper', () => {
    render(
      <ProductList
        products={mockProducts}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );
    const navContainer = screen.getByTestId('product-mynavbar');
    expect(within(navContainer).getByTestId('my-navbar')).toBeInTheDocument();
  });
});
