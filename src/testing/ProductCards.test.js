import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCards from '../components/ProductCards';

describe('ProductCards Component', () => {
  const mockToggleDropdown = jest.fn();
  const baseMenu = [
    {},
    {},
    {
      name: 'Products',
      subcategories: [
        {
          name: 'Category One',
          subcategorylist: [
            { name: 'Item 1', link: '/item1' },
            { name: 'Item 2', link: '/item2' },
            { name: 'Item 3', link: '/item3' },
            { name: 'Item 4', link: '/item4' },
          ],
        },
        {
          name: 'Category Two',
          subcategorylist: [
            { name: 'Item A', link: '/itemA' },
            { name: 'Item B', link: '/itemB' },
            { name: 'Item C', link: '/itemC' },
            { name: 'Item D', link: '/itemD' },
          ],
        },
        {
          image: 'test-image.jpg',
        },
      ],
    },
  ];

  const submenuArray = baseMenu[2].subcategories
    .flatMap((sc) => sc.subcategorylist || [])
    .map((item) => [item.name, item.link]);

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders menu option with correct name', () => {
    render(
      <ProductCards
        menu={baseMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown={null}
        closingDropdown={null}
      />
    );

    expect(screen.getByRole('button', { name: /Products/i })).toBeInTheDocument();
  });

  test('calls toggleDropdown with "product" when menu header is clicked', () => {
    render(
      <ProductCards
        menu={baseMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown={null}
        closingDropdown={null}
      />
    );

    fireEvent.click(screen.getByText(/Products/i));
    expect(mockToggleDropdown).toHaveBeenCalledWith('product');
    expect(mockToggleDropdown).toHaveBeenCalledTimes(1);
  });

  test('renders dropdown when activeDropdown is "product"', () => {
    render(
      <ProductCards
        menu={baseMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="product"
        closingDropdown={null}
      />
    );

    const dropdown = screen.getByTestId('product-dropdown');
    expect(dropdown).toHaveClass('show');
    expect(dropdown).not.toHaveClass('hide');
  });

  test('hides dropdown when closingDropdown is "product"', () => {
    render(
      <ProductCards
        menu={baseMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="product"
        closingDropdown="product"
      />
    );

    const dropdown = screen.getByTestId('product-dropdown');
    expect(dropdown).toHaveClass('hide');
  });

  test('does not show dropdown when activeDropdown is not "product"', () => {
    render(
      <ProductCards
        menu={baseMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="other"
        closingDropdown={null}
      />
    );

    const dropdown = screen.getByTestId('product-dropdown');
    expect(dropdown).not.toHaveClass('show');
  });

  test.each(submenuArray)(
    'renders submenu link "%s" with href "%s"',
    (name, link) => {
      render(
        <ProductCards
          menu={baseMenu}
          toggleDropdown={mockToggleDropdown}
          activeDropdown="product"
          closingDropdown={null}
        />
      );

      const linkElement = screen.getByRole('link', { name });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', link);
    }
  );

  test('renders image with correct src and alt attributes', () => {
    render(
      <ProductCards
        menu={baseMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="product"
        closingDropdown={null}
      />
    );

    const img = screen.getByAltText('Model');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', baseMenu[2].subcategories[2].image);
  });
});
