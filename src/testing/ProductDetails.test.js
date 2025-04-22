import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductDetails from '../pages/ProductDetails';
import { baseUrl } from '../utils/constant';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

jest.mock('axios', () => ({
  get: jest.fn(),
}));


jest.mock('../utils/constant', () => ({
  baseUrl: 'http://mock-api.test',
}));

jest.mock('../layouts/HeaderBar',        () => () => <div data-testid="header-bar">HeaderBar</div>);
jest.mock('../layouts/MyNavbar',         () => ({ menu }) => (
  <div data-testid="my-navbar">MyNavbar with {menu.length} items</div>
));
jest.mock('../components/ProductContainer',      () => ({ product }) => (
  <div data-testid="product-container">ProductContainer: {product.name}</div>
));
jest.mock('../components/AdditionalInformation', () => ({ product }) => (
  <div data-testid="additional-info">AdditionalInformation: {product.tags.join(',')}</div>
));
jest.mock('../components/ProductCarousel',       () => ({ products, loading }) => (
  <div data-testid="product-carousel">
    Carousel with {products.length} items, loading: {loading.toString()}
  </div>
));
jest.mock('../components/FeatureSection', () => () => <div data-testid="feature-section">FeatureSection</div>);
jest.mock('../layouts/Footer',           () => () => <div data-testid="footer">Footer</div>);
jest.mock('../components/Loader',        () => () => <div data-testid="loader">Loader</div>);

const mockMenu = [
  { id: 1, label: 'Home', link: '/' },
  { id: 2, label: 'Shop', link: '/shop' },
];
const mockProductsList = [
  { id: 'a', name: 'Prod A' },
  { id: 'b', name: 'Prod B' },
];
const fetchedProduct = {
  _id: '123',
  name: 'Fetched Product',
  tags: ['new', 'hot'],
};

beforeEach(() => {
  axios.get.mockClear();
  useParams.mockReset();
});

describe('ProductDetails Component', () => {
  it('shows Loader when menuLoading is true', () => {
    useParams.mockReturnValue({ id: '123' });

    render(
      <ProductDetails
        products={mockProductsList}
        loading={false}
        menu={[]}
        menuLoading={true}
      />
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.queryByTestId('header-bar')).not.toBeInTheDocument();
  });

  it('shows Loader while description is loading', async () => {
    useParams.mockReturnValue({ id: '123' });
    axios.get.mockResolvedValueOnce({ data: fetchedProduct });

    render(
      <ProductDetails
        products={mockProductsList}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
    );
  });

  it('fetches correct URL & renders all layout pieces', async () => {
    useParams.mockReturnValue({ id: '123' });
    axios.get.mockResolvedValueOnce({ data: fetchedProduct });

    render(
      <ProductDetails
        products={mockProductsList}
        loading={true}
        menu={mockMenu}
        menuLoading={false}
      />
    );

    await waitFor(() =>
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
    );

    expect(axios.get).toHaveBeenCalledWith(
      `${baseUrl}/api/products/123`,
      { headers: { 'Content-Type': 'application/json' } }
    );

    [
      'header-bar',
      'my-navbar',
      'product-container',
      'additional-info',
      'product-carousel',
      'feature-section',
      'footer',
    ].forEach(id => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });

  it('passes fetched product into ProductContainer & AdditionalInformation', async () => {
    useParams.mockReturnValue({ id: '123' });
    axios.get.mockResolvedValueOnce({ data: fetchedProduct });

    render(
      <ProductDetails
        products={mockProductsList}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );

    await waitFor(() =>
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
    );

    expect(screen.getByTestId('product-container').textContent)
      .toContain('Fetched Product');
    expect(screen.getByTestId('additional-info').textContent)
      .toContain('new,hot');
  });

  it('passes products+loading into ProductCarousel', async () => {
    useParams.mockReturnValue({ id: '123' });
    axios.get.mockResolvedValueOnce({ data: fetchedProduct });

    render(
      <ProductDetails
        products={mockProductsList}
        loading={true}
        menu={mockMenu}
        menuLoading={false}
      />
    );

    await waitFor(() =>
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
    );

    expect(screen.getByTestId('product-carousel').textContent)
      .toContain(`Carousel with ${mockProductsList.length} items, loading: true`);
  });

  it('wraps everything in a position-relative container', async () => {
    useParams.mockReturnValue({ id: '123' });
    axios.get.mockResolvedValueOnce({ data: fetchedProduct });

    render(
      <ProductDetails
        products={mockProductsList}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );

    await waitFor(() =>
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
    );

    const wrapper = screen.getByTestId('product-details-wrapper');
    expect(wrapper).toHaveClass('position-relative');
  });

  it('renders HeaderBar and MyNavbar inside their wrappers', async () => {
    useParams.mockReturnValue({ id: '123' });
    axios.get.mockResolvedValueOnce({ data: fetchedProduct });

    render(
      <ProductDetails
        products={mockProductsList}
        loading={false}
        menu={mockMenu}
        menuLoading={false}
      />
    );

    await waitFor(() =>
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
    );

    const headerWrapper = screen.getByTestId('product-headerbar');
    expect(within(headerWrapper).getByTestId('header-bar')).toBeInTheDocument();

    const navWrapper = screen.getByTestId('product-mynavbar');
    expect(within(navWrapper).getByTestId('my-navbar')).toBeInTheDocument();
  });
});
