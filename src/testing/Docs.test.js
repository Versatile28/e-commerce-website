import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Docs from '../components/Docs';

describe('Docs Component', () => {
  const mockToggleDropdown = jest.fn();
  const docsMenu = Array(6).fill({});
  docsMenu[5] = {
    name: 'Docs',
    subcategories: [
      {
        name: 'Guides',
        subcategorylist: [
          { name: 'Guide 1', link: '/guide1' },
          { name: 'Guide 2', link: '/guide2' },
          { name: 'Guide 3', link: '/guide3' },
          { name: 'Guide 4', link: '/guide4' },
          { name: 'Guide 5', link: '/guide5' },
          { name: 'Guide 6', link: '/guide6' },
          { name: 'Guide 7', link: '/guide7' }
        ]
      },
      {
        name: 'API',
        subcategorylist: [
          { name: 'API 1', link: '/api1' },
          { name: 'API 2', link: '/api2' }
        ]
      }
    ]
  };

  const allDocLinks = docsMenu[5].subcategories
    .flatMap(cat => cat.subcategorylist || [])
    .map(item => [item.name, item.link]);

  afterEach(() => jest.clearAllMocks());

  test('renders trigger button with correct label', () => {
    render(
      <Docs
        menu={docsMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown={null}
        closingDropdown={null}
      />
    );
    expect(screen.getByRole('button', { name: /docs/i })).toBeInTheDocument();
  });

  test('calls toggleDropdown with "docs" when header is clicked', () => {
    render(
      <Docs
        menu={docsMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown={null}
        closingDropdown={null}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /docs/i }));
    expect(mockToggleDropdown).toHaveBeenCalledWith('docs');
  });

  test('dropdown container shows and hides based on props', () => {
    const { rerender } = render(
      <Docs
        menu={docsMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="docs"
        closingDropdown={null}
      />
    );
    const container = screen.getByTestId('docs-dropdown');
    expect(container).toHaveClass('show');
    expect(container).not.toHaveClass('hide');

    rerender(
      <Docs
        menu={docsMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="docs"
        closingDropdown="docs"
      />
    );
    expect(container).toHaveClass('hide');

    rerender(
      <Docs
        menu={docsMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown={null}
        closingDropdown={null}
      />
    );
    expect(container).not.toHaveClass('show');
  });

  test('renders subcategory headings correctly', () => {
    render(
      <Docs
        menu={docsMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="docs"
        closingDropdown={null}
      />
    );
    docsMenu[5].subcategories.forEach(cat => {
      expect(screen.getByText(cat.name)).toBeInTheDocument();
    });
  });

  test.each(allDocLinks)('renders link "%s" with correct href', (name, href) => {
    render(
      <Docs
        menu={docsMenu}
        toggleDropdown={mockToggleDropdown}
        activeDropdown="docs"
        closingDropdown={null}
      />
    );
    const link = screen.getByRole('link', { name });
    expect(link).toHaveAttribute('href', href);
  });
});
