import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pages from '../components/Pages';

describe('Pages Component', () => {
  const mockToggleDropdown = jest.fn();

  const pagesMenu = Array(5).fill({});
  pagesMenu[4] = {
    name: 'Pages',
    subcategories: [
      { image: 'img0.png', subcategorylist: [
          { name: 'Page A1', link: '/a1' },
          { name: 'Page A2', link: '/a2' },
          { name: 'Page A3', link: '/a3' },
          { name: 'Page A4', link: '/a4' }
        ]
      },
      { image: 'img1.png', subcategorylist: [
          { name: 'Page B1', link: '/b1' },
          { name: 'Page B2', link: '/b2' },
          { name: 'Page B3', link: '/b3' },
          { name: 'Page B4', link: '/b4' }
        ]
      },
      { image: 'img2.png', subcategorylist: [
          { name: 'Page C1', link: '/c1' },
          { name: 'Page C2', link: '/c2' },
          { name: 'Page C3', link: '/c3' }
        ]
      },
      { image: 'img3.png', subcategorylist: [
          { name: 'Page D1', link: '/d1' },
          { name: 'Page D2', link: '/d2' },
          { name: 'Page D3', link: '/d3' },
          { name: 'Page D4', link: '/d4' },
          { name: 'Page D5', link: '/d5' },
          { name: 'Page D6', link: '/d6' },
          { name: 'Page D7', link: '/d7' }
        ]
      },
      { name: 'Extra', subcategorylist: [
          { name: 'Page E1', link: '/e1' },
          { name: 'Page E2', link: '/e2' },
          { name: 'Page E3', link: '/e3' },
          { name: 'Page E4', link: '/e4' },
          { name: 'Page E5', link: '/e5' },
          { name: 'Page E6', link: '/e6' },
          { name: 'Page E7', link: '/e7' }
        ]
      },
      { name: 'More', subcategorylist: [
          { name: 'Page M1', link: '/m1' },
          { name: 'Page M2', link: '/m2' },
          { name: 'Page M3', link: '/m3' }
        ]
      },
      { name: 'Special', subcategorylist: [
          { name: 'Page S1', link: '/s1' },
          { name: 'Page S2', link: '/s2' },
          { name: 'Page S3', link: '/s3' },
          { name: 'Page S4', link: '/s4' },
          { name: 'Page S5', link: '/s5' }
        ]
      }
    ]
  };

  const allLinks = pagesMenu[4].subcategories
    .flatMap(cat => cat.subcategorylist || [])
    .map(item => [item.name, item.link]);

  afterEach(() => jest.clearAllMocks());

  test('renders trigger button', () => {
    render(
      <Pages
        menu={pagesMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown={null}
        closingDropdown={null}
      />
    );
    expect(screen.getByRole('button', { name: /Pages/i })).toBeInTheDocument();
  });

  test('calls toggleDropdown on header click', () => {
    render(
      <Pages
        menu={pagesMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown={null}
        closingDropdown={null}
      />
    );
    fireEvent.click(screen.getByText(/Pages/i));
    expect(mockToggleDropdown).toHaveBeenCalledWith('pages');
  });

  test('dropdown visibility classes', () => {
    const { rerender } = render(
      <Pages
        menu={pagesMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="pages"
        closingDropdown={null}
      />
    );
    const dropdown = screen.getByTestId('pages-dropdown');
    expect(dropdown).toHaveClass('show');
    expect(dropdown).not.toHaveClass('hide');

    rerender(
      <Pages
        menu={pagesMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="pages"
        closingDropdown="pages"
      />
    );
    expect(dropdown).toHaveClass('hide');

    rerender(
      <Pages
        menu={pagesMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown={null}
        closingDropdown={null}
      />
    );
    expect(dropdown).not.toHaveClass('show');
  });

  test.each(allLinks)('renders link "%s" with correct href', (name, href) => {
    render(
      <Pages
        menu={pagesMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="pages"
        closingDropdown={null}
      />
    );
    const links = screen.getAllByTestId('pages-link');
    const link = links.find(el => el.textContent.trim().startsWith(name));
    expect(link).toHaveAttribute('href', href);
  });

  test('renders column images with correct src', () => {
    render(
      <Pages
        menu={pagesMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="pages"
        closingDropdown={null}
      />
    );
    const images = screen.getAllByTestId('pages-img');
    const srcs = images.map(img => img.getAttribute('src'));
    expect(srcs).toEqual(expect.arrayContaining(['img0.png', 'img1.png', 'img2.png', 'img3.png']));
  });
});
