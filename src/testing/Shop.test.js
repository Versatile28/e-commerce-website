import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shop from '../components/Shop';

describe('Shop component', () => {
  const sampleMenu = [
    {},
    {
      name: 'Shop',
      subcategories: [
        {
          subcategorylist: [
            { name: 'All Products', link: '/all-products' },
            { name: 'New Arrivals', link: '/new-arrivals' },
            { name: 'Best Sellers', link: '/best-sellers' },
            { name: 'Sale', link: '/sale' },
            { name: 'Gift Cards', link: '/gift-cards' },
            { name: 'Exclusive', link: '/exclusive' },
            { name: 'Clearance', link: '/clearance' },
          ],
        },
        {
          subcategorylist: [
            { name: 'Product A', link: '/product-a' },
            { name: 'Product B', link: '/product-b' },
            { name: 'Product C', link: '/product-c' },
          ],
        },
        {
          image: '/images/model.png',
        },
      ],
    },
  ];

  let toggleDropdownMock;

  beforeEach(() => {
    toggleDropdownMock = jest.fn();
  });

  test('renders header button and icon', () => {
    render(
      <Shop
        menu={sampleMenu}
        toggleDropdown={toggleDropdownMock}
        activeDropdown={null}
        closingDropdown={null}
      />
    );

    expect(screen.getByTestId('header-shop')).toBeInTheDocument();
    const btn = screen.getByTestId('btn-shop');
    expect(btn).toHaveTextContent('Shop');

    const icon = screen.getByTestId('icon-shop');
    expect(icon).toBeInTheDocument();
  });

  test('calls toggleDropdown with "shopPages" on header click', () => {
    render(
      <Shop
        menu={sampleMenu}
        toggleDropdown={toggleDropdownMock}
        activeDropdown={null}
        closingDropdown={null}
      />
    );

    fireEvent.click(screen.getByTestId('header-shop'));
    expect(toggleDropdownMock).toHaveBeenCalledWith('shopPages');
  });

  test('dropdown default state has no show or hide classes', () => {
    render(
      <Shop
        menu={sampleMenu}
        toggleDropdown={toggleDropdownMock}
        activeDropdown={null}
        closingDropdown={null}
      />
    );
    const dd = screen.getByTestId('dropdown-shop');
    expect(dd).not.toHaveClass('show');
    expect(dd).not.toHaveClass('hide');
  });

  describe('when activeDropdown is "shopPages"', () => {
    test('dropdown has show class and displays all shop pages links', () => {
      render(
        <Shop
          menu={sampleMenu}
          toggleDropdown={toggleDropdownMock}
          activeDropdown="shopPages"
          closingDropdown={null}
        />
      );

      const dd = screen.getByTestId('dropdown-shop');
      expect(dd).toHaveClass('show');
      expect(dd).not.toHaveClass('hide');

      expect(screen.getByText('Shop pages')).toBeInTheDocument();

      sampleMenu[1].subcategories[0].subcategorylist.forEach(item => {
        const link = screen.getByRole('link', { name: new RegExp(`^${item.name}`) });
        expect(link).toHaveAttribute('href', item.link);
      });
    });

    test('shows "New" badge on Exclusive link', () => {
      render(
        <Shop
          menu={sampleMenu}
          toggleDropdown={toggleDropdownMock}
          activeDropdown="shopPages"
          closingDropdown={null}
        />
      );

      const exclusiveLink = screen.getByRole('link', { name: /Exclusive/ });
      expect(within(exclusiveLink).getByText('New')).toBeInTheDocument();
    });

    test('displays product pages links correctly', () => {
      render(
        <Shop
          menu={sampleMenu}
          toggleDropdown={toggleDropdownMock}
          activeDropdown="shopPages"
          closingDropdown={null}
        />
      );

      expect(screen.getByText('Product pages')).toBeInTheDocument();

      sampleMenu[1].subcategories[1].subcategorylist.forEach(item => {
        const link = screen.getByRole('link', { name: item.name });
        expect(link).toHaveAttribute('href', item.link);
      });
    });

    test('renders the model image with correct src and alt', () => {
      render(
        <Shop
          menu={sampleMenu}
          toggleDropdown={toggleDropdownMock}
          activeDropdown="shopPages"
          closingDropdown={null}
        />
      );

      const img = screen.getByTestId('img-shop');
      expect(img).toHaveAttribute('src', '/images/model.png');
      expect(img).toHaveAttribute('alt', 'Model');
    });
  });

  test('dropdown has hide class when closingDropdown matches', () => {
    render(
      <Shop
        menu={sampleMenu}
        toggleDropdown={toggleDropdownMock}
        activeDropdown={null}
        closingDropdown="shopPages"
      />
    );
    const dd = screen.getByTestId('dropdown-shop');
    expect(dd).toHaveClass('hide');
    expect(dd).not.toHaveClass('show');
  });
});
