import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icons from '../components/Icons';

describe('Icons Component', () => {
  const mockToggleDropdown = jest.fn();
  const promoText = /Don't miss our biggest sales this year\. Use the code 'SUMMER35' at checkout until Jun\. 15!/i;

  const iconsMenu = Array(4).fill({});
  iconsMenu[3] = {
    name: 'Icons',
    subcategories: [
      { subcategorylist: [
          { name: 'Trousers', link: '/trousers' },
          { name: 'Shorts', link: '/shorts' }
        ]
      },
      { subcategorylist: [
          { name: 'Jackets', link: '/jackets' },
          { name: 'Underwear', link: '/underwear' }
        ]
      },
      { subcategorylist: [
          { name: 'T-Shirts', link: '/tshirts' },
          { name: 'Watches', link: '/watches' }
        ]
      },
      { subcategorylist: [
          { name: 'Shirts', link: '/shirts' },
          { name: 'Bags', link: '/bags' }
        ]
      },
      { subcategorylist: [
          { name: 'Pullovers', link: '/pullovers' },
          { name: 'Caps', link: '/caps' }
        ]
      },
      { subcategorylist: [
          { name: 'Scarfs', link: '/scarfs' },
          { name: 'Accessories', link: '/accessories' }
        ]
      }
    ]
  };

  const linkItems = iconsMenu[3].subcategories
    .flatMap((sc) => sc.subcategorylist)
    .map((item) => [item.name, item.link]);

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders trigger button with correct name', () => {
    render(
      <Icons
        menu={iconsMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown={null}
        closingDropdown={null}
      />
    );
    expect(screen.getByRole('button', { name: /Icons/i })).toBeInTheDocument();
  });

  test('calls toggleDropdown with "icons" on header click', () => {
    render(
      <Icons
        menu={iconsMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown={null}
        closingDropdown={null}
      />
    );
    fireEvent.click(screen.getByText(/Icons/i));
    expect(mockToggleDropdown).toHaveBeenCalledWith('icons');
  });

  test.each(linkItems)(
    'renders icon link "%s" with correct href',
    (name, link) => {
      render(
        <Icons
          menu={iconsMenu}
          toggleDropdown={mockToggleDropdown}
          activeDropdown="icons"
          closingDropdown={null}
        />
      );

      const linkEl = screen.getByRole('link', { name });
      expect(linkEl).toHaveAttribute('href', link);
    }
  );

  test('shows promotional text when dropdown is active', () => {
    render(
      <Icons
        menu={iconsMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="icons"
        closingDropdown={null}
      />
    );
    expect(screen.getByText(promoText)).toBeVisible();
  });
});
