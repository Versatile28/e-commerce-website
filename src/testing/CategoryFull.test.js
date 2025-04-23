import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CategoryFull from '../components/CategoryFull';
import { baseUrl } from '../utils/constant';

// Mock fetch
beforeAll(() => {
  global.fetch = jest.fn();
});

afterAll(() => {
  global.fetch.mockRestore();
});

// Mock child components
jest.mock('../components/CategoryMenuContainer', () => ({
  __esModule: true,
  default: ({ clearFilters, handleCheckboxChange, handleRadioChange, handleCategoryChange }) => (
    <div data-testid="menu-container">
      <button data-testid="clear-btn" onClick={clearFilters}>Clear</button>
      <button
        data-testid="brand-checkbox"
        onClick={() => handleCheckboxChange({ target: { id: 'brand1', checked: true } })}
      >
        Check Brand
      </button>
      <button
        data-testid="size-radio"
        onClick={() => handleRadioChange({ target: { id: 'M' } })}
      >
        Select Size M
      </button>
      <button
        data-testid="category-btn"
        onClick={() => handleCategoryChange('electronics')}
      >
        Set Category
      </button>
    </div>
  ),
}));

jest.mock('../components/CategoryProductContainer', () => ({
  __esModule: true,
  default: ({ handleSelect, handleProductNumberChange, itemsPerRow, filterLoading, productNumber }) => (
    <div data-testid="product-container">
      <button
        data-testid="select-sort"
        onClick={() => handleSelect('price')}
      >
        Sort by Price
      </button>
      <button
        data-testid="change-number"
        onClick={() => handleProductNumberChange(20)}
      >
        Show 20
      </button>
      <div data-testid="items-per-row">{itemsPerRow}</div>
      <div data-testid="loading-state">
        {filterLoading ? 'Loading' : 'Loaded'}
      </div>
      <div data-testid="product-number">{productNumber}</div>
    </div>
  ),
}));

const dummyProducts = [{ id: 1 }, { id: 2 }];

beforeEach(() => {
  jest.clearAllMocks();
  fetch.mockResolvedValue({
    ok: true,
    json: async () => dummyProducts,
  });
});

describe('CategoryFull Component', () => {
  test('renders menu and product containers', async () => {
    render(<CategoryFull products={dummyProducts} />);
    expect(await screen.findByTestId('menu-container')).toBeInTheDocument();
    expect(screen.getByTestId('product-container')).toBeInTheDocument();
  });

  test('fetches filtered products on mount with default params', async () => {
    render(<CategoryFull products={dummyProducts} />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    const url = fetch.mock.calls[0][0];
    expect(url).toContain(`${baseUrl}/api/filter?`);
    expect(url).toMatch(/minValue=40/);
    expect(url).toMatch(/maxValue=110/);
    expect(url).toMatch(/selected=Default/);
  });

  test('updates fetch params when brand is checked', async () => {
    render(<CategoryFull products={dummyProducts} />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    fireEvent.click(screen.getByTestId('brand-checkbox'));
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));

    const url = fetch.mock.calls[1][0];
    expect(url).toMatch(/selectedBrands=brand1/);
  });

  test('clears filters and resets state', async () => {
    render(<CategoryFull products={dummyProducts} />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    fireEvent.click(screen.getByTestId('brand-checkbox'));
    fireEvent.click(screen.getByTestId('size-radio'));
    fireEvent.click(screen.getByTestId('category-btn'));
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(4));

    fireEvent.click(screen.getByTestId('clear-btn'));
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(5));

    const url = fetch.mock.calls[4][0];
    expect(url).not.toMatch(/selectedBrands=/);
    expect(url).toMatch(/minValue=40/);
    expect(url).toMatch(/maxValue=110/);
    expect(url).toMatch(/selected=Default/);
    expect(url).not.toMatch(/category=/);
  });

  test('handles sort selection and triggers fetch', async () => {
    render(<CategoryFull products={dummyProducts} />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    fireEvent.click(screen.getByTestId('select-sort'));
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));

    const url = fetch.mock.calls[1][0];
    expect(url).toMatch(/selected=price/);
  });

  test('changes product number', async () => {
    render(<CategoryFull products={dummyProducts} />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    fireEvent.click(screen.getByTestId('change-number'));
    expect(screen.getByTestId('product-number')).toHaveTextContent('20');
  });

  test('updates itemsPerRow on window resize', async () => {
    render(<CategoryFull products={dummyProducts} />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    const initial = Number(screen.getByTestId('items-per-row').textContent);
    expect([2, 3, 4]).toContain(initial);

    global.innerWidth = 1400;
    fireEvent(window, new Event('resize'));
    await waitFor(() => expect(screen.getByTestId('items-per-row').textContent).toBe('4'));

    global.innerWidth = 800;
    fireEvent(window, new Event('resize'));
    await waitFor(() => expect(screen.getByTestId('items-per-row').textContent).toBe('2'));
  });
});
